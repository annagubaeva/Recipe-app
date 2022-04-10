class RecipeService {
    _apiBase = 'https://api.spoonacular.com/recipes';
    _apiKey = 'apiKey=58188f04f78c429ba4b05257b3ebb501&&&';

    
    getResourse = async(url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
    
    getAllRecipes = async() => {
        const res = await this.getResourse(`${this._apiBase}/random?${this._apiKey}number=9&offset=210`);
        return res.recipes.map(item => (this._transformRecipe(item)));
    }

    getRandomRecipe = async(id) => {
        const res = await this.getResourse(`${this._apiBase}/random?${this._apiKey}number=1`);
        return this._transformRecipe(res.recipes[0]);
    }

    _transformRecipe = (rec) => {
        return {
            id: rec.id,
            title: `${rec.title.slice(0, 30)}...`,
            image: rec.image,
            servings: rec.servings,
            readyInMinutes: rec.readyInMinutes,
            diets: rec.diets ? rec.diets : null,
            dishTypes: rec.dishTypes ? rec.dishTypes : null,
            cuisines: rec.cuisines ? rec.cuisines : null,
            vegan: rec.vegan,
            veryHealthy: rec.veryHealthy,
            ingredients: rec.extendedIngredients,
            instructions: rec.instructions
        }
    }
}

export default RecipeService;