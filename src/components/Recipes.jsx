import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
      
    const [recipes,setRecipes] = useState([]);
    useEffect(()=>{
        fetch('./recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
  
// console.log(recipes);

    return (
        <div className="md:w-3/5 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                recipes.map((recipe,index)=><Recipe key={index} recipe={recipe}></Recipe>)
            }
            
        </div>
    );
};

export default Recipes;