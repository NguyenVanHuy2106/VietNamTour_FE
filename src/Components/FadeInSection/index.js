// components/FadeInSection.js
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./index.css";

const FadeInSection = ({ children }) => {
  const { ref, entry } = useInView({
    threshold: [0, 1], // Bắt cả khi vừa ló ra hoặc vừa rời khỏi hoàn toàn
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!entry) return;

    if (entry.intersectionRatio > 0) {
      // Có ít nhất một phần tử trong viewport
      setIsVisible(true);
    } else {
      // Hoàn toàn ra khỏi màn hình
      setIsVisible(false);
    }
  }, [entry]);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
