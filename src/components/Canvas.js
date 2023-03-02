import React, { useRef, useEffect, useState } from "react";
import "./Canvas.css";
import Options from "./Options";
import TextOption from "./options/TextOption";
import YouTubeOption from "./options/YouTubeOption";
import ImageOption from "./options/ImageOption";

import TextCard from "./cards/TextCard";
import YouTubeCard from "./cards/YouTubeCard";
import ImageCard from "./cards/ImageCard";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({});
  const [showOptions, setShowOptions] = useState(false);
  const [showTextCard, setShowTextCard] = useState(false);
  const [showImageCard, setShowImageCard] = useState(false);
  const [showYouTubeCard, setShowYouTubeCard] = useState(false);
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
          switch (card.optionType) {
            case "Text":
              return (
                <TextCard
                  id={card.id}
                  x={card.x}
                  y={card.y}
                  optionType={card.optionType}
                  content={card.content}
                  cards={cards}
                  setCards={setCards}
                />
              );
            case "Image":
              return (
                <ImageCard
                  id={card.id}
                  x={card.x}
                  y={card.y}
                  optionType={card.optionType}
                  content={card.content}
                  cards={cards}
                  setCards={setCards}
                />
              );
            case "YouTube":
              return (
                <YouTubeCard
                  id={card.id}
                  x={card.x}
                  y={card.y}
                  optionType={card.optionType}
                  content={card.content}
                  cards={cards}
                  setCards={setCards}
                />
              );
            default:
              return <p>An error happened. Please try again.</p>;
          }
        })}

      {showOptions && (
        <Options
          x={mousePosition.x}
          y={mousePosition.y}
          setShowOptions={setShowOptions}
          setShowTextCard={setShowTextCard}
          setShowYouTubeCard={setShowYouTubeCard}
          setShowImageCard={setShowImageCard}
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

      {showImageCard && (
        <ImageOption
          x={mousePosition.x}
          y={mousePosition.y}
          setShowImageCard={setShowImageCard}
          cards={cards}
          setCards={setCards}
        />
      )}

      {showYouTubeCard && (
        <YouTubeOption
          x={mousePosition.x}
          y={mousePosition.y}
          setShowYouTubeCard={setShowYouTubeCard}
          cards={cards}
          setCards={setCards}
        />
      )}
    </>
  );
};

export default Canvas;
