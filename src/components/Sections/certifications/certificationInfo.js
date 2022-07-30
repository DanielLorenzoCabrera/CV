import Images from "../../../assets/img/images";

const { openwebinars, udemy, youtube, wesbos, sergioAlonso, fp } =
  Images.certifications;
const { completed, inProgress } = {
  completed: "completed",
  inProgress: "in-progress",
};

const certifications = [
  {
    company: "Higher degree",
    img: fp,
    name: "Web Application Development",
    hours: 2000,
    status: completed,
  },
  {
    company: "Sergio Alonso Foundation",
    img: sergioAlonso,
    name: "FP Plus",
    hours: 326,
    status: completed,
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "SCRUM: Fundamentals & best practices",
    hours: 5,
    status: completed,
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "JavaScript Prototypes",
    hours: 1,
    status: completed,
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "Clean Code",
    hours: 9,
    status: completed,
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "Agile Methodologies & SCRUM",
    hours: 11,
    status: completed,
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "DOM management with JavaScript",
    hours: 8,
    status: completed,
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "Advanced level JavaScript ",
    hours: 5,
    status: completed,
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "Async programming JavaScript",
    hours: 2,
    status: completed,
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "Agile UML",
    hours: 9,
    status: completed,
  },
  {
    company: "Udemy",
    img: udemy,
    name: "React - The Complete Guide",
    hours: 48.5,
    status: inProgress,
  },
  {
    company: "Udemy",
    img: udemy,
    name: "Vue - The Complete Guide",
    hours: 31.5,
    status: inProgress,
  },
  {
    company: "Wes Bos",
    img: wesbos,
    name: "JavaScript30",
    hours: 7,
    status: completed,
  },
  {
    company: "Youtube",
    img: youtube,
    name: "Self-taught",
    hours: 100,
    status: inProgress,
  },
];
export default certifications;
