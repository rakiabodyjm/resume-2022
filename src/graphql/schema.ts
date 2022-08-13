import { Degrees } from './../data/degrees'
import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  scalar ProfileSummary
  type Query {
    timelines: [TimelineEntry]
    skills: Techstacks
    profile: Profile
    skillsv2: RefinedTechstacks
    personal_projects: [PersonalProjects]
    certificates(type: CertType): [Certificates]
    degrees: [Degree]
  }

  enum CertType {
    CERTIFICATE
    TICKET
  }

  type Certificates {
    name: String
    date: String
    description: String
    image: String
  }

  type Profile {
    name: String
    title: String
    summary: ProfileSummary
    genericData: [GenericProfileData]
    profiles: [GenericProfileData]
  }

  type GenericProfileData {
    title: String
    description: String
    iconString: String
  }

  type ProjectEntry {
    name: String
    description: String
    responsibilities: ProfileSummary
    technologies: [String]
    summarizedResponsibilities: [String]
  }

  type TimelineEntry {
    position: String
    company: String
    date: String
    projects: [ProjectEntry]
  }

  type Techstacks {
    languages: [String]
    orm: [String]
    uiLibraries: [String]
    dataLib: [String]
    microServices: [String]
    saas: [String]
    dbms: [String]
    auth: [String]
    testing: [String]
    otherNode: [String]
    tools: [String]
    environments: [String]
    webServer: [String]
    otherLibs: [String]
  }

  type RefinedTechstacks {
    Technologies: [String]
    UI_Libraries: [String]
    Frontend_Libraries: [String]
    Backend_Libraries: [String]
    Databases: [String]
    Other_Software: [String]
    Services: [String]
    Process: [String]
    Tools: [String]
    Environments: [String]
  }

  type GenericInformation {
    title: String
    description: String
    icon: String
  }
  type PersonalProjects {
    name: String
    description: String
    technologies: [String]
  }

  type Degree {
    name: String
    date: String
  }
`
