import './RecipeInfo.scss';
import RecipeService from '../../services/RecipeService';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { Component } from 'react';

class RecipeInfo extends Component {

    state = {
        recipe: {},
        loading: true,
        error: false,
    }

    recipeService = new RecipeService();

    componentDidMount() {
        this.updateRandomRecipe();
    }

    onRecipeLoaded = (recipe) => {
        this.setState({
            recipe,
            loading: false
        })
    }

    onRecipeLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateRandomRecipe = () => {
        const id = Math.floor(Math.random() * 20);
        this.onRecipeLoading();
        this.recipeService
        .getRandomRecipe(id)
        .then(this.onRecipeLoaded)
        .catch(this.onError);
    }

    render() {
        const {recipe, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View recipe={recipe}/> : null;

        return (
            <div className="selectedrecipe">
                {errorMessage}
                <div className='selectedrecipe__block'>
                    {spinner}
                    {content}
                    <div className="selectedrecipe__content__btns">
                        <button onClick={this.updateRandomRecipe} className="btn btn-random">Random recipe!</button>
                    </div>
                </div>
            </div>  
            
        )
    }
}

const View = ({recipe}) => {
    const {title, image, readyInMinutes, servings, ingredients, instructions, dishTypes} = recipe;
    // const RecIngredients = () => {
    //     ingredients.map((item) => {
    //         return (
    //             <p>{item.name}</p>
    //         )
    //     })
    // } 
    return (
        <div className="selectedrecipe__content">
            <div className="selectedrecipe__content__box">
                <img src={image} alt="Abyss"/>
                <div className="selectedrecipe__content__info">
                    <div className="selectedrecipe__content__name">{title}</div>
                    <div className="selectedrecipe__content__descr">
                        <p>Time: {readyInMinutes}</p>
                        <p>Servings: {servings}</p>
                        <p>Dish type: {dishTypes.map(dish => {return dish}).join(", ")}</p>
                    </div>
                </div>
            </div>
            <div className="selectedrecipe__content__guide">
                {/* <h2>Ingredients:</h2>
                <RecIngredients/> */}
            </div>
        </div>
    )
}

export default RecipeInfo;