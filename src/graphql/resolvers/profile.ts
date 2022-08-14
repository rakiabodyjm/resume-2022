export type GenericInformation = {
  title: string;
  description: string;
  iconString: string;
};
export type PersonalInformation = {
  name: string;
  summary: (string | string[])[];
  title: string;
  genericData: GenericInformation[];
  profiles: GenericInformation[];
};

const personalInformation: PersonalInformation = {
  name: "Janeo Miguel Tiongson",
  title: "Lead Software Engineer",
  summary: [
    "Passionate and progress driven Software Engineer, committed to balance between Developer and Customer Experience, highly active in Development Communities like React.js PH and Next.js and always keeps up to date to new innovations and technology releases",
    "With hands-on experience in Software Engineering and Project Management, Development Operations, Database Management and Software Architecture. With notable projects in:",
    [
      "Enterprise level Financial Technology Systems ( E-Wallet, Multilevel Marketing, Payment Processing and Analytics )",
      "Movie Streaming System ( Movie and TV Shows Database and File Servers, Movie Transmuxing and Transcoding, Streaming with Adaptive Http Live Streaming and some other prototypes )",
      "Open Source Projects ( E-Mail Marketing Mailer, Blockchain Game Monitoring App )",
      "Boilerplate Repositories and Utility Libraries for Web Client and Server Frameworks",
    ],
  ],

  genericData: [
    {
      title: "Email",
      description: "rakiabodyjm@gmail.com",
      iconString: "AlternateEmail",
    },
    {
      title: "Phone Number",
      description: "+63 949 846 0475",
      iconString: "SmartphoneOutlined",
    },
    {
      title: "Location",
      description: "Quezon City, PH",
      iconString: "LocationOnOutlined",
    },
  ],
  profiles: [
    {
      title: "GitHub",
      description: "github.com/rakiabodyjm",
      iconString: "github",
    },
    {
      title: "LinkedIn",
      description: "linkedin.com/in/janeomigueltiongson",
      iconString: "linkedin",
    },
  ],
};

export function getProfile(): PersonalInformation {
  return personalInformation;
}
