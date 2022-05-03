import Button from "./Button";
import calc from "./calc.js";

function ButtonPanel() {
  return (
    <div>
      <Button value={"Clear"} />
      {/* <Button value={""} /> */}
      <Button value={"%"} />
      <Button value={"/"} />

      <Button value={7} />
      <Button value={8} />
      <Button value={9} />
      <Button value={"*"} />

      <Button className="button" value={4} />
      <Button value={5} />
      <Button value={6} />
      <Button value={"-"} />

      <Button value={1} />
      <Button value={2} />
      <Button value={3} />
      <Button value={"+"} />

      <Button value={0} />
      <Button value={"."} />
      <Button className="span-two" value={"="} />
    </div>
  );
}

export default ButtonPanel;
