import React from 'react'
import './App.css';
import {useState} from "react";
import Axios from "axios";
import logo from './logo/img.png';
import Recipie from './Recipie';


function App() {
 const[query ,setquery] =useState([]);
 const [recipes,setrecipes] =useState([]);
 const [loading,setLoading]=useState(true);

  const YOUR_APP_ID = process.env.REACT_APP_YOUR_APP_ID;
const YOUR_APP_KEY =process.env.REACT_APP_YOUR_APP_KEY;
console.log(YOUR_APP_ID);

  const Url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free `;

  async function getRecipes (){
    var result =await Axios.get(Url);
    setrecipes(result.data.hits);
    setLoading(false);
    console.log(result.data);
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    getRecipes();

  }
  return (

  
    <div className='app'>
      <h2><img className='logo'  src={logo} alt='logo'/>
      Food <span>Recipe</span> Plaza</h2>
      <form className="appform" onSubmit={onSubmit}>
        <input className='input' type="text" placeholder="Enter Ingridient " value={query} onChange={(e)=> setquery(e.target.value)}></input>
        <input className='submit' type="submit" value="search"/>
      </form>
      <div id='hello' className='unipadding'>
        {recipes.map (recipe =>{
        return <Recipie recipe={recipe}/>
        })}
      </div>
    </div>
  
  
  );
}

export default App;
