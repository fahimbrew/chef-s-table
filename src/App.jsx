import { useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Recipes from './components/Recipes'
import Sidebar from './components/Sidebar'
import OurRecipes from './OurReciepes'

function App() {

  const [recipeQueue,setRecipeQueue] = useState([]);

  const [preparedRecipes,setPreparedRecipes] = useState([]);

  const [totalTime,setTotalTime] = useState(0);

  const [totalCalories,setTotalCalories] = useState(0);

  const handleAddRecipeQueue = (recipe)=>{
    // console.log(recipe);
    // console.log('Ami recipe pathabo')
    const alreadyExist = recipeQueue.find((prevouslyAdded)=>prevouslyAdded.recipe_id === recipe.recipe_id);
    if(!alreadyExist){
      setRecipeQueue([...recipeQueue,recipe]);
    }else{
      alert('Recipe already exist in the queue')
    }
    
  }

  const handleRemove = id =>{
    // find which item should be removed

    const deletedRecipe = recipeQueue.find(recipe=>recipe.recipe_id === id);

    //  remove from want to cook queue

    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id);
    setRecipeQueue(updatedQueue);
    setPreparedRecipes([...preparedRecipes,deletedRecipe]);
  }

  const calculateTimeAndCalories = (time,calories)=>{
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);

  }
 

  return (
    <div className='container p-3 mx-auto'>
    {/* Header */}
    <Header></Header>
    {/* Banner */}
    <Banner></Banner>

    {/* Our reciepes section */}
    <OurRecipes></OurRecipes>
    {/* Recipe Card section */}
    <section className='flex flex-col md:flex-row'>
      {/* Recipes Cards */}
      <Recipes handleAddRecipeQueue = {handleAddRecipeQueue}></Recipes>
      {/* Sidebar */}
      <Sidebar recipeQueue = {recipeQueue}
               handleRemove = {handleRemove}

               preparedRecipes = {preparedRecipes}
               calculateTimeAndCalories = {calculateTimeAndCalories}
               totalTime = {totalTime}
               totalCalories = {totalCalories}
      
      ></Sidebar>
    </section>
      
      
      
    </div>
  )
}

export default App
