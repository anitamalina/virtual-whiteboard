import { useState } from "react";
import Button from "../Button";
import { generateRandomId } from "../generateRandomId";
import "./Option.css";

export default function Option(props) {
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [count, setCount] = useState(0);

  function submitContent(x, y, content) {
    if (errorMessage) {
      setErrorMessage("");
    } else {
      const newCard = {
        id: generateRandomId(),
        x,
        y,
        optionType: props.optionType,
        content,
      };
      props.setCards([...props.cards, newCard]);
      props.setShowOption(false);
    }
  }

  function closeOption() {
    props.setShowOption(false);
  }

  const emptyInputError = () => {
    let errorType;
    switch (props.optionType) {
      case "Text":
        errorType = "write a text";
        break;
      case "Image":
        errorType = "paste a link";
        break;
      case "YouTube":
        errorType = "YouTube ID";
        break;
      default:
        errorType = <p>An error happened. Please try again.</p>;
    }

    setErrorMessage(`You need to ${errorType} before you can submit.`);
  };

  function onChangeContent(e) {
    setContent(e.target.value);
    if (props.optionType === "Text") {
      setCount(e.target.value.length);
    }
  }

  let optionContent;
  switch (props.optionType) {
    case "Text":
      optionContent = (
        <>
          <p>Write a text:</p>
          <div className="textarea-box">
            <textarea
              className="textarea-input"
              placeholder="What would you like to share ?"
              onChange={(e) => onChangeContent(e)}
              value={content}
              maxLength={280}
            />
            <p className="count">{count} / 280</p>
          </div>
        </>
      );
    case "Image":
      optionContent = (
        <>
          <p>Paste a link to an image:</p>
          <div className="input-box">
            <input
              className="input"
              placeholder="Paste a link for an image"
              onChange={(e) => onChangeContent(e)}
              value={content}
            />
          </div>
        </>
      );
    case "YouTube":
      <>
        <p>Paste YouTube ID:</p>
        <div className="input-box">
          <input
            className="input"
            placeholder="Paste a YouTube ID e.g. dQw4w9WgXcQ"
            onChange={(e) => onChangeContent(e)}
            value={content}
          />
        </div>
      </>;
  }

  return (
    <div className="option" style={{ top: props.y, left: props.x }}>
      {optionContent}
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
      <p onClick={closeOption} className="close-tag">
        [cancel]
      </p>
    </div>
  );
}
