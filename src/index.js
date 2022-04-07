import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';

// import RecipeService from './services/RecipeService'

// const recipeService = new RecipeService;

// recipeService.getResourse(`https://api.edamam.com/api/recipes/v2?type=public&q=onion&app_id=9b1dc702&app_key=61ebc4cd13afc1cbc7255cc92bf8e69f&random=true`).then(res => console.log(res.hits[0].recipe));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
