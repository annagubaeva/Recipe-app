import { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import AppInfo from '../AppInfo/AppInfo';
import RecipesList from '../RecipesList/RecipesList';
import RecipeInfo from '../RecipeInfo/RecipeInfo';

class App extends Component {

  state = {
    filterCategory: '',
    filterDishType: '',
  }

  onRecipeSelected = (id) => {
    this.setState({
      selectedRecipe: id,
    })
  }

  onCategoryFilterSelected = (filter) => {
    this.setState({
      filterCategory: filter,
    })
  }

  onDishFilterSelected = (filter) => {
    this.setState({
      filterDishType: filter,
    })
  }

  filterRec = (items, filter) => {
    switch (filter) {
        case "vegan":
          console.log(items.map(item => item.vegan))
            return items.filter(item => item.vegan);
            
        case "healthy":
            return items.filter(item => item.veryHealthy);
        case "Breakfast":
            return items.filter(item => {return (item.dishTypes.indexOf("breakfast") > -1)});
        case "Lunch":
            return items.filter(item => {return (item.dishTypes.indexOf("lunch") > -1)});
        case "Dinner":
            return items.filter(item => {return (item.dishTypes.indexOf("dinner") > -1)});
        case "Dessert":
            return items.filter(item => {return (item.dishTypes.indexOf("dessert") > -1)});
        case "Appetizers":
            return items.filter(item => {return (item.dishTypes.indexOf("appetizers") > -1 || item.dishTypes.includes("side dish") > -1)});
        default:
            return items;
    }
    // , "Lunch", "Dinner", "Dessert", "Appetizers"
}

  render() {
    return (
      <div className='app'>
              
        <div className='app__content'>
  
          <Sidebar filterRec={this.filterRec}
                  onDishFilterSelected={this.onDishFilterSelected} 
                  filterDishType={this.state.filterDishType}/>
          
          <main className='app__main'>
            <AppInfo filterDishType={this.state.filterDishType}/>
            <RecipesList filterRec={this.filterRec}
                        filterDishType={this.state.filterDishType}
                        onCategoryFilterSelected={this.onCategoryFilterSelected}
                        onRecipeSelected={this.onRecipeSelected}
                        filterCategory={this.state.filterCategory}/>
            <RecipeInfo recipeId={this.state.selectedRecipe}/>
          </main>
  
        </div>
      </div>
    );
  }
}

export default App;
