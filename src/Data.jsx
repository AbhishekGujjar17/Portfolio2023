import DefaultImage from "./assets/default.png";
import Book from "./assets/CloudBook.png";
import Jarvis from "./assets/Jarvis.jpg";
import News from "./assets/NewsMonkey.png";
import Todo from "./assets/Todo.png";
import Text from "./assets/Textutils.png";
import Music from "./assets/Musicxy.jpg";
import King from "./assets/KingDomino.png";
import Serverless from "./assets/Serverless.png";
import Prediction from "./assets/Prediction.png";
import Life from "./assets/Life.png";
import Older from "./assets/OlderPortfolio.png";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Projects",
    path: "work",
  },
  {
    name: "Resume",
    path: "resume",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export const projects = [
  {
    id: 12,
    img: Book,
    category: "MERN",
    title: "MERN Mart",
    description:
      "Introducing MERN Mart: The one-stop destination for seamless online shopping.",
    link: "https://mernmart.netlify.app",
    repositorio: "https://github.com/AbhishekGujjar17/MERN-Mart",
    stack:
      "Html, CSS, Javascript, ReactJs, NodeJs, ExpressJs, MongoDb, JWT, Antd, Braintree",
  },
  {
    id: 1,
    img: Book,
    category: "MERN",
    title: "CloudBook",
    description: "With CloudBook take notes on the cloud.",
    link: "https://cloudnotebook.vercel.app",
    repositorio: "https://github.com/AbhishekGujjar17/CloudBook",
    stack:
      "Html, CSS, Javascript, Bootstrap, ReactJs, NodeJs, ExpressJs, MongoDb, JWT, Vercel",
  },
  {
    id: 8,
    img: Serverless,
    category: "AWS",
    title: "Serverless-CRUD-AWS",
    description: "Serverless CRUD operations with AWS.",
    repositorio:
      "https://github.com/AbhishekGujjar17/Serverless_CRUD_AWS_Terraform",
    stack:
      "AWS Lambda, API Gateway, DynamoDb, IAM Role and polices, Terraform, Jenkins",
  },
  {
    id: 11,
    img: Older,
    category: "React",
    title: "Portfolio (Older)",
    description: "Older Portfolio Website",
    link: "https://abhishekgujjar.netlify.app/about",
    repositorio: "https://github.com/AbhishekGujjar17/Portfolio",
    stack: "React, Framer-Motion, Javascript",
  },
  {
    id: 2,
    img: Todo,
    category: "React",
    title: "Todo-App",
    description:
      "Accomplish your goals in style with this digital task management solution.",
    link: "https://sharp-noyce-e84569.netlify.app/",
    repositorio: "https://github.com/AbhishekGujjar17/Todo-App",
    stack: "Html, CSS, Javascript, ReactJs",
  },
  {
    id: 3,
    img: Text,
    category: "React",
    title: "Wordify",
    description:
      "Use Wordify remove extra spaces, copying the text as well as for text conversions",
    link: "https://textutilsabhi.netlify.app/",
    repositorio: "https://github.com/AbhishekGujjar17/Textutils",
    stack: "Html, CSS, Javascript, ReactJs, Bootsrap",
  },
  {
    id: 4,
    img: News,
    category: "React",
    title: "NewsMonkey",
    description: "Never miss a news with NewsMonkey.",
    link: "https://github.com/AbhishekGujjar17/NewsMonkey",
    repositorio: "https://github.com/AbhishekGujjar17/NewsMonkey",
    stack: "Html, CSS, Javascript, ReactJs, News API",
  },
  {
    id: 5,
    img: Jarvis,
    category: "Python",
    title: "AI Desktop Voice Assistant",
    description: "Your own AI Desktop Voice Assistant.",
    repositorio:
      "https://github.com/AbhishekGujjar17/JARVIS-AI-Desktop-Voice-Assistant-With-Python",
    stack: "Python, Pyttsx3, Speech Recognition, Smptlib",
  },
  {
    id: 6,
    img: King,
    category: "Java",
    title: "King Domino",
    description: "Computerized version of the KingDomino board game.",
    repositorio: "https://github.com/AbhishekGujjar17/KingDomino",
    stack: "Java, Java Swing, Serialization, OOP's, Team Work",
  },
  {
    id: 7,
    img: Music,
    category: "Python",
    title: "Musicxy -- MP3Player",
    description: "Musicxy -- Your own MP3 Player.",
    repositorio: "https://github.com/AbhishekGujjar17/Musicxy---MP3-Player",
    stack: "Python, Pygame, Tkinter, pickle",
  },
  {
    id: 9,
    img: Prediction,
    category: "Python",
    title: "Song Hit/Flop Predictor",
    description: "Spotify Song Hit or Flop Predictor.",
    repositorio: "https://github.com/AbhishekGujjar17/Spotify_Hit_Predictor",
    stack: "Python, Jupyter, matplotlib, numpy, pandas, Data Engineering",
  },
  {
    id: 10,
    img: Life,
    category: "Java",
    title: "Game of Life Simulator",
    description: "Game of Life in Java",
    repositorio: "https://github.com/AbhishekGujjar17/GameOfLife_GUI",
    stack: "Java, Object-oriented programming",
  },
];

export const cv = [
  {
    id: 1,
    title: "Memorial University of Newfoundland",
    subtitle: "Bachelor of Science in Computer Science (Honours)",
    date: "2020 - 2023",
    description:
      "GPA 🎓: 3.9/4\nCourses 📚: Operating Systems, Data Structures, Analysis Of Algorithms, Artificial Intelligence, Machine Learning, Networking, Databases\nHonors and Awards 🏆: Dean's List (2❌), International Undergraduate Academic Award (💲3000), Roberta Scholarship (💲3056)",
    category: "education",
  },

  {
    id: 2,
    title: "Software Developer - Cloud",
    subtitle: "Verafin (Nasdaq)",
    date: "Jan. 2023 - Present",
    description:
      "Working in Cloud team to automate different tasks.\nSkills 🧑‍💻: REST APIs · Amazon Web Services (AWS) · Terraform · Splunk · Jenkins · Python",
    category: "experience",
  },

  {
    id: 3,
    title: "Software Engineer",
    subtitle: "PragmaClin Research Inc.",
    date: "June 2022 - Oct. 2022",
    description:
      "Worked with depth cameras to track hand and body movements with Python to assist patients with Parkinson's.\nDeveloped the entire frontend component of the software from scratch using React.Js and Syncfusion API.\nUsed JavaFx to make changes in the current GUI of the software.\nManaged the database using SQLite and migrated it to SQL Server.\nSkills 🧑‍💻: Artificial Intelligence (AI) · Java · OpenCV · SQLite · Python · SQL Server · JavaScript · React.js",
    category: "experience",
  },

  {
    id: 4,
    title: "Data Science Intern",
    subtitle: "Faculty of Medicine, Memorial University",
    date: "May 2022 - July 2022",
    description:
      "Utilized web scrapping technique with Python to extract and organize data related to cannabis from CBC news site.\nGot familiar with data visualization and performed data analysis to extract useful data on cannabis from spreadsheets.\nConducted sentiment analysis of tweets related to cannabis through the use of machine learning models.\nSegregated tweets about cannabis from different regions in Canada using packages such as Pandas, Matplotlib, Seaborn and Nltk. \nSkills 🧑‍💻: Data Analysis · Web Scraping · Data Science · Python",
    category: "experience",
  },

  {
    id: 5,
    title: "Computer Science Tutor",
    subtitle: "Faculty of Computer Science, Memorial University",
    date: "Sep. 2021 - Nov. 2021, Jan. 2022 - April 2022",
    description:
      "Instructing students on facets of Java, Python, C, and other relevant technologies.\nMonitored improvements for students through a tracking spreadsheet.\nProviding feedback to students using positive reinforcement techniques to encourage, motivate, or build confidence in students.\nHelping students with code analysis, debugging, and further suggestions.\nElevated student performance and improved scores by up to 45%.",
    category: "experience",
  },
];
