import Skills from "./Skills.json";
import KnowledgeSection from "./KnowledgeSection";
import { useState, useEffect } from "react";

const Knowledge = () => {
  const [positionX, updatePositionX] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  
  const setStateNoScrolling = () => {
    setTimeout(() => {
      setScrolling(false);
    }, 1000);
  };
  
  useEffect(() => {
    const element = document.querySelector("article.knowledge");
    element.scrollLeft = positionX;
    setStateNoScrolling();
  });
  
  const handlePositionChange = (event) => {
    if (scrolling) return;
    setScrolling(true);
    const modalSize = document.querySelector("article.knowledge").clientWidth;
    const sizeTranslation = event.deltaY < 0 ? -modalSize : modalSize;
    updatePositionX((prev) => {
      if (prev + sizeTranslation <= 0) return 0;
      if (prev+ sizeTranslation >= modalSize * 2) return modalSize * 2;
      return prev + sizeTranslation;
    });
  };

  return (
    <article
      className="knowledge"
      onWheel={(event) => handlePositionChange(event)}
    >
      {Skills.map((section, index) => {
        return (
          <KnowledgeSection
            key={index}
            title={section.title}
            skills={section.skills}
          />
        );
      })}
    </article>
  );
};

export { Knowledge };
