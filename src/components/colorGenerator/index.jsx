import React, { useState, useEffect } from "react";

function ColorGenerator() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const Utillity = (length) => {
    return Math.floor(Math.random() * length);
  };
  useEffect(() => {
    type === "hex" ? handleHexColor() : handleRgbColor();
  }, [type]);
  const handleHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Utillity(hex.length)];
    }
    setColor(hexColor);
  };
  const handleRgbColor = () => {
    const r = Utillity(256);
    const g = Utillity(256);
    const b = Utillity(256);

    setColor(`rgb(${r},${g},${b})`);
  };
  useEffect(() => {
    if (type === "hex") {
      handleHexColor();
    } else {
      handleRgbColor();
    }
  }, [type]);
  return (
    <div className={`w-full h-[100vh]  `} style={{ backgroundColor: color }}>
      <button onClick={() => setType("hex")} className="bg-slate-500 m-2">
        hex Color
      </button>
      <button onClick={() => setType("rgb")} className="bg-slate-500 m-2">
        RGB Color
      </button>
      <button
        onClick={type === "hex" ? handleHexColor : handleRgbColor}
        className="bg-slate-500 m-2"
      >
        Generate color
      </button>
      <div className="flex flex-col justify-center items-center w-full">
        <h3>{type === "hex" ? "hEX" : "RGB"} Color</h3>
        <h5>{color}</h5>
      </div>
    </div>
  );
}

export default ColorGenerator;
