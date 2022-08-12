import { Config } from 'apollo-server-micro'
import { getCertificates } from 'src/graphql/resolvers/certificates'
import { getDegrees } from 'src/graphql/resolvers/degrees'
import { getPersonalProjects } from 'src/graphql/resolvers/personal-project'
import { getProfile, PersonalInformation } from 'src/graphql/resolvers/profile'
import { getRefinedSkills, getSkills } from 'src/graphql/resolvers/skill'
import { getTimelines } from 'src/graphql/resolvers/timeline'

const resolvers: Config<any>['resolvers'] = {
  Query: {
    timelines: getTimelines,
    skills: getSkills,
    profile: getProfile,
    skillsv2: getRefinedSkills,
    personal_projects: getPersonalProjects,
    certificates: getCertificates,
    degrees: getDegrees,
  },
  ProfileSummary: {
    name: 'ProfileSummary',
    description: 'Profile Summary with list',
    serialize(value: PersonalInformation['summary']) {
      return JSON.stringify(value as string)
    },
    parseValue(value: string) {
      return JSON.parse(value)
    },
    parseLiteral(ast: string) {
      return JSON.parse(ast as string)
    },
  },
}

export default resolvers
