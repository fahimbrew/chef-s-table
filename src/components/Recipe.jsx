import PropTypes from 'prop-types';
const Recipe = ({recipe}) => {
    // console.log(recipe)
    const {recipe_img,recipe_name,short_description,ingredients,preparing_time,calories} = recipe
    return (
        <div className="card card-compact bg-base-100 w-96 mx-auto shadow-xl p-4">
  <figure>
    <img className="h-[200px] w-full object-cover"
      src={recipe_img}
      alt="recipes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p className="text-gray-500">{short_description}</p>
    <div className="divider"></div>
    <div>
        <h3 className='text-gray-600 font-semibold my-2'>Ingredients: {ingredients.length}</h3>
        <ul className='list-disc'>
            {
                ingredients.map((ingredient,index)=><li className='text-gray-500' key={index}>{ingredient}</li>)
            }
        </ul>
        <div className="divider"></div>
        <div className='flex gap-5 mb-4'>
           <h3><i className="fa-regular fa-clock"></i> <span>{preparing_time} minutes</span></h3>
           <h3><i className="fa-solid fa-fire-flame-curved"></i> <span>{calories} Calories</span></h3>
        </div>
    </div>
    <div className="card-actions">
      <button className="btn bg-[#0BE58A]">Want to Cook</button>
    </div>
  </div>
</div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
}

export default Recipe;