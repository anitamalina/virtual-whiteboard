import "./Card.css";

export default function ImageCard(props) {
  function deleteCard() {
    const id = props.id;
    let newCards = props.cards.filter((card) => card.id !== id);
    props.setCards(newCards);
  }

  return (
    <div
      className="card"
      style={{ top: props.y, left: props.x, width: "200px" }}
    >
      <p className="option-type">{props.optionType}</p>
      <img src={props.content} alt="upload" />
      <p onClick={deleteCard} className="delete-tag">
        [delete]
      </p>
    </div>
  );
}
