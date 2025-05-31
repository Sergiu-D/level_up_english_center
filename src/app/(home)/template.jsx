"use client"
import { animate } from "@motionone/dom";
import { useEffect, useRef } from "react";

export default function Template({ children }) {
  const mainRef = useRef(null);
  
  useEffect(() => {
    if (mainRef.current) {
      animate(mainRef.current, 
        { y: [20, 0], opacity: [0, 1] },
        { easing: "ease-in-out", duration: 0.75 }
      );
    }
  }, []);
  
  return (
    <main
      ref={mainRef}
      className="opacity-0"
      key="page"
    >
        {children}
    </main>
  );
}
