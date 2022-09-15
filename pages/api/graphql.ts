import { ApolloServer } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'
import resolvers from 'src/graphql/resolvers'
import { typeDefs } from 'src/graphql/schema'
// import Cors from "micro-cors";
import Cors from 'cors'

const cors = Cors()

const apolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
})
const startServer = apolloServer.start()

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
    await startServer
    const handler = apolloServer.createHandler({
      path: '/api/graphql',
    })
    cors(req, res, (result: any) => {
      if (result instanceof Error) {
        // throw result;
        res.status(500).send(result)
      }
      if (req.method === 'OPTIONS') {
        res.status(200).send('ok')
      }
    })
    handler(req, res)
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}
