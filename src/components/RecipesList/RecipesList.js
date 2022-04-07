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
            filter: '',
        }
    }

    // TODO: фильтры для low-carbs - проверить, включает ли массив "low-carb", аналогично с приемом пищи

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
    
    filterRec = (items, filter) => {
        switch (filter) {
            case "vegan":
                return items.filter(item => item.health == "vegan");
            case "low-carb":
                return items.filter(item => item.dietLabels == "low-Carb");
            case "breakfast":
                return items.filter(item => item.mealType == "breakfast");
            case "lunch":
                return items.filter(item => {if (item.mealType[0].indexOf("lunch") > -1) return});
            case "dinner":
                return items.filter(item => {if (item.mealType[0].indexOf("dinner") > -1) return});
            case "dessert":
                return items.filter(item => {if (item.mealType[0].indexOf("teatime") > -1) return});
            case "appetizers":
                return items.filter(item => item.mealType = "snacks");
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    renderItems(arr) {
        const items = arr?.map((item) => {

            return (
                <li className="recipe__item"
                key={item.id}>
                    <img src={item.image} alt="abyss"/>
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
        const {recipes, term, filter, loading, error} = this.state;
        const visibleData = this.filterRec(this.searchRec(recipes, term), filter);
        const items = this.renderItems(visibleData);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div>
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
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