export type Certificate = {
  name: string;
  date: string;
  description: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    name: "Next.js Conf",
    date: "June 21, 2021",
    description:
      "Focused on performance optimizations and improvements for better Core Web Vitals, Automatic Image optimizations, SSR and Serverless functions",
    image: "nextjs-conf-ticket-06212021.png",
  },
  {
    name: "Next.js Conf",
    date: "October 26, 2021",
    description:
      "October Conference release of Rust Based compiler and React 18 support",
    image: "nextjs-conf-ticket-10262021.png",
  },
  {
    name: "React Conf 2021",
    date: "December 08, 2021",
    description:
      "Focused on React 18 Release with Suspense, Server Components, Concurrency and Automated Batching",
    image: "react-conf-ticket-12082021.png",
  },
  {
    name: "Guest Speaker - IT Week, Saint Mary's University",
    date: "November 11, 2021",
    description:
      "Discussed modern web development, industry adoption and advantage of Progressive Web Applications",
    image: "smu-pwa-speaker-11252021.png",
  },
  {
    name: "StackLeague Programming Tournament Participation",
    date: "December 15, 2021",
    description: "Participation in StackLeague hosted programming tournaments",
    image: "stackleague-participation-10152021.jpg",
  },
];
