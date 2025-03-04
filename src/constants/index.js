import project1 from "../assets/projects/symfony.png";
import project2 from "../assets/projects/home.png";
import project3 from "../assets/projects/portfolio.png";
import project4 from "../assets/projects/recipe.png";

export const HERO_CONTENT = `I am a passionate software engineering student with a strong interest in developing robust and scalable web applications. Through various projects, I have gained hands-on experience in front-end technologies like React and Angular, as well as back-end technologies like PHP (Symfony), MySQL, PostgreSQL, and Java/JEE (Spring).
My goal is to apply my knowledge to create innovative solutions that enhance user experiences and solve real-world challenges. I am eager to learn, adapt, and collaborate in dynamic environments, continuously improving my skills to build a successful career in software development.`;

export const ABOUT_TEXT = `I am a fourth-year software engineering student at the National School of Applied Sciences, passionate about software development and problem-solving. Through various projects, I have gained hands-on experience in full-stack development, working with technologies such as React, Angular, PHP (Symfony), Java/JEE (Spring), MySQL, PostgreSQL.Currently seeking a PFA internship, I am eager to apply my knowledge in a professional setting, expand my technical expertise, and take on new challenges. I am highly motivated, adaptable, and always eager to learn. I thrive in collaborative environments and enjoy building efficient, user-friendly applications. Beyond coding, I actively explore new technologies and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Engineer Student",
    company: "National School of Applied Sciences",
    description: `I am a 4th-year Computer Engineering student, Passionate about conceptualizing and developing web and mobile applications. Through various academic and personal projects, I have gained experience working with technologies such as ReactJS, Symfony, Firebase, Java (Android), Java (Spring), and MySQL.`,
    technologies: [],
  },
  {
    year: "2021 - 2023",
    role: "Cycle Preparatoire",
    company: "National School of Applied Sciences",
    description: `During my first two years in the preparatory cycle, I developed strong analytical and problem-solving skills through intensive coursework in mathematics, physics, and computer science. This period allowed me to build a solid foundation in algorithms, essential for software engineering.`,
    technologies: [],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Pharmacy Management",
    image: project1,
    description:
      "An application for pharmacy management with features such as product registration, categorization, stock tracking, customer management (client info and purchase history), sales management (transaction recording), and supplier management (partnerships and stock replenishment). It also includes a reporting feature that displays sales count per day and total revenue per day.",
    technologies: ["Twig", "Bootstrap", "MySQL", "Symfony"],
  },
  {
    title: "E-learning App",
    image: project2,
    description:
      "Our project LEARNSPACE was designed to meet the need for a simple, intuitive, and efficient mobile application aimed at facilitating access to online courses. Its main objective is to enable users to quickly register on the platform, browse available courses organized by categories, and access all the necessary information to begin their learning journey smoothly.",
    technologies: ["XML", "Java", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Recipe Finder App",
    image: project4,
    description:
      "Development of a recipe search application using ReactJS, DaisyUI, and TheMealDB API, allowing users to search recipes, access video tutorials, save favorites with localStorage, and enjoy a modern interface.",
    technologies: ["HTML", "CSS", "React", "Tailwind","Api TheMealDB"],
  },
];

export const CONTACT = {
  address: "BD YAACOUB EL MENSSOUR , OUJDA",
  phoneNo: "+212 6 84 29 27 87 ",
  email: "abderrahim.habi23@ump.ac.ma",
};
