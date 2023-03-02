import { useState } from "react";
import Button from "../Button";
import { generateRandomId } from "../generateRandomId";
import "./Option.css";

export default function YouTubeOption(props) {
  const [youTubeURL, setYouTubeURL] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  function submitContent(x, y, youTubeURL) {
    if (errorMessage) {
      setErrorMessage("");
    } else {
      console.log("youtubeid: ", props.cards.length + 1);
      const newCard = {
        id: generateRandomId(),
        x,
        y,
        optionType: "YouTube",
        content: youTubeURL,
      };
      console.log("youTUBE ID", youTubeURL);
      props.setCards([...props.cards, newCard]);
      props.setShowYouTubeCard(false);
    }
  }

  function closeCard() {
    props.setShowYouTubeCard(false);
  }

  const emptyInputError = () => {
    setErrorMessage("You need to write a YouTube ID before you can submit.");
  };

  function onChangeContent(e) {
    setYouTubeURL(e.target.value);
  }

  return (
    <div className="option" style={{ top: props.y, left: props.x }}>
      <p>Paste YouTube ID:</p>
      <div className="input-box">
        <input
          className="input"
          placeholder="Paste a YouTube ID e.g. dQw4w9WgXcQ"
          onChange={(e) => onChangeContent(e)}
          value={youTubeURL}
        />
      </div>
      {youTubeURL === "" ? (
        <>
          <Button handleClick={emptyInputError}>Submit</Button>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </>
      ) : (
        <Button handleClick={() => submitContent(props.x, props.y, youTubeURL)}>
          Submit
        </Button>
      )}
      <p onClick={closeCard} className="close-tag">
        [cancel]
      </p>
    </div>
  );
}
