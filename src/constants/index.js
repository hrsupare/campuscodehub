import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star, project01, project02, project03, project04
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "contactUs",
    title: "Contact Us",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Comprehensive Solutions",
    content:
      "Our Full Stack Project Solutions encompass both frontend and backend development, providing a comprehensive approach to your academic projects.",

  },
  {
    id: "feature-2",
    icon: send,
    title: "Customized Development",
    content:
      "Our team offers tailored development services, adapting to your specific requirements and academic needs to deliver personalized solutions.",
  },
  {
    id: "feature-3",
    icon: shield,
    title: "Timely Delivery",
    content:
      "We are committed to delivering your projects on time, ensuring you meet your academic deadlines and achieve your academic goals.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Guided me through the development of a portfolio website using React.js and Express.js. The team's expertise with HTML, CSS, and MongoDB was instrumental.",
    name: "Amit Mankar",
    title: "B.Tech Student",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Assisted in developing my travel website, enabling users to explore destinations, plan trips, and share experiences. Their expertise in React.js, Node.js, and JavaScript was instrumental for its successful completion.",
    name: "Rahul Sahare",
    title: "BCA Student",
    img: people01,
  }
 ,   
 {
  id: "feedback-4",
  content:
    "Developed a comprehensive food website that offers recipes, cooking tips, and culinary insights. We worked diligently on their food website, leveraging our expertise in React.js.",
  name: "Anjali Rahate",
  title: "BE (CS) Student",
  img: people01,
},
];


export const stats = [
  {
    id: "stats-1",
    title: "Projects Completed",
    value: "27+",
  },
  {
    id: "stats-2",
    title: "Satisfied Clients",
    value: "27+",
  },
  {
    id: "stats-10",
    title: "24/7 Support",
    value: "Available",
  }

];


export const footerLinks = [
  {
    title: "Useful Links",
    links: [ 
      {
        name: "How it Works",
        link: "https://www.campuscodehub.tech/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.campuscodehub.tech/create/",
      },
      {
        name: "Explore",
        link: "https://www.campuscodehub.tech/explore/",
      }, 
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.campuscodehub.tech/help-center/",
      }, 
      {
        name: "Suggestions",
        link: "https://www.campuscodehub.tech/suggestions/",
      }, 
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.campuscodehub.tech/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.campuscodehub.tech/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];


/* export const projects = [
  {
    id: "project-1",
    content: "Experience a curated showcase of my work, blending creativity. Dive in to explore design excellence tailored for today's digital landscape.",
    name: "John Doe",
    title: "Computer Science Student",
    img: project01, // You can replace this with the actual path to the image for the first project
  },
  {
    id: "project-2",
    content:
      "Embark on a journey with Travel Website, where one click opens door to new horizons. Discover and create unforgettable memories on our platform.",
    name: "Jane Smith",
    title: "Information Technology Student",
    img: project02, // You can replace this with the actual path to the image for the second project
  },
  {
    id: "project-3",
    content:
      "Implemented a database management system for academic resources, optimizing resource allocation.",
    name: "Robert Johnson",
    title: "Information Systems Student",
    img: project03, // You can replace this with the actual path to the image for the third project
  },
  {
    id: "project-4",
    content:
    "Discover culinary delights that tantalize your taste buds. Dive into a world of flavors, fresh ingredients, and mouthwatering recipes.",
    name: "Emily Williams",
    title: "Biotechnology Student",
    img: project04, // You can replace this with the actual path to the image for the fourth project
  },
  
]; */
export const projects = [
  {
    id: "project-1",
    content: "Designed and implemented a portfolio website highlighting skills, projects, and achievements, leveraging HTML, CSS, and MongoDB.",
    name: "Amit Mankar",
    title: "B.Tech Student",
    img: project01, // Actual path to the image for the first project
  },
  
  {
    id: "project-2",
    content:
      "Developed a travel website where users can explore destinations, plan trips, and share experiences, leveraging React.js, Node.js, and JavaScript.",
    name: "Rahul Sahare",
    title: "BCA Student",
    img: project02, // Actual path to the image for the second project
  }
,   
{
  id: "project-3",
  content:
    "Designed a bakery website that showcases a variety of baked products, from artisan bread to gourmet pastries .",
  name: "Pooja Panse",
  title: "BCCA Student",
  img: project03, // Actual path to the image for the third project
} , 
  {
    id: "project-4",
    content:
    "Designed a food website featuring recipes, culinary tips, and food blogs, providing users with a delightful gastronomic experience using React.js and Tailwind",
  name: "Anjali Rahate",
    title: "BE (CS) Student",
    img: project04, // Actual path to the image for the fourth project
  },
  
];
