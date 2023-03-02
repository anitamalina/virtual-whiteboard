import "./Card.css";

export default function Card(props) {
  function deleteCard() {}

  return (
    <div className="card" style={{ top: props.y, left: props.x }}>
      {/*       <p onClick={deleteCard} className="delete-tag">
        [x]
      </p> */}
      <p>{props.optionType}</p>
      <p>{props.content}</p>
    </div>
  );
}
