
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Adam",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
}
export const intro = {
  title: "Hello World! I'm Adam",
  description: "",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/1CjHdPVsuaCCfMzcJ6nm3mWVk01YyEWhL/edit?usp=sharing&ouid=108801549888371947375&rtpof=true&sd=true",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "About Me",
  description: [
    "Hello! My name is Adam Wuth, and I am a senior at CU Boulder, graduating with a BS in Computer Science this May. In my time at CU, I have worked with a lot of programming languages, and frameworks, but would say I am best with Python, and C++. ",
    "Going forward, I am interested in project development, and cybersecurity. I am passionate about creative problem solving, and I am very determined. While I may not have all the answers yet, I am dedicated, hardworking, and always eager to learn and adapt in order to achieve success and contribute to meaningful projects.",
    "When I’m not programming, I focus on my hobbies which are: running, hiking, and basketball/hockey.",
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Placeholder",
      description: "I am trying to figure out how to have the game of my project here and the assignment says we dont have to be completely done yer",
      icons: null
      // icons: [
      //   {
      //     icon: faGithub,
      //     link: "https://github.com/hashirshoaeb/portfolio",
      //   },
      // ]
    },
  ],
}

export const work = {
  title: "My Interests",
  cards: [
    {
      title: "PC Building",
      image: "/pc.png",
      description: "I have always loved computers and working with computers. This is why I went into computer science, but it is also why I am into building computers and keyboards. This is my personal PC. This project was my first time working with liquid cooling, and it was a challenge for sure, but I am very proud of the results!",
      icons: null,
    },
    {
      title: "Running",
      image: "/running.png",
      description: "In 2021, I ran a tough mudder planning to have it as just a one off event, but I fell in love with running. Since then, I have run the 15k tough mudder 3 times, the Boulderthon, and the Colorado Springs Marathon. There is something so rewarding about setting your mind to something, and working hard to complete your goals. I recently started training for the IRONMAN 70.3 Boulder 2026!",
      icons: null,
    },
    {
      title: "Rock Climbing",
      image: "/climbing.png",
      description: "It is important to have hobbies that get you outdoors and active. For me, this takes the form of rock climbing. Last summer I went on a climbing trip to Utah, and it was a blast. The photo is from a weird angle, I was only bouldering about 15 feet up, but I can’t wait to get out to Utah again!",
      icons: null,
    }
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Feel free to reach out directly by email at adam.wuth@colorado.edu, or on Linkedin. Alternatively, to see what I'm up to, check out my Instagram",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:adam.wuth@colorado.edu",
      isPrimary: true,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/adam-wuth/",
      isPrimary: true,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/aj.wuth/",
      isPrimary: true,
    }
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Adam Wuth | Software Developer",
  description: "I graduate this May from the University of Colorado Boulder with a BS in Computer Science.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@adamwuth",
  description: "Sofware Developer",
  cards: [
    {
      title: "My website",
      link: "https://Adam-Wuth.github.io/portfolio/",
    },
    {
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },
    {
      title: "My Instagram",
      link: "https://www.instagram.com/aj.wuth/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/adam-wuth/",
    },
  ]
}