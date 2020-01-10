import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'
 
const burger = (props) =>{
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKeys =>{
        return [...Array(props.ingredients[igKeys])].map((_, i) => {
            return <BurgerIngredient key = {igKeys + i} type={igKeys} />
        })
    }).reduce((arr, el) =>{
        return arr.concat(el);
    }, [])
    
    console.log(transformedIngredients);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p> Please add more ingredients! </p>
    }
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger