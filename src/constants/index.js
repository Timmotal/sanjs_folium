import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    nextjs,
    api,
    payment,
    github2,
    onlineshop,
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "work",
      title: "Crafts",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "User-Experience",
      icon: web,
      info: "Developing Web Apps that runs across devices & platforms & delivering a seamless experience for all users."
    },
    {
      title: "Value",
      icon: mobile,
      info: "Passionate about building superb software. Integrating modern languages & frameworks to help deliver value and enrich lives."
    },
    {
      title: "Simple",
      icon: backend,
      info: "Enjoy bringing ideas to life in browsers. Leveraging the powers of Javascript and other technologies to develop friendly & simple UI."
    },

  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "payment",
      icon: payment,
    },
    {
      name: "api",
      icon: api,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "github2",
      icon: github2,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
// <-------------------------------------------------PROJECTS-CONSTANTS----------------------------------------------->
  const projects = [
    {
      name: "MERN App: Expelimus AI Image Generator",
      description:
        "AI Image Generation App, where your imagination is the limit to what can be created, it uses Open AI API to instantly fetch your prompts in real-time",
      tags: [
        {
          name: "Reactjs",
          color: "text-brickOrange",
        },
        {
          name: "mongodb",
          color: "text-charchoal",
        },
        {
          name: "tailwindcss",
          color: "text-brightPink",
        },
        {
          name: "nodejs",
          color: "text-butter",
        },
      ],
      image: project1,
      source_code_link: "https://expelimus.vercel.app",
      github_repo: "https://github.com/Timmotal/Expelimus",
    },
    {
      name: "Graphêvilla",
      description:
        "Graphevilla is where users share images and discuss what the images inspires in them with other people who share same interests",
      tags: [
        {
          name: "reactjs",
          color: "text-brickOrange",
        },
        {
          name: "sanitydb",
          color: "text-charchoal",
        },
        {
          name: "tailwindcss",
          color: "text-brightPink",
        },
        {
          name: "google-auth",
          color: "text-butter",
        },
      ],
      image: project2,
      source_code_link: "https://graphevilla.netlify.app/",
      github_repo: "https://github.com/Timmotal/GrapheVIlla",
    },
    {
      name: "Petsu E-Commerce Store",
      description:
        "Petsu is where users make their clothings shopping, with credit card implementation, using Strapi headless CMS to manage the inventory",
      tags: [
        {
          name: "Reactjs",
          color: "text-brickOrange",
        },
        {
          name: "sasscss",
          color: "text-charchoal",
        },
        {
          name: "online-payment",
          color: "text-brightPink",
        },
      ],
      image: project3,
      source_code_link: "https://petsu.netlify.app/",
      github_repo: "https://github.com/Timmotal/Petsu_Store",
    },
    {
      name: "Marsverse",
      description:
        "A concept application for exploring mars via virtual reality",
      tags: [
        {
          name: "nextjs",
          color: "text-brickOrange",
        },
        {
          name: "figma",
          color: "text-charchoal",
        },
        {
          name: "tailwindcss",
          color: "text-brightPink",
        },
      ],
      image: project4,
      source_code_link: "https://marsverse-timmortal.vercel.app/",
      github_repo: "https://github.com/Timmotal/Marsverse",
    },
    {
      name: "Mogymn",
      description:
        "A gymnasium membership app, users register and login to their profile for current programs",
      tags: [
        {
          name: "Typescript",
          color: "text-brickOrange",
        },
        {
          name: "framermotion",
          color: "text-charchoal",
        },
        {
          name: "tailwindcss",
          color: "text-brightPink",
        },
      ],
      image: project5,
      source_code_link: "https://mogymn.vercel.app/",
      github_repo: "https://github.com/Timmotal/mogymn",
    },
    {
      name: "Ridym Music App",
      description:
        "A music application using Shazam API, users listen and checkout the top Shazamed songs in the world",
      tags: [
        {
          name: "reactjs",
          color: "text-brickOrange",
        },
        {
          name: "tailwindcss",
          color: "text-charchoal",
        },
        {
          name: "axios",
          color: "text-brightPink",
        },
      ],
      image: project6,
      source_code_link: "https://ridym.vercel.app/",
      github_repo: "https://github.com/Timmotal/ridym",
    },
    {
      name: "Meta 2.0 Chat App",
      description:
        "Meta 2.0 clone, chat application using the Next JS 13, with realtime message updates",
      tags: [
        {
          name: "nextjs",
          color: "text-brickOrange",
        },
        {
          name: "redisdb",
          color: "text-charchoal",
        },
        {
          name: "tailwindcss",
          color: "text-brightPink",
        },
      ],
      image: project7,
      source_code_link: "https://github.com/Timmotal",
      github_repo: "https://github.com/Timmotal",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };