import React, { useState, useEffect } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
function Slider({ url, limit = 10, page = 2 }) {
  const [image, setImage] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setCurrentImage(currentImage === 0 ? image.length - 1 : currentImage - 1);
  };
  const handlePrev = () => {
    setCurrentImage(currentImage === image.length - 1 ? 0 : currentImage + 1);
  };
  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setLoading(false);
        setImage(data);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (url !== "") {
      fetchData(url);
    }
  }, [url]);
  console.log(image);
  return (
    <div className="flex w-[650px] h-[300px] relative mt-10 justify-center mx-10 ">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        size={40}
        className="pointer absolute  top-[8rem] left-[22px]"
      />
      {image && image.length > 0
        ? image.map((imageItem, index) => {
            return (
              <div key={index}>
                <img
                  src={imageItem.download_url}
                  alt={imageItem.download_url}
                  className={`w-full h-full object-cover ${
                    currentImage === index ? "flex" : "hidden"
                  }`}
                />
              </div>
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        size={40}
        className="pointer  absolute top-[8rem] right-[28px] bg-white"
      />
      <div className="absolute bottom-[1px]">
        {image &&
          image.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-4 h-4 m-1 rounded-full  ${
                  currentImage === index ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            );
          })}
      </div>
    </div>
  );
}

export default Slider;
