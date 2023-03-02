import "./Card.css";

export default function Card(props) {
  function deleteCard() {
    const id = props.id;
    let newCards = props.cards.filter((card) => card.id !== id);
    props.setCards(newCards);
  }

  return (
    <div className="card" style={{ top: props.y, left: props.x }}>
      <p className="option-type">{props.optionType}</p>
      <p className="content">{props.content}</p>
      <p onClick={deleteCard} className="delete-tag">
        [delete]
      </p>
    </div>
  );
}
