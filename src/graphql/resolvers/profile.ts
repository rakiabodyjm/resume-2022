export type GenericInformation = {
  title: string
  description: string
  iconString: string
}
export type PersonalInformation = {
  name: string
  summary: (string | string[])[] | string
  title: string
  genericData: GenericInformation[]
  profiles: GenericInformation[]
}

const personalInformation: PersonalInformation = {
  name: 'Janeo Miguel Tiongson',
  title: 'Lead Software Engineer',
  // summary: [
  //   "Passionate and process driven Software Engineer, committed to balance between Developer and Customer Experience. I'm highly active in Development Communities to keep myself up to date to new innovations and technology releases. I make useful libraries as a hobby and ",
  //   "With hands-on experience in Software Engineering and Project Management, Development Operations, Database Management and Software Architecture. With notable projects in:",
  //   [
  //     "Enterprise level Financial Technology Systems ( E-Wallet, Multilevel Marketing, Payment Processing and Analytics )",
  //     "Movie Streaming System ( Movie and TV Shows Database and File Servers, Movie Transmuxing and Transcoding, Streaming with Adaptive Http Live Streaming and some other prototypes )",
  //     "Open Source Projects ( React Page Mailer, NFT Blockchain Game Monitoring App, GitHub Autocommit )",
  //     "Boilerplate Repositories and Utility Libraries for Web Client and Server Frameworks",
  //   ],
  // ],
  summary: [
    'Passionate, meticulous and process-driven Software Engineer with 5 years of progressive experience in modern web and server technologies across diverse industries.',
    'Equipped with backgrounds in System Administration, Frontend and Backend Engineering, Database Management and Design, Software Architecture, Development Operations and Project Management.',
    'Quickly learns, masters and introduces new innovations and technologies to provide better solutions to technical challenges.',
    'Engages in development communities and provides insights, mentoring and training to others.',
  ],
  // hobbies: ["Coding", "Drone Pilot"],
  genericData: [
    {
      title: 'Email',
      description: 'rakiabodyjm@gmail.com',
      iconString: 'Email',
    },
    {
      title: 'Phone',
      description: '+63 949 846 0475',
      iconString: 'SmartphoneOutlined',
    },
    {
      title: 'Location',
      description: 'Quezon City, PH',
      iconString: 'LocationOn',
    },
  ],
  profiles: [
    {
      title: 'GitHub',
      description: 'github.com/rakiabodyjm',
      iconString: 'GitHub',
    },
    {
      title: 'LinkedIn',
      description: 'linkedin.com/in/janeomigueltiongson',
      iconString: 'LinkedIn',
    },
  ],
}

export function getProfile(): PersonalInformation {
  return personalInformation
}
