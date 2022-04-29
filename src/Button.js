import "./Button.css";

import calculator from "./Calculator";

function Button(props) {
  const value = (event) => {};

  const isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };
  return (
    <button className="component-button button" onClick={value}>
      {props.value}
    </button>
  );
}

export default Button;
