import AddMeal from './AddMeal';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cook or Book?</h1>
        <p>
          This is an interactive way to way to choose the best option for a meal! Simply enter what you want to eat below and the site will provide a suggestion on the best option!
        </p>
        <AddMeal/>
      </header>
    </div>
  );
}

export default App;
