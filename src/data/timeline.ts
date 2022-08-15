type ProjectEntry = {
  name: string;
  description: string;
  responsibilities: (string | [string, string[]])[];
  technologies: string[];
};

type TimelineEntry = {
  position: string;
  company: string;
  date?: string;
  projects: ProjectEntry[];
};
const timelineEntries: TimelineEntry[] = [
  {
    company: "Analytick Box Inc.",
    position: "System Administrator",
    date: "April 2017 - December 2018",
    projects: [
      {
        name: "",
        description: "",
        responsibilities: [
          " Installed system-wide hardware components, confirming interoperation and compatibility between Linux Server and Windows Server.",
          "Developed and documented Linux Server configurations utilizing hardware components to create parallelized IO transfer between network storage and server yielding 1000% and 2000% faster IO speeds.",
          "Configured cross-site installation of networked systems, confirming continuous post-install connectivity between remote servers and local servers.",
          "Configured in-house cloud server instances ensuring stability for client connections and potential clients/investors.",
        ],
        technologies: [
          "MPIO",
          "iSCSI",
          "Linux SAN Storage",
          "Ubuntu Server",
          "Windows Server 2012 R2",
        ],
      },
    ],
  },
  {
    company: "MANRIC Builders and Designers",
    position: "Web Application Developer / Researcher",
    date: "August 2018 - May 2019",
    projects: [
      {
        name: "Project COMAS",
        description:
          "Construction company's Payroll, Daily Time Record and Inventory Management System for multiple simultaneous projects",
        responsibilities: [
          "Led student researchers in development and delivery of construction management system resulting in streamlined operation in payroll computations and inventory monitoring.",
          "Reviewed project specifications and designed performant technology solutions that meets client expectation",
          "Recorded over 400 contractual employee records for social security, health insurance and home development mutual funds for centralized bookkeeping and faster payroll management.",
        ],
        technologies: [
          "Laravel",
          "Vue",
          "jQuery",
          "Bootstrap",
          "MySQL",
          "Eloquent",
        ],
      },
    ],
  },
  {
    company: "PRIME Philippines, Quezon City, NCR",
    position: "Web Development Intern",
    date: "August 2019 - March 2020",
    projects: [
      {
        name: "Aleph Core",
        description: `Company's Real Estate and Financial Technology System`,
        responsibilities: [
          "Developed and optimized UI components utilizing libraries and modern frameworks while ensuring compatibility between devices and browsers.",
          "Proposed and applied newer standards of coding within framework to replace old standards in company code for easier integration with third party libraries and efficient debugging, tracking and performance gains.",
          "Ensured component optimization with modern libraries for handling inputs from multiple component hierarchies.",
          "Proposed new in-house company coding standards to employ new language syntaxes which improves readability of code and better developer experience.",
        ],
        technologies: [
          "React",
          "Laravel Apiato",
          "React Hook Form",
          "Redux",
          "AntDesign",
          "Styled Components",
          "Apache",
          "MariaDB",
          "Eloquent",
        ],
      },
    ],
  },
  {
    company: "DVRCluster Technologies LLC., Las Vegas Nevada",
    position: "Software Engineer ( Remote )",
    date: "August 2020 - July 2022",
    projects: [
      {
        name: "DVRCluster Ecommerce Site",
        description:
          "Initial Ecommerce site for selling custom built machines to initial customers.",
        responsibilities: [
          "Responsible for the company’s branding including company logos and color schemes.",
          "Designed and developed its Ecommerce Site for showcasing and selling compact servers. ",
          "Created and was responsible for the company’s initial boilerplate and libraries for client and server-side technologies for utilizing MERN stack.",
          "Created an Administrator view for viewing sales, site visits, registration and customer feedback.",
          "Took charge of the company’s SEO and Search Engine presence. ",
          "Created integrations with PayPal and Stripe to generate invoice and shipment information for users. ",
        ],
        technologies: [
          "React.js",
          "Next.js",
          "Redux",
          "Axios",
          "Material-UI",
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "Stripe",
          "PayPal",
          "Git",
          "Adobe XD",
          "Vercel",
          "Vercel Edge Functions",
        ],
      },
      {
        name: "DVRCluster Movies and TV Shows Database Prototype Site",
        description:
          "A site for showcasing possible UI/UX design and sequences for company’s streaming services to investors. ",
        responsibilities: [
          "Spearheaded the design and development of company site for showcasing vision for company’s streaming site for investors. ",
          "Responsible for the overall UI/UX, wireframe, prototyping and development for ",
          "Utilized animation and important design principles for viewing TV Shows and Movie Trailers. ",
          "Processed and displayed latest movies and tv shows using an external movie database API",
        ],
        technologies: [
          "React.js",
          "Next.js",
          "Axios",
          "Redux",
          "IMDB API",
          "TMDB API",
          "YouTube API",
          "Adobe XD",
          "Git",
          "Vercel",
          "Vercel Edge Functions",
          "MongoDB",
        ],
      },
      {
        name: "DVRCluster Libraries and Prototypes",
        description:
          "A collection of company libraries for its streaming technologies and prototypes.",
        responsibilities: [
          "Created libraries showcasing different strategies for streaming, viewing and content delivery.",
          "Integrated third party libraries with Nodejs for processing of files for transmuxing and transcoding.",
          "Responsible for the documentation of possible configurations for streaming formats and quality. ",
        ],
        technologies: [
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "Hls.js",
          "FFMPEG",
          "VLC Open Library",
          "Git",
        ],
      },
    ],
  },
  {
    company: "REALM1000 Corp., Las Vegas, Nevada",
    position: "Software Engineer ( Remote )",
    date: "August 2020 - July 2022",
    projects: [
      {
        name: "REALM1000 Ecommerce Site",
        description:
          "Ecommerce site for selling custom machines to early customers.",
        responsibilities: [
          "Responsible for the company’s branding including company logos and color schemes.",
          "Designed and developed the company’s Ecommerce site for selling servers and PC parts for consumers.",
          "Enhanced its sister company’s library for client and server-side technologies which utilizes MERN Stack.",
          "Created an Administrator view for viewing sales, site visits, registration and customer feedback.",
          "Responsible for the creation of the company’s privacy policy, shipping, EULA and return policies.",
          "Created integrations with PayPal and Stripe to generate invoice and shipment information for users.",
        ],
        technologies: [
          "React.js",
          "Next.js",
          "Redux",
          "Axios",
          "Material-UI",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "Stripe",
          "PayPal",
          "GSAP3",
          "Git",
          "Adobe XD",
          "Vercel",
          "Vercel Edge Functions",
        ],
      },
    ],
  },
  {
    company: "REALM1000 Enterprise, PH",
    position: "Software Engineer ( Remote )",
    date: "November 2021 - July 2022",
    projects: [
      {
        name: "REALM1000 Subdistributor Site",
        description: "",
        responsibilities: [
          "Designed and developed the company’s consumer site for its first PH Venture into the telecommunications industry",
          "Enhancement of its US company’s libraries for client and server-side technologies.",
          "Responsible for the company’s SEO which in turn generated traffic of up to 10,000 visits per month.",
          "Created a Google Maps API view for showing personnel location and its area of service.",
          "Initialized company’s tech for automated mailing and messaging from clients requesting for services.",
          "Created a library for SMTP e-mail delivery and generating e-mail templates from rendered React Components which is utilized for marketing.",
        ],
        technologies: [
          "TypeScript",
          "React.js",
          "Next.js",
          "Axios",
          "Mongoose",
          "NodeMailer",
          "Google Maps",
          "Google Search Console",
          "GSAP 3",
          "Adobe XD",
          "Git",
        ],
      },
    ],
  },
  {
    company: "REALM1000 Enterprise, PH",
    position: "Lead Software Engineer / Project Manager",
    date: "August 2020 - July 2022",
    projects: [
      {
        name: "CaesarCoin Project",
        description:
          "E-Wallet implementation for accepting payments throughout the company’s Ecommerce and Services sites. ",
        responsibilities: [
          "Collaborated with software development teams and management for requirements engineering and architecture.",
          "Designed and communicated methodologies for implementing modules and technical specifications for the project.",
          "Oversaw software engineering and project management ensuring successful delivery of modules and features on time.",
          "Designed API Specifications for microservice implementation for integration with existing company services.",
          "Responsible for Integration, Development Operations and System Administration.",
          "Trained software development team for Nodejs Typescript rewrite.",
        ],
        technologies: [
          "PHP",
          "WordPress",
          "MySQL",
          "Apache",
          "Postman",
          "Nginx",
          "Ngrok",
          "Windows Server 2019 Datacenter",
          "Hyper-V",
          "Git",
        ],
      },
      {
        name: "Project Alpha",
        description:
          "Company’s first multipurpose systems for Ecommerce, Financial Technology ( FinTech ) and Multilevel Marketing, Progressive Web Application ( PWA ). ",
        responsibilities: [
          [
            "Responsible for the software architecture and development of the system ",
            [
              "Database Management",
              "Backend Engineering",
              "Frontend Engineering",
              "Development Operations",
              "UI/UX Research and Design",
            ],
          ],
          "Integrated software with external Software as a Service and company wallet service.",
          "Created and introduced frontend and backend libraries for API REST endpoints, external REST API integration, Database queries, state management, microservices through sockets, events and message brokers through Redis Pub/Sub. ",
          "Developed automation scripts and prototypes for company implementation of CI/CD through automated build tests and GitHub actions and webhooks.",
          "Utilized the use of modern DevOps services and software for scalability, availability and cost reduction.",
          "Created project progress reports and technical documentations for developers and management. ",
          "Responsible for systems architecture, operating systems environments and containers, and network infrastructure. ",
          "Responsible for semantic versioning of software with development, staging and production deployments.",
          "Created containerized environments for development, staging and production. ",
        ],
        technologies: [
          "TypeScript",
          "React",
          "Next.js",
          "NestJS",
          "Node.js",
          "Nginx",
          "PM2",
          "Windows Server 2019 Datacenter",
          "Hyper-V",
          "WSL",
          "Ubuntu",
          "Docker",
          "Microsoft Azure",
          "SQL Server 2017",
          "Redis",
          "Socket.io",
          "PWA",
          "GitHub Actions",
          "GitHub Webhooks",
        ],
      },
      {
        name: "Project Auxilium",
        description:
          "Company’s implementation of ticketing system for handling client businesses’ support tickets. ",
        responsibilities: [
          "Collaborated with management for requirements engineering and cost planning. ",
          "Gathered actual procedures and processes from different departments for user stories and use case specifications",
          "Generated class and sequence diagrams, ERD’s and Module specifications.  ",
          "Responsible for Systems Architecture, Agile Sprint planning, design and development. ",
          "Provided libraries and documentations for use of external development teams. ",
          "Mentored teams for development practices and approaches in company’s required technology stack",
          "Responsible for CI/CD, automation and deployments of systems to company servers.",
          "Created server containers and environments for development, staging and production.",
        ],
        technologies: [
          "TypeScript",
          "React",
          "Next.js",
          "NestJS",
          "Node.js",
          "Nginx",
          "PM2",
          "Windows Server 2019 Datacenter",
          "Hyper-V",
          "Ubuntu",
          "Docker",
          "SQL Server 2017",
          "PWA",
        ],
      },
      {
        name: "Project Chronos",
        description:
          "Company daily time record and timekeeping for different departments. ",
        responsibilities: [
          "Collaborated and discussed with Human Resources and Management for requirements engineering.",
          "Responsible for UI/UX Research and design",
          "Used company libraries for development and added initial GraphQL implementations to its functions.",
          "Mentored Software Developer trainees in Frontend and backend libraries and UI/UX Research and design.",
          "Created custom libraries for handling data persistence and caching and functions for simplifying queries.",
          "Used prototyping model for software engineering methodology to allocate for trainees’ contributions.",
        ],
        technologies: [
          "TypeScript",
          "React",
          "Next.js",
          "NestJS",
          "Node.js",
          "Nginx",
          "PM2",
          "Windows Server 2019 Datacenter",
          "Hyper-V",
          "Docker",
          "SQL Server 2017",
          "Apollo GraphQL",
        ],
      },
      {
        name: "Project Streams",
        description:
          "Continuation of research and development for client company’s streaming service.",
        responsibilities: [
          "Integrated external software and libraries with Nodejs instances to create desired output files in Http Live Streamable formats and lossless backup files from encrypted source",
          "Compiled scripts and created documentations for different configurations and setup for generating output video files. ",
          "Implemented Nodejs file system libraries for loading and generating movie libraries with dynamic destination or source disk or directory. ",
          "Created controls, processes and automation for extracting encrypted movie files from Optical Disk drive",
        ],
        technologies: [
          "TypeScript",
          "React",
          "Next.js",
          "NestJS",
          "Node.js",
          "Nginx",
          "PM2",
          "Windows 10 Professional",
          "Hyper-V",
          "Docker",
          "SQL Server 2017",
          "Socket.io",
          "MakeMKV",
          "FFMPEG",
          "HLS.js",
        ],
      },
      {
        name: "Project REALM1000 Network Support Website",
        description:
          "REALM1000 Network page for customer support in a client Hotel and Resort in Las Vegas, Nevada, U.S.A.",
        responsibilities: [
          "Collaborated with management for requirements engineering and software functionalities.",
          "Responsible for UI/UX Research and Design, Frontend Development.",
          "Optimized library for SMTP e-mail delivery service for mailing Customer Support Representatives, on-field staff, and management for generating support tickets.",
          "Responsible for executing code rewrite for migration from another React UI Framework.",
        ],
        technologies: [
          "TypeScript",
          "React",
          "Next.js",
          "NestJS",
          "Node.js",
          "Nginx",
          "PM2",
          "Windows Server 2019 Datacenter",
          "Hyper-V",
          "SQL Server 2019",
        ],
      },
    ],
  },
  // {
  // position: "Web Developer",
  // company: "Independent Contractor",
  // date: "2018 - Present",
  // projects: [{}],
  // },
].reverse() as TimelineEntry[];

export default timelineEntries;
