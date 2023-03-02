import "./Options.css";
import Button from "./Button";

export default function Options(props) {
  function openTextCard() {
    props.setShowOptions(false);
    props.setShowTextCard(true);
  }

  function openImageCard() {
    props.setShowOptions(false);
    props.setShowImageCard(true);
  }

  function openYouTubeCard() {
    props.setShowOptions(false);
    props.setShowYouTubeCard(true);
  }

  function closeOptions() {
    props.setShowOptions(false);
  }

  return (
    <div className="options" style={{ top: props.y, left: props.x }}>
      <p>Add stuff</p>
      <Button handleClick={openTextCard}>Text</Button>
      <Button handleClick={openImageCard}>Image</Button>
      <Button handleClick={openYouTubeCard}>YouTube</Button>
      <p onClick={closeOptions} className="close-tag">
        [cancel]
      </p>
    </div>
  );
}
