import { useEffect, useState } from "react";

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [1,2,3,4];

  const infiniteCaraouselScroll = () => {
    console.log("caraoussell");
    if(currentIndex === data.length-1){
      return setCurrentIndex(0);
    }

    return setCurrentIndex(currentIndex+1);
  }

  useEffect(() => {
    const interval = setInterval(() => {infiniteCaraouselScroll()}, 3000);

    return () => clearInterval(interval);
  })

  return (
    <div>
        <div className="flex justify-center text-2xl ">
            <span className="block mb-20 font-bold underline text-harshit">Skills</span>
        </div>
      <div className="w-screen flex justify-between px-10 mb-20">
        {
          data.map((item, index) => {
            return (
            <div className="border w-40 h-40" style={{transform: `translate(-${currentIndex *100}%)`, transition: `1s cubic-bezier(0.39, 0.575, 0.565, 1)`}} key={index}>
              <img src="https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg" alt="" />
            </div>)
          })
        }
      </div>
    </div>
  );
};

export default Card;
