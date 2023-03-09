import "./Button.css";

export default function Button(props) {
  return <button onClick={props.handleClick}>{props.children}</button>;
}
