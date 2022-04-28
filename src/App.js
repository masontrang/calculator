import "./App.css";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";

const displayValue = () => {
  console.log("hello");
};

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <Display displayValue={displayValue} />
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
