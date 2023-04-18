import portfolioLG from "../public/project images/portfolio-lg.jpg";
import portfolioSM from "../public/project images/portfolio-sm.jpg";
import gameLG from "../public/project images/game-lg.jpg";
import gameSM from "../public/project images/game-sm.jpg";

const projects = [
  {
    id: 1,
    name: "Portfolio",
    images: [portfolioLG, portfolioSM],
    description:
      "Explore my impressive portfolio, as a talented front-end developer, on this visually stunning and fully responsive portfolio website. Built with Next.js, TypeScript, and Tailwind CSS, and featuring seamless animations and design elements created with Framer Motion.",
    stack: ["Nextjs", "TypeScript", "Tailwindcss", "Framer Motion"],
    githubURL: "https://github.com/mehrdadazizkhani/portfolio",
    demoURL: "https://www.mehrdad-azizkhani.ir/",
  },
  {
    id: 2,
    name: "Game Hub",
    images: [gameLG, gameSM],
    description:
      "Developed a feature-rich game hub using React, Vite, TypeScript, and Chakra UI, integrated with real API to offer a seamless gaming experience. The platform provides immersive gameplay and an extensive collection of games to choose from.",
    stack: ["Reactjs", "TypeScript", "Chakra UI"],
    githubURL: "https://github.com/mehrdadazizkhani/game-hub",
    demoURL: "https://game-hub-mehrdadazizkhani.vercel.app/",
  },
  {
    id: 3,
    name: "Car Rental",
    images: [portfolioLG, portfolioSM],
    description:
      "Built a car rental application using Next.js, Tailwind, and TypeScript. The platform allows users to browse through a variety of vehicles and book them for rent. Its user-friendly interface and seamless booking process make it a convenient choice for car rental services.",
    stack: ["Nextjs", "TypeScript", "Tailwindcss", "JSON Server"],
    githubURL: "https://github.com/mehrdadazizkhani/car-rent",
    demoURL: "https://portfolio-mehrdadazizkhani.vercel.app/",
  },
  {
    id: 4,
    name: "Untitled",
    images: [,],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, quis nulla. Minima sint ut eius aliquam aliquid fugiat ducimus perferendis voluptates. Odio labore vel numquam magnam perferendis omnis sapiente praesentium dolorem doloribus.",
    stack: ["Nextjs", "TypeScript", "Tailwindcss", "Framer Motion"],
    githubURL: "https://github.com/mehrdadazizkhani/portfolio",
    demoURL: "https://portfolio-mehrdadazizkhani.vercel.app/",
  },
];

export default projects;
