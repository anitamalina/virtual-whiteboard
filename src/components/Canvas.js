import React, { useRef, useEffect } from "react";
import "./Canvas.css";

const Canvas = () => {
  const canvasRef = useRef(null);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
