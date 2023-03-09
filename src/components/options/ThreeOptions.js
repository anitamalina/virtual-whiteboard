import "./ThreeOptions.css";
import Button from "../Button";

export default function ThreeOptions(props) {
  function openTextCard() {
    props.setShowThreeOptions(false);
    props.setShowOption(true);
    props.setChoosenOption("Text");
  }

  function openImageCard() {
    props.setShowThreeOptions(false);
    props.setShowOption(true);
    props.setChoosenOption("Image");
  }

  function openYouTubeCard() {
    props.setShowThreeOptions(false);
    props.setShowOption(true);
    props.setChoosenOption("YouTube");
  }

  function closeOptions() {
    props.setShowThreeOptions(false);
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
