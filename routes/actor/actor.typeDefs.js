const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Actor {
    id: ID!
    firstName: String!
    lastName: String!
    gender: String!
  }
  type Query {
    actors: [Actor]
    actor(id: ID!): Actor
  }
  type Mutation {
    addActor(firstName: String!, lastName: String!, gender: String!): Actor
    updateActor(firstName: String, lastName: String, gender: String): Actor
    deleteActor(id: ID!): Actor
  }
`;

module.exports = typeDefs;
