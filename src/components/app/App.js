import Sidebar from '../Sidebar/Sidebar';
import AppInfo from '../AppInfo/AppInfo';
import RecipesList from '../RecipesList/RecipesList';
import RandomRecipe from '../RandomRecipe/RandomRecipe';

const App = () => {

  return (
    <div className='app'>
            
      <div className='app__content'>

        <Sidebar/>
        
        <main className='app__main'>
          <AppInfo/>
          <RecipesList/>
          <RandomRecipe/>
        </main>

      </div>
    </div>
  );
}

export default App;
