import { useState } from "react";
import Button from "./Button";
import "./TextOption.css";

export default function TextOption(props) {
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [count, setCount] = useState(0);

  function submitContent(x, y, content) {
    if (errorMessage) {
      setErrorMessage("");
    } else {
      const newCard = { x, y, optionType: "Text", content };
      props.setCards([...props.cards, newCard]);
      props.setShowTextCard(false);
    }
  }

  function closeCard() {
    props.setShowCard(false);
  }

  const emptyInputError = () => {
    setErrorMessage("You need to write a text before you can submit.");
  };

  function onChangeContent(e) {
    setContent(e.target.value);
    setCount(e.target.value.length);
  }

  return (
    <div className="textOption" style={{ top: props.y, left: props.x }}>
      <p onClick={closeCard} className="close-tag">
        [x]
      </p>
      <p>Write a text:</p>
      <div className="textarea-box">
        <textarea
          className="textarea-input"
          placeholder="What would you like to share ?"
          onChange={(e) => onChangeContent(e)}
          value={content}
          maxLength={1000}
        />
        <p className="count">{count} / 1000</p>
      </div>
      {content === "" ? (
        <>
          <Button handleClick={emptyInputError}>Submit</Button>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </>
      ) : (
        <Button handleClick={() => submitContent(props.x, props.y, content)}>
          Submit
        </Button>
      )}
    </div>
  );
}
