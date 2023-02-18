import React, { useEffect, useState } from "react";
import { send } from "../socketApi";

function Palette({ activeColor }) {
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    setColor(activeColor);
  }, [activeColor]);

  return (
    <div className="palette">
      <input
        type="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button onClick={() => send(color)}>Send!</button>
    </div>
  );
}

export default Palette;
