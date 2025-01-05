import PropTypes from "prop-types";


const Sidebar = ({recipeQueue,handleRemove,preparedRecipes,calculateTimeAndCalories,totalTime,totalCalories}) => {
    // console.log(recipeQueue);
    // console.log(preparedRecipes);
    return (
        <div className="md:w-2/5 w-full border rounded-2xl p-8">
            <h3 className="text-3xl text-center font-bold" >Want to Cook : {recipeQueue.length}</h3>
            <div className="divider"></div>
            {/* want to cook table */}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        recipeQueue.map((recipe,index)=>
            <tr className="hover" key={index}>
        <th>{index+1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time} minutes</td>
        <td>{recipe.calories} Calories</td>
        <td><button onClick={()=>{
            handleRemove(recipe.recipe_id)
            calculateTimeAndCalories(recipe.preparing_time,recipe.calories)
        }
        } className="btn bg-[#0BE58A]">Preparing</button></td>
      </tr>
        )
      }
    

    </tbody>
  </table>
            </div>
            {/* currently cook table */}
            <div className="divider"></div>
            <h3 className="text-3xl text-center font-bold mt-8" >Currently Cooking : {preparedRecipes.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        
      </tr>
    </thead>
    <tbody>
      {
        preparedRecipes.map((recipe,index)=>
            <tr className="hover" key={index}>
        <th>{index+1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time} minutes</td>
        <td>{recipe.calories} Calories</td>
        
      </tr>
        )
      }
      <tr className="border-none">
      <th></th>
        <td></td>
        <td>Total Time: {totalTime}</td>
        <td>Total Calories: {totalCalories}</td>
      </tr>
    

    </tbody>
  </table>
            </div>
        </div>
    );
};
Sidebar.propTypes = {
    recipeQueue : PropTypes.array,
    handleRemove : PropTypes.func,
    preparedRecipes : PropTypes.array,
    calculateTimeAndCalories : PropTypes.func,
    totalCalories : PropTypes.number,
    totalTime : PropTypes.number,
}
export default Sidebar;