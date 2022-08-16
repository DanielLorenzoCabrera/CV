import Images from "../../../assets/img/images";

const { singularFactory, hologis, diktados, cargobot } = Images.companies;

const experience = [
  {
    company: "The Singular Factory",
    projects: [
      {
        name: "Hologis",
        description:
          "Website for an innovative app which changes the way we see augmented reality.",
        technology: "React JS",
        img: hologis,
        link : "https://hologis.app/"
      },
      {
        name: "Cargobot",
        description:
        "An application that connects road carriers with shippers in America. An online solution that joins all road transport services in a single platform.",
        technology: "Vue JS",
        img: cargobot,
        link : "https://www.cargobot.io/"
      },
      {
        name: "Dikta2",
        description:
          "This app helps you improve your spelling by making short dictations from your smartphone.",
        technology: "React Native",
        img: diktados,
      },
    ],
    link: "https://www.singularfactory.com",
    image: singularFactory,
    start: "March 2022",
    end: "Currently",
  },
];

export default experience;
