import "./Card.css";

export default function Card(props) {
  function deleteCard() {}

  return (
    <div className="card" style={{ top: props.y, left: props.x }}>
      {/*       <p onClick={deleteCard} className="delete-tag">
        [x]
      </p> */}
      <p className="option-type">{props.optionType}</p>
      <p className="content">{props.content}</p>
    </div>
  );
}
