import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";

function ButtonPanel(props) {
  const clickHandler = (value1) => {
    props.onButtonClick(value1);
  };
  return (
    <div className="ButtonPanel">
      <div>
        <OperatorButton
          value={"C"}
          onClick={() => {
            props.onButtonClick("C");
          }}
        />
        {/* onClick is prop name  */}

        <OperatorButton
          value={"+/-"}
          onClick={() => {
            props.onButtonClick(8);
          }}
        />
        <OperatorButton
          value={"%"}
          onClick={() => {
            clickHandler(9);
          }}
        />
        <OperatorButton
          value={"/"}
          onClick={() => {
            props.onButtonClick("/");
          }}
        />
      </div>
      <div>
        <NumberButton
          value={7}
          onClick={() => {
            props.onButtonClick(7);
          }}
        />
        {/* onClick is prop name  */}

        <NumberButton
          value={8}
          onClick={() => {
            props.onButtonClick(8);
          }}
        />
        <NumberButton
          value={9}
          onClick={() => {
            clickHandler(9);
          }}
        />
        <OperatorButton
          value={"*"}
          onClick={() => {
            props.onButtonClick("*");
          }}
        />
      </div>
      <div>
        <NumberButton
          value={4}
          onClick={() => {
            props.onButtonClick(4);
          }}
        />
        <NumberButton
          value={5}
          onClick={() => {
            props.onButtonClick(5);
          }}
        />
        <NumberButton
          value={6}
          onClick={() => {
            props.onButtonClick(6);
          }}
        />
        <OperatorButton
          value={"-"}
          onClick={() => {
            props.onButtonClick("-");
          }}
        />
      </div>
      <div>
        <NumberButton
          value={1}
          onClick={() => {
            props.onButtonClick(1);
          }}
        />
        <NumberButton
          value={2}
          onClick={() => {
            props.onButtonClick(2);
          }}
        />
        <NumberButton
          value={3}
          onClick={() => {
            props.onButtonClick(3);
          }}
        />
        <OperatorButton
          value={"+"}
          onClick={() => {
            props.onButtonClick("+");
          }}
        />
      </div>
      <div>
        <NumberButton
          value={0}
          onClick={() => {
            props.onButtonClick(0);
          }}
        />
        <NumberButton
          value={0}
          onClick={() => {
            props.onButtonClick(0);
          }}
        />
        <NumberButton
          value={"."}
          onClick={() => {
            props.onButtonClick(".");
          }}
        />
        <OperatorButton
          value={"="}
          onClick={() => {
            props.onButtonClick("=");
          }}
        />
      </div>
    </div>
  );
}

export default ButtonPanel;
