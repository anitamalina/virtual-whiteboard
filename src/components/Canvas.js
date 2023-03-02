import React, { useRef, useEffect, useState } from "react";
import Options from "./Options";
import TextOption from "./TextOption";
import "./Canvas.css";
import Card from "./Card";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({});
  const [showOptions, setShowOptions] = useState(false);
  const [showTextCard, setShowTextCard] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const handleMouseClick = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setShowOptions(true);
      console.log("x: ", event.clientX, "y: ", event.clientY);
    };

    console.log("cards", cards);

    const canvas = canvasRef.current;

    canvas.addEventListener("click", handleMouseClick);
  }, [cards]);

  return (
    <>
      <h1>Virtual Whiteboard</h1>
      <p className="subtitle">Something you want to share?</p>
      <canvas ref={canvasRef} />
      {cards.length > 0 &&
        cards.map((card) => {
          return (
            <Card
              x={card.x}
              y={card.y}
              optionType={card.optionType}
              content={card.content}
            />
          );
        })}

      {showOptions && (
        <Options
          x={mousePosition.x}
          y={mousePosition.y}
          setShowOptions={setShowOptions}
          setShowTextCard={setShowTextCard}
        />
      )}

      {showTextCard && (
        <TextOption
          x={mousePosition.x}
          y={mousePosition.y}
          setShowTextCard={setShowTextCard}
          cards={cards}
          setCards={setCards}
        />
      )}
    </>
  );
};

export default Canvas;
