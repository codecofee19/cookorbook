import AddMeal from './AddMeal';
import './App.css';
import logo from './cover.png';

function App() {
  return (
     <div className="App">
      <header>
        <img className ="App-logo" alt="logo" src={logo}/>
        </header>
        <p>
          This is an interactive way to way to choose the best option for a meal! Simply enter what you want to eat below and the site will provide a suggestion on the best option!
        </p>
        <AddMeal/>
   
    </div>
  );
}

export default App;
