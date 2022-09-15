const technologies = [
  'TypeScript',
  'JavaScript',
  'Node.js',
  'React',
  'React Native',
  'Vue',
  'Express',
  'Next.js',
  'NestJS',
  'Webpack',
  'Gatsby',
  'jQuery',
  'PHP',
  'Laravel',
  // 'WordPress',
  // 'C#',
  // 'ASP.net MVC',
  // 'Entity Framework',
  // 'C++',
  // 'Java',
  // 'VB.net',
]

const ormLibraries = [
  'TypeORM',
  'Mongoose',
  'Firebase SDK',
  'Eloquent',
  'Sequelize',
]

// const frontendLibraries = ["Axios", "Apollo GraphQL", "Socket.io"];
const uiLibraries = [
  'Material-UI',
  'Tailwind CSS',
  'PostCSS',
  'AntDesign',
  'Sass',
  'Styled Components',
  'Theme UI',
  'Framer Motion',
  'GSAP 3',
  'Bootstrap',
]

const dataLib = [
  'Axios',
  'Redux',
  'SWR',
  'React Query',
  'Formik',
  'React Hook Form',
]

const microServices = [
  'Redis Pub/Sub',
  'RxJs',
  'Socket.io',
  'GraphQL',
  'REST API',
]

const saas = [
  'Google Maps',
  'PayPal',
  'Stripe',
  'Paymongo',
  'DragonPay',
  'TMDB',
  'IMDB',
  'RapidAPI',
  'Twilio',
  'Google Search',
  'Google Analytics',
]

const dbms = [
  'Microsft SQL Server',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'Firestore',
  'Firebase Realtime Database',
]

const authStrategies = ['JWT', 'Passport', 'OAuth', 'OAuth2']

const testingLibraries = ['Jest', 'Supertest']

const otherNodeLibraries = ['Multer', 'NodeMailer', 'HLS.js', 'Puppeteer']

const otherLibraries = ['FFMPEG', 'MakeMKV', 'VLC Open Library']

const tools = [
  'ESLint',
  'Prettier',
  'Git',
  'Postman',
  'Visual Studio Code',
  'GitLab',
  'GitHub',
  'GitHub Actions',
  'GitHub Webhooks',
  'Trello',
  'Jira',
  'Lighthouse',
  'PWA',
]

const environments = [
  'Docker',
  'Windows Server 2019',
  'Hyper-V',
  'Ubuntu Server',
  'Red Hat Enterprise',
  'Microsoft Azure',
  'Firebase',
  'Heroku',
  'Vercel',
  // "AWS",
]

const webServers = ['Nginx', 'IIS', 'Apache']

const processes = [
  // "Waterfall",
  'Agile',
  'Scrum',
  'Kanban',
  'Test-Driven Development',
  'Feature-Driven Development',
]

const techStacks = [
  technologies,
  ormLibraries,
  uiLibraries,
  dataLib,
  microServices,
  saas,
  dbms,
  authStrategies,
  testingLibraries,
  otherNodeLibraries,
  tools,
  environments,
  webServers,
  otherLibraries,
  processes,
]

export const techStacksCategorized = {
  technologies,
  ormLibraries,
  uiLibraries,
  dataLib,
  microServices,
  saas,
  dbms,
  authStrategies,
  testingLibraries,
  otherNodeLibraries,
  tools,
  environments,
  webServers,
  otherLibraries,
  processes,
}

export default techStacks

export const techStackYears = {
  JavaScript: 4, //approaching 5
  TypeScript: 3, //approaching 4
  React: 4, //approaching 4
  jQuery: 1,
  'Node.js': 4,
  Express: 4,
  'Next.js': 3,
  NestJS: 2,
  Redux: 4,
  Laravel: 2,
  'SQL Server': 2,
  Docker: 2,
  Redis: 1,
  'Socket.IO': 1,
  MongoDB: 2,
  'Material-UI': 3,
}
