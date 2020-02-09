import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/Build Controls/BuildControls";
import Modal from "../../components/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/spinner/spinner";
import withErrorHandler from "../../components/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 10,
  bacon: 20,
  cheese: 5,
  meat: 30
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .request("https://my-react-burger-d.firebaseio.com/ingredients.json")
      .then(res => {
        this.setState({
          ingredients: res.data
        });
      }).catch(err=>{
        this.setState({
          error:err
        })
      });
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  sum(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }

  updatePurchaseState(obj) {
    const ingredients = {
      ...obj
    };
    const sum1 = this.sum(ingredients);
    console.log(sum1);
    this.setState({
      purchasable: sum1 > 0
    });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;
    this.setState({
      ingredients: updatedIngredient
    });
    const oldPrice = this.state.totalPrice;
    const ingredientPrice = INGREDIENT_PRICES[type];
    const currentPrice = oldPrice + ingredientPrice;
    this.setState({
      totalPrice: currentPrice
    });
    this.updatePurchaseState(updatedIngredient);
  };
  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount - 1;
    const currentState = {
      ...this.state.ingredients
    };
    currentState[type] = newCount;
    const currentPrice = this.state.totalPrice;
    const updatedPrice = currentPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients: currentState,
      totalPrice: updatedPrice
    });
    this.updatePurchaseState(currentState);
  };

  cancelHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  purchaseContinueHandler = () => {
    this.setState({
      loading: true
    });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Tanvesh Sarve",
        address: {
          street: "amanpur",
          zip: 1234,
          country: "india"
        },
        email: "sarvetanvesh01@gmail.com",
        delivery: "fastest"
      }
    };
    axios
      .post("/orders.json", order)
      .then(Response => {
        // console.log(Response);
        this.setState({
          loading: false,
          purchasing: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false,
          purchasing: false
        });
      });
  };

  render() {
    let orderSummary = null;

    let burger = this.state.error ? <p>Ingredients cant be loaded!</p> : <Spinner /> ;

    if (this.state.ingredients) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredient={this.addIngredientHandler}
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            remove={this.removeIngredientHandler}
            purchasable={this.state.purchasable}
            order={this.purchaseHandler}
          />
        </React.Fragment>
      );
      if (this.state.loading) {
        orderSummary = <Spinner />;
      }
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          cancel={this.cancelHandler}
          continue={this.purchaseContinueHandler}
        />
      );
    }

    return (
      <React.Fragment>
        {burger}
        <Modal show={this.state.purchasing} cancel={this.cancelHandler}>
          {orderSummary}
        </Modal>
      </React.Fragment>
    );
  }
}
export default withErrorHandler(BurgerBuilder, axios);