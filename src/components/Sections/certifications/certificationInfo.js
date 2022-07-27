import Images from "../../../assets/img/images";

const { openwebinars, udemy, youtube, wesbos } = Images.certifications;
const { completed, inProgress } = {
  completed: "completed",
  inProgress: "In progress",
};

const certifications = [
  {
    company: "OpenWebinars",
    name: "JavaScript Prototypes",
    img: openwebinars,
    hours: 1,
    status: completed,
  },
  {
    company: "OpenWebinars",
    name: "SCRUM: Fundamentals & best practices",
    img: openwebinars,
    hours: 5,
    status: completed,
  },
  {
    company: "OpenWebinars",
    name: "Clean Code",
    img: openwebinars,
    hours: 9,
    status: completed,
  },
  {
    company: "OpenWebinars",
    name: "Agile Methodologies & SCRUM",
    img: openwebinars,
    hours: 11,
    status: completed,
  },
  {
    company: "OpenWebinars",
    name: "DOM management with JavaScript",
    img: openwebinars,
    hours: 8,
    status: completed,
  },
  {
    company: "OpenWebinars",
    name: "JavaScript - Advanced level",
    img: openwebinars,
    hours: 5,
    status: completed,
  },
  {
    company: "OpenWebinars",
    name: "Async programming with Promises - JavaScript",
    img: openwebinars,
    hours: 2,
    status: completed,
  },
  {
    company: "OpenWebinars",
    name: "Agile UML",
    img: openwebinars,
    hours: 9,
    status: completed,
  },
  {
    company: "Udemy",
    name: "React - The Complete Guide",
    img: udemy,
    hours: 48.5,
    status: inProgress,
  },
  {
    company: "Udemy",
    name: "Vue - The Complete Guide",
    img: udemy,
    hours: 31.5,
    status: inProgress,
  },
  {
    company: "Wes Bos",
    name: "JavaScript30",
    img: wesbos,
    hours: 7,
    status: completed,
  },
  {
    company: "Youtube",
    name: "Self-taught",
    img: youtube,
    hours: 100,
    status: completed,
  },
];

export default certifications;
