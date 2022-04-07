class RecipeService {
    // _apiBase = 'https://api.spoonacular.com/recipes';
    // _apiKey = 'apiKey=0f0abe9d79dd42a6b7254a84f6887a16&&&';
    // _apiBase = 'api.edamam.com/api/recipes/v2';
    // _apiKey = 'd426d40fee61dc941be971c42b126b5f';

    
    getResourse = async(url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
    
    getAllRecipes = async() => {
        // const res = await this.getResourse(`${this._apiBase}/random?${this._apiKey}number=9`);
        // return res.recipes.map(item => (this._transformRecipe(item)));
        const res = await this.getResourse(`https://api.edamam.com/api/recipes/v2?type=public&q=egg&app_id=9b1dc702&app_key=%2061ebc4cd13afc1cbc7255cc92bf8e69f&diet=balanced&health=vegan&calories=100-500&random=true`);
        return res.hits.map(item => (this._transformRecipe(item.recipe)));
    }

    getRandomRecipe = async(id) => {
        // const res = await this.getResourse(`${this._apiBase}/random?${this._apiKey}`);
        // return this._transformRecipe(res.recipes[0]);
        const res = await this.getResourse(`https://api.edamam.com/api/recipes/v2?type=public&q=egg&app_id=9b1dc702&app_key=61ebc4cd13afc1cbc7255cc92bf8e69f&random=true`);
        console.log(res.hits[id].recipe)
        return this._transformRecipe(res.hits[0].recipe);
    }

    _transformRecipe = (rec) => {
        return {
            // id: rec.id,
            title: `${rec.label.slice(0, 30)}...`,
            image: rec.image,
            calories: Math.round(rec.calories),
            servings: rec.yield,
            health: rec.health ? rec.health : null,
            dietLabels: rec.dietLabels,
            mealType: rec.mealType,
        }
    }
}

export default RecipeService;