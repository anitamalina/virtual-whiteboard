import { useState } from "react";
import Button from "../Button";
import { generateRandomId } from "../generateRandomId";
import "./Option.css";

export default function ImageOption(props) {
  const [imgURL, setImgURL] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  function submitContent(x, y, imgURL) {
    if (errorMessage) {
      setErrorMessage("");
    } else {
      console.log("imgid: ", props.cards.length + 1);
      const newCard = {
        id: generateRandomId(),
        x,
        y,
        optionType: "Image",
        content: imgURL,
      };
      console.log("img url", imgURL);
      props.setCards([...props.cards, newCard]);
      props.setShowImageCard(false);
    }
  }

  function closeCard() {
    props.setShowImageCard(false);
  }

  const emptyInputError = () => {
    setErrorMessage("You need to paste a link before you can submit.");
  };

  function onChangeContent(e) {
    setImgURL(e.target.value);
  }

  return (
    <div className="option" style={{ top: props.y, left: props.x }}>
      <p>Paste a link to an image:</p>
      <div className="input-box">
        <input
          className="input"
          placeholder="Paste a link for an image"
          onChange={(e) => onChangeContent(e)}
          value={imgURL}
        />
      </div>
      {imgURL === "" ? (
        <>
          <Button handleClick={emptyInputError}>Submit</Button>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </>
      ) : (
        <Button handleClick={() => submitContent(props.x, props.y, imgURL)}>
          Submit
        </Button>
      )}
      <p onClick={closeCard} className="close-tag">
        [cancel]
      </p>
    </div>
  );
}
