export const getDate = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const date = new Date();
  return `${days[date.getDay() - 1]} ${date.getDate()} ${months[date.getMonth()]} ${date.getHours()}:${date.getMinutes()}`
};
