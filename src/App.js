import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionalComponent />
        <ClassComponent />
      </header>
    </div>
  );
}

export default App;
