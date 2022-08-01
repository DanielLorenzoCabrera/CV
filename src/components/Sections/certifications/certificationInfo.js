import Images from "../../../assets/img/images";
import PDF from "../../../assets/pdf";

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
    link: "https://www.boe.es/boe/dias/2010/11/11/pdfs/BOE-A-2010-17329.pdf",
  },
  {
    company: "Sergio Alonso Foundation",
    img: sergioAlonso,
    name: "FP Plus",
    hours: 326,
    status: completed,
    link: PDF.fpplus,
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "SCRUM: Fundamentals & best practices",
    hours: 5,
    status: completed,
    link: "https://openwebinars.net/cursos/scrum-fundamentos/",
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "JavaScript Prototypes",
    hours: 1,
    status: completed,
    link: "https://openwebinars.net/cursos/javascript-prototypes/",
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "Clean Code",
    hours: 9,
    status: completed,
    link: "https://openwebinars.net/cursos/clean-code/",
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "Agile Methodologies & SCRUM",
    hours: 11,
    status: completed,
    link: "https://openwebinars.net/cursos/metodologias-agiles/",
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "DOM management with JavaScript",
    hours: 8,
    status: completed,
    link: "https://openwebinars.net/cursos/manipular-dom-javascript/",
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "Advanced level JavaScript",
    hours: 5,
    status: completed,
    link: "https://openwebinars.net/cursos/javascript-avanzado/",
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "Async programming JavaScript",
    hours: 2,
    status: completed,
    link: "https://openwebinars.net/cursos/programacion-asincrona-promises-javascript/",
  },
  {
    company: "Openwebinars",
    img: openwebinars,
    name: "Agile UML",
    hours: 9,
    status: completed,
    link: "https://openwebinars.net/cursos/agile-uml/",
  },
  {
    company: "Udemy",
    img: udemy,
    name: "React - The Complete Guide",
    hours: 48.5,
    status: inProgress,
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
  {
    company: "Udemy",
    img: udemy,
    name: "Vue - The Complete Guide",
    hours: 31.5,
    status: inProgress,
    link: "https://www.udemy.com/course/vuejs-2-the-complete-guide/",
  },
  {
    company: "Wes Bos",
    img: wesbos,
    name: "JavaScript30",
    hours: 7,
    status: completed,
    link: "https://javascript30.com/",
  },
  {
    company: "Youtube",
    img: youtube,
    name: "Self-taught",
    hours: 150,
    status: inProgress,
  },
];
export default certifications;
