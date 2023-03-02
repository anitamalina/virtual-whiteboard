import YouTube from "react-youtube";
import "./Card.css";

export default function YouTubeCard(props) {
  const opts = {
    width: "300px",
  };

  function deleteCard() {
    const id = props.id;
    let newCards = props.cards.filter((card) => card.id !== id);
    props.setCards(newCards);
  }

  return (
    <div
      className="card"
      style={{ top: props.y, left: props.x, width: "300px" }}
    >
      <p className="option-type">{props.optionType}</p>
      <YouTube videoId={props.content} opts={opts} />
      <p onClick={deleteCard} className="delete-tag">
        [delete]
      </p>
    </div>
  );
}
