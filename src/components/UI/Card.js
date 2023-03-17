import "./Card.css";
import YouTube from "react-youtube";
import { useState, useEffect, useRef } from "react";

export default function Card(props) {
  const cardRef = useRef(null);
  const [isDragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseUp() {
      setDragging(false);
    }

    const cardElement = cardRef.current;

    if (isDragging) {
      cardElement.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      cardElement.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (event) => {
    setDragging(true);
    setDragOffset({
      x: event.clientX - props.x,
      y: event.clientY - props.y,
    });
  };

  // Pass the card ref to the parent Canvas component
  useEffect(() => {
    props.addCardRef(props.id, cardRef);
  }, []);

  const handleMouseMove = (event) => {
    if (isDragging) {
      const newX = event.clientX - dragOffset.x;
      const newY = event.clientY - dragOffset.y;
      props.setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === props.id ? { ...card, x: newX, y: newY } : card
        )
      );
    }
  };

  const handleDragEnd = (event) => {
    setDragging(false);
  };

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
    <div
      className={`card ${isDragging ? "dragging" : ""}`}
      style={{ left: `${props.x}px`, top: `${props.y}px`, width: wdt }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleDragEnd}
      ref={cardRef}
    >
      <p className="option-type">{props.optionType}</p>
      {content}
      <p onClick={props.handleDelete} className="delete-tag">
        [delete]
      </p>
    </div>
  );
}
