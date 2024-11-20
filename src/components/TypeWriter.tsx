"use client";
import { useState, useEffect } from "react";

type Props = {
  text: string;
};

const delay = 50;

const TypeWriter = (props: Props) => {
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < props.text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + props.text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
    setShowCursor(false);
  }, [index, props.text]);

  return (
    <h1 className="text-4xl font-bold text-[var(--primary)] text-left">
      {currentText}
      {showCursor && <span className="text-[var(--accent)]">|</span>}
    </h1>
  );
};

export default TypeWriter;
