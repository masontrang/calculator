import "./App.css";
import React, { useReducer } from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import { calcReducer, initialState } from "./calc.js";
// import { calcReducer, initialState as calcInitialState } from "./calc.js";

// const displayValue = () => {
//   console.log("hello");
// };

function App() {
  // const [display, setDisplay] = useState("0");

  //dispatch runs the reducer function, whatever passed in becomes the action of the reducer
  //useReducer() -- give reducer function and initialState
  const [state, dispatch] = useReducer(calcReducer, initialState);
  console.log("state", state);

  return (
    <div className="App">
      <Display class="display" displayValue={state.current} />
      <ButtonPanel
        class="buttonPanel"
        onButtonClick={(value) => {
          console.log("clicked", value);
          dispatch({ text: "hello there", pressed: value });
          // setDisplay(value);
        }}
      />
    </div>
  );
}

// function Fake() {
//   const { state, dispatch } = useContext(Ctx);
//   const value = useSelector((state) => state.operator);
// }

export default App;
