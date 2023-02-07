import React, { useRef } from "react";

import "./scroll.css";

export const Scroll = () => {
  const firstView = useRef();
  const secoundView = useRef();
  const thirdView = useRef();
  const fourthView = useRef();

  const onScroll = (goal) => {
    goal.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <button
          onClick={() => {
            onScroll(firstView);
          }}
        >
          firstView
        </button>
        <button
          onClick={() => {
            onScroll(secoundView);
          }}
        >
          secoundView
        </button>
        <button
          onClick={() => {
            onScroll(thirdView);
          }}
        >
          thirdView
        </button>
        <button
          onClick={() => {
            onScroll(fourthView);
          }}
        >
          fourthView
        </button>
      </nav>
      <div className="section1">
        <span ref={firstView}>first view</span>
      </div>
      <div className="section2">
        <span ref={secoundView}>secound view</span>
      </div>
      <div className="section3">
        <span ref={thirdView}>third view</span>
      </div>
      <div className="section4">
        <span ref={fourthView}>fourth view</span>
      </div>
    </>
  );
};
