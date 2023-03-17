import React, { useRef, useEffect, useState } from "react";
import "./Canvas.css";
import ThreeOptions from "./UI/ThreeOptions";
import Option from "./UI/Option";
import Card from "./UI/Card";
import { useLocalStorageState } from "./../functions/useLocalStorageState";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({});
  const [showThreeOptions, setShowThreeOptions] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [choosenOption, setChoosenOption] = useState(false);
  const [cards, setCards] = useLocalStorageState("cards", []);

  /*   useEffect(() => {
    recieveCards();
  }, []); */

  useEffect(() => {
    const handleMouseClick = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setShowThreeOptions(true);
      console.log("x: ", event.clientX, "y: ", event.clientY);
    };

    const canvas = canvasRef.current;
    canvas.addEventListener("click", handleMouseClick);

    /*     return () => {
      canvas.removeEventListener("click", handleMouseClick);
    }; */
  }, [cards]);

  function deleteCard(cardId) {
    const id = cardId;
    let newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  }

  return (
    <>
      <h1>Virtual Whiteboard</h1>
      <p className="subtitle">Something you want to share?</p>
      <canvas ref={canvasRef} />
      {cards.length > 0 &&
        cards.map((card) => {
          return (
            <Card
              key={card.id}
              x={card.x}
              y={card.y}
              optionType={card.optionType}
              content={card.content}
              handleDelete={() => deleteCard(card.id)}
            />
          );
        })}

      {showThreeOptions && (
        <ThreeOptions
          x={mousePosition.x}
          y={mousePosition.y}
          setShowOption={setShowOption}
          setShowThreeOptions={setShowThreeOptions}
          setChoosenOption={setChoosenOption}
        />
      )}

      {showOption && (
        <Option
          x={mousePosition.x}
          y={mousePosition.y}
          setShowOption={setShowOption}
          cards={cards}
          setCards={setCards}
          choosenOption={choosenOption}
        />
      )}
    </>
  );
};

export default Canvas;
