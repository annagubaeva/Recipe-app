import './RecipesList.scss';


import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../AppFilter/AppFilter';

import RecipeService from '../../services/RecipeService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';
import { Component } from 'react';

class RecipesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            loading: true,
            error: false,
            term: '',
            filterDishType: '',
            filterCategory: '',
            selectedRecipe: '',
        }
    }

    recipeService = new RecipeService();

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidMount() {
        this.recipeService
        .getAllRecipes()
        .then(this.onRecipesLoaded)
        .catch(this.onError)
    }

    onRecipesLoaded = (recipes) => {
        this.setState({
            recipes,
            loading: false
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    searchRec(items, term) {
        if (term.length === 0) {
            return items;
        }
      
        return items.filter(item => {
            return item.title.indexOf(term) > -1
        })
    }

    renderItems(arr) {
        const items = arr?.map((item) => {

            return (
                <li className="recipe__item"
                key={item.id}
                onClick={() => this.props.onRecipeSelected(item.id)}>
                    <img src={item.image} alt="image"/>
                    <div className="recipe__name">{item.title}</div>
                    <i className='fa fa-star'></i>
                </li>
            )
        });
        
        return (
            <ul className="recipe__grid">
                {items}
            </ul>
        );
    }

    render() {
        const {recipes, term, loading, error} = this.state;
        const visibleData = this.props.filterRec(this.props.filterRec(this.searchRec(recipes, term), this.props.filterDishType), this.props.filterCategory);
        const items = this.renderItems(visibleData);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div>
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter filterCategory={this.props.filterCategory} onCategoryFilterSelected={this.props.onCategoryFilterSelected}/>
                <div className="recipe__list">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            </div>
        )  
    }
}

export default RecipesList;