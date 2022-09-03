import { useState } from "react";

const AddMeal = function() {
    const emptyresult = {meal:"",};

    const [query, setQuery] = useState("");
  
    const [result, setResult] = useState(emptyresult)

    const mealMaps = {
     "spaghetti": ["spaghetti", "pasta sauce"],
     "cheeseburger": ["buns","ground beef", "lettuce", "onion", "sliced cheese"],
     "bbq": ["brisket"],
     "taco": ["ground beef", "taco shells", "lettuce", "salsa", "shredded cheese", "roma tomato"],
     "sandwhich": ["bread", "lettuce", "tomato"], 
    }

    
    const generateMeal = function(result) {
    const {meal} = result;
    console.log(meal.split(" "));
    }
    


    const handleSubmit = function (event) {
        event.preventDefault();
        let newresult = {meal:query};
        generateMeal(newresult);
        setResult((result) => ({...result, ...newresult}))
    }

    
    
    return ( <form
        onSubmit={handleSubmit}>
        <label htmlFor="meal">Enter what kind of meal you want! </label>
        <input type="text" id="meal" name="meal" value={query} onChange={(e) => setQuery(e.target.value)}/>
        <input type="submit" id="submitmeal" name="submitmeal"/>
        {result.meal && <p>Results: {result.meal}</p>}
        </form>); 
}

export default AddMeal;