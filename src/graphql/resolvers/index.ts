import getTimelines from "src/graphql/resolvers/timeline";

const resolvers = {
  Query: {
    timelines: getTimelines,
  },
};
export default resolvers;
