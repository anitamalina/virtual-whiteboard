import "./Card.css";
import YouTube from "react-youtube";

export default function Card(props) {
  let wdt;
  if (props.optionType === "YouTube") {
    wdt = "300px";
  } else {
    wdt = "200px";
  }

  const opts = {
    width: "300px",
  };

  let content;
  switch (props.optionType) {
    case "Text":
      content = <p className="content">{props.content}</p>;
      break;
    case "Image":
      content = <img src={props.content} alt="upload" />;
      break;
    case "YouTube":
      content = <YouTube videoId={props.content} opts={opts} />;
      break;
    default:
      content = <p>An error happened. Please try again.</p>;
  }

  return (
    <div className="card" style={{ top: props.y, left: props.x, width: wdt }}>
      <p className="option-type">{props.optionType}</p>
      {content}
      <p onClick={props.handleDelete} className="delete-tag">
        [delete]
      </p>
    </div>
  );
}
