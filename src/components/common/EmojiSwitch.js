import { useState, useEffect } from "react";

const EmojiSwitch = ({ time, emojis }) => {
  
  const [last, setLast] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => update(), time * 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const update = () => setLast(last >= emojis.length - 1 ? 0 : last + 1);

  
  return <span>{emojis[last]}</span>;
};

export default EmojiSwitch;
