import { BlogPost } from "@/types";
import { Link, Eye, Sun } from "lucide-react";

export const testimonials = [
    {
      quote:
        "Buyer buzz partner network disruptive non-disclosure agreement business",
      author: "Albus Dumbledore",
      role: "Manager @ Hogwarts",
      image: '/images/img6.png',

    },
    {
      quote:
        "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      author: "Severus Snape",
      role: "Manager @ Slytherin",
      image: '/images/img7.png',
    },
    {
      quote:
        "Release facebook responsive web design business model canvas seed money monetization.",
      author: "Harry Potter",
      role: "Team Leader @ Gryffindor",
      image: '/images/img8.png',
    },
  ];

  export const features = [
    {
      title: "Cool feature title",
      description: "Learning curve network effects return on investment."
    },
    {
      title: "Even cooler feature",
      description: "Learning curve network effects return on investment."
    },
    {
      title: "Cool feature title",
      description: "Learning curve network effects return on investment."
    }
  ];


  export const services = [
    {
      title: 'Cool Feature Title',
      description: 'Learning curve network effects return on investment.',
      link: '/explore',
      image: '/images/img1.png', 
    },
    {
      title: 'Even Cooler Feature',
      description: 'Learning curve network effects return on investment.',
      link: '/explore',
      image: '/images/img2.png', 
    },
    {
      title: 'Another Cool Feature',
      description: 'Learning curve network effects return on investment.',
      link: '/explore',
      image: '/images/img3.png', 
    },
  ];
  

export const bars = [30, -20, 15, -10, 45, 25, -15];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Pitch termsheet backing validation focus release.',
    image: '/images/img1.png',
    category: 'Category',
    date: 'November 22, 2021',
    author: {
      name: 'Chandler Bing',
      avatar: '/images/img11.png',
    }
  },
  {
    id: '2',
    title: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    image: '/images/img5.png',
    category: 'Category',
    date: 'November 22, 2021',
    author: {
      name: 'Rachel Green',
      avatar: '/images/img12.png',
    }
  },
  {
    id: '3',
    title: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    image: '/images/img10.png',
    category: 'Category',
    date: 'November 22, 2021',
    author: {
      name: 'Monica Geller',
      avatar: '/images/img13.png',
    }
  }
];

export const logos = [
  { image: '/images/logo2.png'},
  { image: '/images/logo4.png' },
  { image: '/images/logo2.png'},
  { image: '/images/logo4.png'},
  { image: '/images/logo2.png' },
  { image: '/images/logo4.png' },
];

export   const items = [
  {
    icon: Link,
    text: "We connect our customers with the best.",
  },
  {
    icon: Eye,
    text: "Advisor success customer launch party.",
  },
  {
    icon: Sun,
    text: "Business-to-consumer long tail.",
  },
];
