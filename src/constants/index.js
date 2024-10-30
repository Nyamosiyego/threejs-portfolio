export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'FreshConnect - Agribusiness platform',
    desc: 'FreshConnect is a platform where farmers can register as vendors and post their products for sale. This is an ecommerce site where the customer can buy products posted by multiple vendors.',
    subdesc:
      'Dynamic e-commerce platform bridging the gap between farmers and customers. With an aim to empower farmers, I designed the platform to enable them to become vendors, showcasing their products for direct purchase by customers. To ensure secure transactions, I integrated Stripe and Mpesa APIs for payment.',
    href: 'https://fresh-connect.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/farm.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'NextJs',
        path: '/assets/nextjs.png',
      },
    ],
  },
  {
    title: 'YelpCamp - Campground Review Platform',
    desc: 'A Yelp-like web-based application that allows users to create, view, and review campgrounds around the world🌎',
    subdesc:
      'Everyone can view the camps and reviews without signing up or logging in. The user will have to login to edit the campground details or any comments. The user can only edit/delete the campgrounds and comments that they have added. All the data will pe persistent and is stored in the awazon cloud.',
    href: 'https://yelpcamp-rx37.onrender.com/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/camp.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/js.png',
      },
      {
        id: 4,
        name: 'NextJs',
        path: '/assets/nodejs.png',
      },
    ],
  },
  {
    title: 'Foody - Recipe Book App',
    desc: 'Recipe Book App is a simple mobile application built using React Native, designed to allow users to view, add, and explore various recipes. This project emphasizes component organization, state management, navigation, and creating a mobile-responsive layout.',
    subdesc:
      'The Recipe Sharing App offers an easy way to discover, save, and share recipes, powered by TheMealDB API. Users can browse a wide range of recipes, filtering by categories or ingredients to find new meal ideas that suit their taste. Each recipe page provides detailed instructions, a list of ingredients, and a placeholder image for a complete, intuitive cooking experience. With the option to save favorites, users can quickly access preferred recipes anytime, making meal planning simple and enjoyable.',
    href: 'https://github.com/Nyamosiyego/recipe/blob/master/README.md',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/bibimbap.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'NextJs',
        path: '/assets/sdk.png',
      },
    ],
  },
  {
    title: 'RAWG - Video Game discovery Platform',
    desc: 'RAWG.io is a video game discovery platform and database that allows users to explore, rate, and share their favorite games. Covering a wide range of platforms, including PC, consoles, and mobile devices, it serves as a central hub for gamers to find in-depth information on titles across genres.',
    subdesc:
      'Each game entry provides comprehensive details like release dates, developer and publisher info, genres, ratings, and user-generated reviews, making it easier for players to decide on their next gaming adventure. The platform also supports media content, with screenshots, videos, and trailers, giving a visual preview of each game.',
    href: 'https://game-indol-rho.vercel.app',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/game.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'NextJs',
        path: '/assets/nextjs.png',
      },
    ],
  },
  {
    title: 'Load Balancer Implementation (Backend)',
    desc: 'Implemented a customizable load balancer using FastAPI and Docker. This distributed system efficiently routes requests among multiple server instances using consistent hashing. Features include dynamic server management, fault tolerance, and real-time configuration via RESTful APIs.',
    subdesc:
      ' Conducted performance analysis demonstrating ability to handle 10,000+ concurrent requests. The project showcases proficiency in backend development, distributed systems, and DevOps practices.',
    href: 'https://github.com/Nyamosiyego/teste',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/loadBalancer.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/Docker.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/ubuntu.png',
      },
      {
        id: 4,
        name: 'NextJs',
        path: '/assets/kubernetes.png',
      },
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'PwC',
    pos: 'Software Engineer Intern',
    duration: '01/2024 – 04/2024',
    title: "Executed the design and implementation of automation workflows, collaborating closely with clients to understand their unique requirements and challenges. Deployed cutting-edge automation tools, resulting in a significant 25% reduction in errors and a remarkable 35% improvement in process turnaround times, driving impactful efficiency gains.",
    icon: '/assets/pwc.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Priority Air Express',
    pos: 'Software Engineer Contractor',
    duration: '03/2023 – 04/2023',
    title: "Contributed to a full spectrum of development, from developing features and writing associated tests on the frontend, ensuring seamlessuser experiences and optimal performance.",
    icon: '/assets/framer.svg',
    animation: 'clapping',
  },
];
