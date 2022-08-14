import { Config } from "apollo-server-micro";
import { GraphQLScalarType } from "graphql";
import { getProfile } from "src/graphql/resolvers/profile";
import { getSkills } from "src/graphql/resolvers/skill";
import { getTimelines } from "src/graphql/resolvers/timeline";

const resolvers: Config<any>["resolvers"] = {
  Query: {
    timelines: getTimelines,
    skills: getSkills,
    profile: getProfile,
  },
  ProfileSummary: {
    name: "ProfileSummary",
    description: "Profile Summary with list",
    serialize(value) {
      console.log("valueSerialize", value);
      // return (value as string)?.toString();
      return JSON.stringify(value as string);
    },
    parseValue(value) {
      console.log("parseValue", value);

      return JSON.stringify(value as string);
    },
    parseLiteral(ast) {
      console.log("parseLiteral", ast);
      return JSON.parse(ast as string);
    },
  },
};

export default resolvers;
