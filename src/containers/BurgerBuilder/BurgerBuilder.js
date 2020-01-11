import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/Build Controls/BuildControls'
import Modal from '../../components/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES = {
    salad: 10,
    bacon: 20,
    cheese: 5,
    meat: 30
}
class BurgerBuilder extends Component{

    state={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 0,
        purchasable: false,
        purchasing: false
    }

    purchaseHandler = () =>{
        this.setState({
            purchasing: true
        })
    }

    sum( obj ) {
        var sum = 0;
        for( var el in obj ) {
          if( obj.hasOwnProperty( el ) ) {
            sum += parseFloat( obj[el] );
          }
        }
        return sum;
      }

    updatePurchaseState(obj){
        const ingredients = {
            ...obj
        }
        const sum1 = this.sum(ingredients);
        console.log(sum1);
        this.setState({
            purchasable: sum1 > 0 
        })
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        this.setState({
            ingredients : updatedIngredient
        })
        const oldPrice = this.state.totalPrice;
        const ingredientPrice = INGREDIENT_PRICES[type];
        const currentPrice = oldPrice + ingredientPrice;
        this.setState({
            totalPrice : currentPrice
        })
        this.updatePurchaseState(updatedIngredient);
    }
    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        const newCount = oldCount - 1;
        const currentState ={
            ...this.state.ingredients
        }  
        currentState[type] = newCount;      
        const currentPrice = this.state.totalPrice
        const updatedPrice = currentPrice - INGREDIENT_PRICES[type]
        this.setState({
            ingredients: currentState,
            totalPrice:updatedPrice
        })
        this.updatePurchaseState(currentState);
    }

    cancelHandler = () =>{
        this.setState({
            purchasing:false
        })
    }

    render(){
        return(
            <React.Fragment>
                <Burger ingredients = {this.state.ingredients} />
                <Modal show={this.state.purchasing} cancel={this.cancelHandler}>
                    <OrderSummary ingredients = {this.state.ingredients} />
                </Modal>
                <BuildControls 
                addIngredient = {this.addIngredientHandler} 
                price ={this.state.totalPrice}
                ingredients={this.state.ingredients} 
                remove = {this.removeIngredientHandler} 
                purchasable = {this.state.purchasable}
                order={this.purchaseHandler}/>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder