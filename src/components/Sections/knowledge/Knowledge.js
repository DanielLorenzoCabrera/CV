import Skills from "./Skills.json";
import KnowledgeSection from "./KnowledgeSection";
import { useState, useEffect } from "react";

const Knowledge = () => {
  return (
    <article className="knowledge">
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
