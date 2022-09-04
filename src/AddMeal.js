import { useState } from "react";
import axios from "axios";



const AddMeal = function() {
    const emptyresult = 0;

    const emptyprice = 0;

    const [query, setQuery] = useState("");

    const [delivermeal, setDeliver] = useState("");
  
    const [price, setPrice] = useState(emptyprice);


    const mealMaps = {
     "spaghetti": ["spaghetti", "pasta sauce"],
     "cheeseburger": ["buns","ground beef", "lettuce", "onion", "sliced cheese"],
     "bbq": ["brisket"],
     "taco": ["ground beef", "taco shells", "lettuce", "salsa", "shredded cheese", "roma tomato"],
     "sandwhich": ["bread", "lettuce", "tomato"], 
     "salad": ["salad", "salad dressing"],
     "toast": ["bread", "butter"]
    }


   





    const fillerWords = ["and", "a", "with"];

    
    const generateMeal = async function(result) { 
    const {meal} = result;
    let ingredients = meal.toLowerCase().trim();
    let ingredient_list = ingredients.split(/\s+/);
    const query_list = ingredient_list.flatMap((str) =>  {
        str = mealMaps[str] || str;
        return str;
    })
    
  
    console.log(query_list);
    const endpoint = "https://cook-or-book22.herokuapp.com/" + query_list;
   
    console.log(endpoint);
    const res = await axios.get(endpoint);
   
    console.log(res.data.price);
    
    setPrice(res.data.price);

    

    }
    


    const handleSubmit =  async function (event) {
        event.preventDefault();
        setPrice(0);
        let newresult = {meal:query};
        let newprice  = await generateMeal(newresult);
        
    }

    
    
    return ( 
        <form
        onSubmit={handleSubmit}>
        <label htmlFor="meal">Enter what kind of meal you want to eat: </label>
        <input type="text" id="meal" name="meal" value={query} onChange={(e) => setQuery(e.target.value)}/>
        <br/><label htmlFor="delivery">Now, enter how much you paid having this meal <em>delivered:</em> </label>
        <input type="text" id="delivery" name="delivery" value={delivermeal} onChange={(e) => setDeliver(e.target.value)}/>
        <br/><input type="submit" id="submitmeal" name="submitmeal"/>
        {delivermeal && <p>You paid ${delivermeal} to have this delivered.</p>}
        {price > 0 && <p>In comparison, if you were to get the ingredients for this meal from Walmart it would cost on average: ${price}</p>}
        {price && delivermeal && <p>The verdict is in you should go with {price < delivermeal ? "going to Walmart and getting the stuff." : "having it delivered"} </p>}
        </form>
        ); 
}

export default AddMeal;