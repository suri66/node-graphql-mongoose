const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Movie {
    id: ID!
    name: String!
    producer: String!
    rating: Float!
  }
  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }
  type Mutation {
    addMovie(name: String!, producer: String!, rating: Float!): Movie
    updateMovie(name: String, producer: String, rating: Float): Movie
    deleteMovie(id: ID!): Movie
  }
`;

module.exports = typeDefs;
