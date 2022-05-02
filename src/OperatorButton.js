import "./Button.css";

// import calculator from "./Calculator";

function OperatorButton(props) {
  return (
    <button className="OperatorButton" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default OperatorButton;
