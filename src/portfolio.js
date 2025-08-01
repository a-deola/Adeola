import {
  FaSass,
  FaJsSquare,
  FaReact,
  FaNode,
  FaNpm,
  FaDatabase,
  FaPython,
  FaDocker
} from "react-icons/fa";
import {
  SiRust,
  SiTypescript,
  SiSolidity,
  SiGo,
  SiGit,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiSolana,
  SiEthereum
} from "react-icons/si";

// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Adeola Samuel",
  title: "Hi, I'm Adeola",
  subTitle: emoji(
    "A software developer who enjoys turning ideas into intuitive, functional products. When I’m not coding, I’m writing about what I learn and exploring new ways to build and create.."
  ),
  resumeLink:
    "https://docs.google.com/document/d/19JCZlUEbgquRYjPdQciJPVHUgB-yMDHLmpjWmuEY404/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/a-deola",
  linkedin: "https://www.linkedin.com/in/a-deola/",
  gmail: "prechie.samuel@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Full-Stack & Blockchain Developer focused on building fast, intuitive, and scalable products.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Integrate Web3 features and on-chain logic")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Sass",
      icon: FaSass
    },
    {
      skillName: "JavaScript",
      icon: FaJsSquare
    },
    {
      skillName: "React.js",
      icon: FaReact
    },
    {
      skillName: "Node.js",
      icon: FaNode
    },
    {
      skillName: "npm",
      icon: FaNpm
    },
    {
      skillName: "Databases",
      icon: FaDatabase
    },
    {
      skillName: "Python",
      icon: FaPython
    },
    {
      skillName: "Docker",
      icon: FaDocker
    },
    {skillName: "Rust", icon: SiRust},
    {skillName: "TypeScript", icon: SiTypescript},
    {skillName: "Solidity", icon: SiSolidity},
    {skillName: "Golang", icon: SiGo},
    {skillName: "Git", icon: SiGit},
    {skillName: "NestJS", icon: SiNestjs},
    {skillName: "Next.js", icon: SiNextdotjs},
    {skillName: "React", icon: SiReact},
    {skillName: "Solana", icon: SiSolana},
    {skillName: "Ethereum", icon: SiEthereum}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Encode Club",
      logo: require("./assets/images/encode.jpeg"),
      subHeader: "Encode x Solana Rust Bootcamp Q2 2025",
      duration: "Jun 2025 - Jul 2025"
    },
    {
      schoolName: "University of Port Harcourt",
      logo: require("./assets/images/uniportLogo.png"),
      subHeader: "B.Sc. in Computer Science",
      duration: "Feb 2019 - Dec 2023"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "The QA School",
      companylogo: require("./assets/images/qaLogo.jpeg"),
      date: "Nov 2024 – March 2025"
    },
    {
      role: "IT Support Intern",
      company: "Graphic Packaging International",
      companylogo: require("./assets/images/gpiLogo.jpeg"),
      date: "April 2022 – Dec 2022"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "STUFF THAT I HAVE BUILT SO FAR",
  projects: [
    {
      image: require("./assets/images/skycast.png"),
      projectName: "SkyCast – Weather Forecast App",
      projectDesc:
        "SkyCast is a fast and lightweight weather app built with Vite and Fiber. It fetches real-time weather data using the OpenWeather API, showing current conditions with a responsive UI and live updates based on user location.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://a-deola.github.io/SkyCast/"
        },
        {
          name: "Source Code",
          url: "https://github.com/a-deola/SkyCast"
        }
      ]
    },
    {
      image: require("./assets/images/evently.png"),
      projectName: "HostFlow – Event Management Dashboard",
      projectDesc:
        "HostFlow is a modern dashboard built with Next.js , designed for event managers to track guests, schedules, and logistics. It uses dummy data to showcase features like summaries, charts, and quick actions in an intuitive layout",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://host-flow.vercel.app/"
        },
        {
          name: "Source Code",
          url: "https://github.com/a-deola/host-flow"
        }
      ]
    },
    {
      image: require("./assets/images/lotto.png"),
      projectName: "LottoFi – Web3 Lottery App",
      projectDesc:
        "Built with Next.js and powered by smart contracts on Base, LottoFi offers a fully decentralized lottery experience. Users can enter draws, and interact directly with the blockchain from a sleek, user-friendly interface.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lottofi-ui.vercel.app/"
        },
        {
          name: "Source Code",
          url: "https://github.com/a-deola/cardly"
        }
      ]
    },
    {
      image: require("./assets/images/cardly.png"),
      projectName: "Cardly – Digital Business Card",
      projectDesc:
        "Cardly is a clean and minimal React app that displays my social links in one place. It’s designed for quick access and easy sharing, like a digital business card.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cardlybyade.netlify.app/"
        },
        {
          name: "Source Code",
          url: "https://github.com/a-deola/cardly"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 🗨️ "),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "prechie.samuel@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "simply_adeola", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
