import React, { useState } from "react";
import faq from "./data";
function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multipleEnabled, setMultipleEnabled] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelected = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId) => {
    const cpyMultiple = [...multiple];
    const findIfExist = cpyMultiple.indexOf(getCurrentId);
    if (findIfExist === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIfExist, 1);
    }
    setMultiple(cpyMultiple);
  };
  return (
    <div className=" mx-auto w-full flex flex-col justify-center items-center gap-1 text-white ">
      <button
        className="bg-pink-400 px-10 py-2 mt-10"
        onClick={() => setMultipleEnabled(!multipleEnabled)}
      >
        Enable Multiple
      </button>
      {faq &&
        faq.map((dataItem) => (
          <div
            key={dataItem.id}
            className="flex flex-col w-[400px] h-auto bg-pink-500 "
          >
            <div
              onClick={
                multipleEnabled
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleSelected(dataItem.id)
              }
              className="flex gap-20 items-center justify-center px-8  py-4"
            >
              <h3>{dataItem.question}</h3>
              <p className="left-auto">
                <span>+</span>
              </p>
            </div>
            {selected === dataItem.id ||
            multiple.indexOf(dataItem.id) !== -1 ? (
              <div className="p-2">{dataItem.answer}</div>
            ) : null}
          </div>
        ))}
    </div>
  );
}

export default Accordian;
