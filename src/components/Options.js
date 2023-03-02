import "./Options.css";
import Button from "./Button";
export default function Options(props) {
  function openTextCard() {
    props.setShowOptions(false);
    props.setShowTextCard(true);
  }

  function closeOptions() {
    props.setShowOptions(false);
  }

  function openImageCard() {}

  function openVideoCard() {}

  return (
    <div className="options" style={{ top: props.y, left: props.x }}>
      <p>Add stuff</p>
      <Button handleClick={openTextCard}>Text</Button>
      <Button handleClick={openImageCard}>Image</Button>
      <Button handleClick={openVideoCard}>Video</Button>
      <p onClick={closeOptions} className="close-tag">
        [x]
      </p>
    </div>
  );
}
