import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const tick = () => setDate(new Date());

  return(<span>{date.toLocaleTimeString()}</span>)
};

export default Clock;
