import './RandomRecipe.scss';
import RecipeService from '../../services/RecipeService';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { Component } from 'react';

class RandomRecipe extends Component {
    // constructor(props) {
    //     super(props);
    //     this.updateRecipe = this.updateRecipe.bind(this);
    // }

    state = {
        recipe: {},
        loading: true,
        error: false,
    }

    recipeService = new RecipeService();

    componentDidMount() {
        this.updateRecipe();
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

    updateRecipe = () => {
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
            <div className="randomrecipe">
                {errorMessage}
                <div className='randomrecipe__block'>
                {spinner}
                {content}
                    <div className="randomrecipe__btns">
                        <button onClick={this.updateRecipe} className="btn btn-random">Random recipe!</button>
                    </div>
                </div>
            </div>
            
        )
    }
}

const View = ({recipe}) => {
    const {title, image, servings, calories} = recipe;

    return (
        <div className="randomrecipe__content">
            <img src={image} alt="Abyss"/>
            <div className="randomrecipe__content__info">
                <div className="randomrecipe__content__name">{title}</div>
                <div className="randomrecipe__content__descr">
                    {/* <p>Time: {readyInMinutes}</p>
                    <p>Servings: {servings}</p> */}
                    <p>Servings: {servings}</p>
                    <p>Calories: {calories}</p>
                    <a href="" className="btn btn-more">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default RandomRecipe;