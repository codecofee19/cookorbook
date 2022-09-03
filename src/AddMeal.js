const AddMeal = function() {
    return ( <form>
        <label for="meal">Enter what kind of meal you want! </label>
        <input type="text" id="meal" name="meal"/>
        <input type="submit" id="submitmeal" name="submitmeal"/>
        <p>Results:</p>
        </form>); 
}

export default AddMeal;