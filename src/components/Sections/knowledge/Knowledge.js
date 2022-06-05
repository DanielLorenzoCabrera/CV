import Skills from "./Skills.json";
import KnowledgeSection from "./KnowledgeSection";
import { useState, useEffect } from "react";


const Knowledge = () => {
  const [positionX, updatePositionX] = useState(0);
  const [scrolling, isScrolling] = useState(false);
  
  const roundTranslation = (translation) =>{
    const modalSize = document.querySelector("article.knowledge").clientWidth 

    if(translation < 0 ) return -modalSize;
    return modalSize;
    
  }
  
  const waitPositionMovement =  () =>  {
    setTimeout(() => {
      isScrolling(false)
    }, 1000)
  }

  useEffect(() => {
    const element = document.querySelector("article.knowledge");
    element.scrollLeft =  positionX;
    waitPositionMovement();
  })
  
  
  const handlePositionChange = (event) => {
    const modalSize = document.querySelector("article.knowledge").clientWidth
    if(scrolling) return; 
    isScrolling(true)
    updatePositionX((prev) => {
      if(prev + roundTranslation(event.deltaY) < 0 ) return 0;
      if(prev + roundTranslation(event.deltaY) > modalSize * 2) return modalSize * 2;
      return prev + roundTranslation(event.deltaY);
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
