import { useState, useEffect } from "react";
import Canvas from "./components/Canvas";

import "./App.css";

function App() {
  const [mousePosition, setMousePosition] = useState({});

  useEffect(() => {
    const handleMouseClick = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      console.log("x:", event.clientX);
    };

    document.body.addEventListener("click", handleMouseClick);
  }, []);

  return (
    <>
      <h1>Virtual Whiteboard</h1>
      <p>
        ({mousePosition.x}:{mousePosition.y})
      </p>
      <Canvas />
    </>
  );
}

export default App;
