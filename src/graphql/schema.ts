import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    timelines: [TimelineEntry]
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
`;
