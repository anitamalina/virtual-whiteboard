import React, { useRef, useEffect, useState } from "react";
import "./Canvas.css";
import ThreeOptions from "./UI/ThreeOptions";
import Option from "./UI/Option";
import Card from "./UI/Card";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({});
  const [showThreeOptions, setShowThreeOptions] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [choosenOption, setChoosenOption] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    recieveCards();
  }, []);

  useEffect(() => {
    const handleMouseClick = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setShowThreeOptions(true);
      console.log("x: ", event.clientX, "y: ", event.clientY);
    };

    const canvas = canvasRef.current;

    canvas.addEventListener("click", handleMouseClick);
  }, []);

  function deleteCard(cardId) {
    const id = cardId;
    let newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);

    // Save card to local storage
    localStorage.setItem("cards", JSON.stringify(newCards));
  }

  // Retrieve saved cards from local storage
  function recieveCards() {
    const savedCards = localStorage.getItem("cards");
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
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
