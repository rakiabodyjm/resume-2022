export type PersonalProjects = {
  name: string
  description: string
  technologies: string[]
}
export const personalProjects: PersonalProjects[] = [
  {
    name: 'Next Page AutoPDF',
    description:
      'A Node.js function that runs a headless browser, screenshots and generates PDF format out of it, used specifically to generate this Resume',

    technologies: [
      'TypeScript',
      'Node.js',
      'Next.js',
      'Material-UI',
      'GraphQL',
      'Puppeteer',
    ],
  },
  {
    name: 'GitHub Autocommiter',
    description:
      'A simple cli-based program that generates commit messages from multiple files,  stages and pushes them to remote',
    technologies: ['TypeScript', 'Node.js', 'Git'],
  },
  {
    name: 'Rakia Axie Infinity Tracker',
    description:
      "A simple PWA for tracking account cryptocurrency earnings and statistics to be used as demonstration for guest speaker talk at Saint Mary's University",
    technologies: ['TypeScript', 'React', 'Material-UI', 'Vercel', 'PWA'],
  },
  {
    name: 'ETulod Ride Hailing App',
    description:
      'Provided mentorship, development, technologies and consultations to student researchers for a full-stack server, client and mobile app for a tricycle ride hailing service',
    technologies: [
      'React',
      'React Native',
      'Node.js',
      'Express',
      'Twilio',
      'Heroku',
      'MongoDB',
    ],
  },
  {
    name: 'E-Cart POS',
    description:
      'Provided consultations to sudent researchers for checkout and caching logic as well as database database management in an RFID based Point of Sale system',
    technologies: ['MySQL', 'VB.net'],
  },
  {
    name: 'EZ-Fit Gym Coaching Website',
    // description: 'A full stack website CMS project for IT Researchers',
    description:
      'Provided Firebase services for its GraphQL API and file storage for images and assets',
    technologies: ['Gatsby', 'GraphQL', 'Firebase', 'Firestore'],
  },
]
