import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import resolvers from "src/graphql/resolvers";
import { typeDefs } from "src/graphql/schema";
// import Cors from "micro-cors";
import Cors from "cors";

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const startServer = apolloServer.start();

// export default cors(async function handler(req, res) {
//   await startServer;

//   await apolloServer.createHandler({
//     path: "/api/graphql",
//   })(req, res);
// });
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await startServer;
    cors(req, res, (result: any) => {
      if (result instanceof Error) {
        throw result;
      }
    });
    apolloServer.createHandler({
      path: "/api/graphql",
    })(req, res);
  } catch (err) {
    res.status(500).send(err);
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
