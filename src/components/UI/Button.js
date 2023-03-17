import { useEffect, useState } from "react";
import "./Button.css";

export default function Button(props) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(props.disable);
  }, [props.disable]);

  return (
    <button className={disabled ? "disabled" : ""} onClick={props.handleClick}>
      {props.children}
    </button>
  );
}
