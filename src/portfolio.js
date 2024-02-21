import splashAnimation from "./assets/lottie/splashAnimation";
import emoji from "react-easy-emoji";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000 
};

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harsh Kumar",
  title: "Hi all, I'm Harsh",
  subTitle: emoji(
    "A passionate Full Stack Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kTjtexRVocJIw5HPxCmq_CoZf_8oN25c/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/anonymous-eng",
  linkedin: "https://www.linkedin.com/in/harsh-kumar-136a24216/",
  gmail: "harshk0056@gmail.com",
  display: true // Set true to display this section, defaults to false
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "ethereum",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "blockchain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "tailwind",
      fontAwesomeClassname: "fas fa-wind"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bhagwan Parshuram Institute of Technology",
      logo: require("./assets/images/BPIT_Logo.jpeg"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "September 2020 - August 2024"
    },
    {
      schoolName: "Army Public School Delhi Cantt",
      logo: require("./assets/images/APS.png"),
      subHeader: "Senior Secondary",
      duration: "March 2018 - March 2019"
    },
    {
      schoolName: "Army Public School Delhi Cantt",
      logo: require("./assets/images/APS.png"),
      subHeader: "Secondary",
      duration: "March 2016 - March 2017"
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Web Developer",
      company: "Honda Cars India Ltd.",
      companylogo: require("./assets/images/Honda.png"),
      date: "March 2023 – April 2023",
      descBullets: [
        " Redesigned Uniform Management System to update employee information and facilitate bulk issuance of uniforms through .xlsx files, resulting in an 80% increase in productivity.",
        " Designed a user page for managing uniform issuance, individually through the utilization of company email, reducing uniform-related admin requests by 50%.",
        "Worked with different tech stacks including .Net, C#, HTML, CSS, JavaScript."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Credesoft",
      date: "April 2023 - June 2023",
      descBullets: [
        "Spearheaded a feature for users to specify match preferences based on diverse criteria, including but not limited to employment status, level of education, and physical characteristics, resulting in a 15% increase in successful matches.",
        " Enhanced the user experience by leveraging algorithms to generate personalized recommendations based on user’s preferences matching with other subscribers upon login.",
        " Technology Used: - ReactJS, NodeJS, ExpressJS, HTML, CSS, JavaScript, MySql."
      ]  
    }
  ]
}

const openSource = {
  repo: [
    {
      name: "Invoice Maker",
      description: "A full-stack web application that generate and send/download invoices via email.",
      url: "https://github.com/anonymous-eng/invoicemaker",
      demo: "https://invoicemaker-nu.vercel.app/",
      primaryLanguage: 
        {
          color: "orange",
          name: "JavaScript"
        }
    },
    {
      name: "Exam Engine",
      description: "Online Coding Assessment Platform",
      url: "https://github.com/anonymous-eng/exam_engine",
      demo: "https://exam-engine.vercel.app/",
      primaryLanguage: 
        {
          color: "orange",
          name: "JavaScript"
        }
    },
    {
      name: "DocBlock",
      description: "Blockchain based decentralized Patient Record Management Platform on Ethereum",
      url: "https://github.com/anonymous-eng/doc-block",
      demo: "https://doc-block-ten.vercel.app/",
      primaryLanguage: 
        {
          color: "orange",
          name: "JavaScript"
        }
    },
    {
      name: "TalkZone",
      description: "A Full Stack Chatting App that enables real-time communication between users via messaging.",
      url: "https://github.com/anonymous-eng/talkzone",
      demo: "https://talkzone.vercel.app/",
      primaryLanguage: 
        {
          color: "orange",
          name: "JavaScript"
        }
    },
    {
      name: "Personal Pad",
      description: "A full-stack web application that empowers users to effortlessly create, edit, and save notes.",
      url: "https://github.com/anonymous-eng/personalpad",
      demo: "https://personalpad.vercel.app/",
      primaryLanguage: 
        {
          color: "orange",
          name: "JavaScript"
        }
    },
    {
      name: "Coinster",
      description: "A Cryptocurrency tracker app to get all the info regarding your favourite cryptocurrency.",
      url: "https://github.com/anonymous-eng/coinster",
      demo: "https://coinster-track.vercel.app/",
      primaryLanguage: 
        {
          color: "orange",
          name: "JavaScript"
        }
    },
    {
      name: "Portfolio",
      description: "Minimalistic and fully responsive portfolio website, Beautifully crafted with subtle yet elegant animations that bring the UI to life.",
      url: "https://github.com/anonymous-eng/portfolio",
      demo: "https://harshkportfolio-chi.vercel.app/",
      primaryLanguage: 
        {
          color: "orange",
          name: "JavaScript"
        }
    },
  ], // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

export {
  greeting,
  splashScreen,
  workExperiences,
  illustration,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  openSource,
};
