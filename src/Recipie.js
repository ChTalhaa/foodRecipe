 import React from 'react';
import './Recipe.css';

function Recipie({recipe}) {
  return (

    <div className='recipetile'  onClick={()=> window.open(recipe["recipe"]["url"])}>

    <img className='recipeimg' src={recipe["recipe"]["image"]}/>
    <p className='recipename'>{recipe["recipe"]["label"]}</p>
    
   
        
    </div>
  )
};

export default Recipie;