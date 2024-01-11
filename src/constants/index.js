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
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];
export const feedback = [
  {
    id: "feedback-1",
    content:
      "Exceptional assistance for my projects, achieving top grades.",
    name: "Emma Johnson",
    title: "College Student",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Timely and high-quality solutions, highly recommend their services.",
    name: "Ryan Smith",
    title: "College Student",
    img: people01,
  },
  {
    id: "feedback-3",
    content:
      "Managed my workload effectively, enabling focus on academic life.",
    name: "Sophia Williams",
    title: "College Student",
    img: people01,
  },
];

/* export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
]; */

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
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
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



export const projects = [
  {
    id: "project-1",
    content:
      "Developed an innovative mobile application for campus navigation, enhancing student experience.",
    name: "John Doe",
    title: "Computer Science Student",
    img: project01, // You can replace this with the actual path to the image for the first project
  },
  {
    id: "project-2",
    content:
      "Designed an interactive website for student organizations, fostering collaboration and engagement.",
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
      "Created a virtual laboratory platform for remote learning, enabling practical experience from anywhere.",
    name: "Emily Williams",
    title: "Biotechnology Student",
    img: project04, // You can replace this with the actual path to the image for the fourth project
  },
];
