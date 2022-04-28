import Button from "./Button";

function ButtonPanel() {
  return (
    <div className="component-button-panel">
      <div>
        <Button value={7} />
        <Button value={8} />
        <Button value={9} />
      </div>
      <div>
        <Button value={4} />
        <Button value={5} />
        <Button value={6} />
      </div>
      <div>
        <Button value={1} />
        <Button value={2} />
        <Button value={3} />
      </div>
    </div>
  );
}

export default ButtonPanel;
