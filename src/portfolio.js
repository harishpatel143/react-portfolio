/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Harish Patel",
  title: "Hi all, I'm Harish",
  subTitle: emoji(
    "I'm PHP Developer 🚀 having an experience of building Web and Backend applications with PHP / Laravel / NodeJs / VueJs / CakePHP / ExpressJS / REST API  and some other cool libraries and frameworks."
  ),
  resumeLink:"https://drive.google.com/file/d/1o_W7lT6iZfMkCzx2KgopPmVMqnQQFZx7/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harishpatel143",
  linkedin: "https://www.linkedin.com/in/harishdpatel",
  gmail: "harishdpatel143@gmail.com",
  // gitlab: "https://gitlab.com/",
  medium: "https://medium.com/@harishdpatel",
  facebook: "https://www.facebook.com/hrsdptl",
  stackoverflow: "https://stackoverflow.com/users/8531050/harish-patel",
  instagram: 'https://www.instagram.com/hrsptl_143/',
  twitter: 'https://twitter.com/hrsptl_143',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK PHP/JAVASCRIPT DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications with Robust backend architecture"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Stripe / Pusher / "
    )
  ],

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
      skillName: "PHP 7/ PHP 5",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel 5/6/7/8",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Cake PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "AWS Services",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "B.K. School of Buisness Management, Gujarat University, Ahemedabad",
      logo: require("./assets/images/guj-uni.png"),
      subHeader: "Master of Science (Computer Science and Information Technology)",
      duration: "2013 - 2018",
      desc: "7.89 CGPA",
      descBullets: []
    },
    {
      schoolName: "Govt. Seniour Secondary School Kherwara, Udaipur(Raj)",
      logo: require("./assets/images/besr-logo.jpeg"),
      subHeader: "HSC",
      duration: "2011 - 2013",
      desc: "61.80%",
      descBullets: []
    },
    {
      schoolName: "Govt. Seniour Secondary School Thana, Udaipur(Raj)",
      logo: require("./assets/images/besr-logo.jpeg"),
      subHeader: "HSC",
      duration: "2009 - 2011",
      desc: "71.74%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Database",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Idea Zinc Pvt. Ltd.",
      //companylogo: "",
      date: "Feb 2022 – Currently Working Here",
      desc: "I'm working as a Software Developer for building web appliactions, REST APIs and backend platforms"
      // descBullets: []
    },
    {
      role: "Software Engineer",
      company: "Hesabe Payment Collection",
      companylogo: "https://hesabe-assets.s3.me-south-1.amazonaws.com/Hesabe-Logo.png",
      date: "Sep 2021 – Feb 2022",
      desc: "I'm working as a Software Engineer for building web appliactions, REST APIs and backend platforms"
      // descBullets: []
    },
    {
      role: "Software Engineer",
      company: "Simform Solutions Pvt. Ltd.",
      companylogo: require("./assets/images/simform.png"),
      date: "June 2019 – Present",
      desc: "I'm working as a Software Engineer for building web appliactions, REST APIs and backend platforms"
      // descBullets: []
    },
    {
      role: "PHP/Laravel Developer",
      company: "Multidots",
      companylogo: require("./assets/images/multidots.jpeg"),
      date: "July 2017 – May 2019",
      desc: "I'm worked as a PHP/Laravel Developer for building web appliactions, REST APIs and backend platforms"
    },
    {
      role: "Project Trainee",
      company: "Multidots",
      companylogo: require("./assets/images/multidots.jpeg"),
      date: "January 2017 – June 2017",
      desc: "Project Trainee"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "harishpatel143", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
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

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
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
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+91) 8200412899",
  email_address: "harishdpatel143@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "hrsptl_143", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
