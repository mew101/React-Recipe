import React,{useEffect, useSate} from 'react';
import Recipe from "./Recipe";
import './App.css';


const App = () => {

  const APP_ID = 'e03c014b'
  const APP_KEY = '81c37b55a389866039cfd9824b61039c	'

  const [recipes, setRecipes] = useSate([]);

   useEffect( () => {
     getRecipes();
   }, []);

   const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
   }
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type = "text" />
        <button className="search-button" type = "submit">search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe />
      ))};
    </div>
  );
}

export default App;
