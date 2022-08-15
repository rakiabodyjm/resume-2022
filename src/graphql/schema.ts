import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  scalar ProfileSummary
  type Query {
    timelines: [TimelineEntry]
    skills: Techstacks
    profile: Profile
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
    responsibilities: [String]
    technologies: [String]
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

  type GenericInformation {
    title: String
    description: String
    icon: String
  }
`;
