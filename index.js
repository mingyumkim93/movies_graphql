const  GraphQLServer = require("graphql-yoga"); 
const resolvers = require ("./graphql/resolver");

const server = new GraphQLServer({
    typeDefs: `type Movie {
      id: Int!
      title: String!
      rating: Float
      description_intro: String
      language: String
      medium_cover_image: String
      genres: [String]
    }
    
    type Query {
      movies(limit: Int, rating: Float): [Movie]!
      movie(id: Int!): Movie
      suggestions(id: Int!): [Movie]!
    }
    `,
    resolvers
  });

server.start(process.env.PORT, ()=> console.log("Graphql Server Running"))