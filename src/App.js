import "./App.css";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";

const displayValue = () => {
  console.log("hello");
};

function App() {
  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          <div className="prev-operand">12312346</div>
          <div className="curr-operand">123147</div>
        </div>
        <div className="buttonPanel">
          <ButtonPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
