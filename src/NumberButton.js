import "./Button.css";

// import calculator from "./Calculator";

function NumberButton(props) {
  return (
    <button className="NumberButton" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default NumberButton;
