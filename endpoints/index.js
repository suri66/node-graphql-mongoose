const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const movieType = require('./movie/movie.typeDefs');
const actorType = require('./actor/actor.typeDefs');
const movieResolver = require('./movie/movie.resolver');
const actorResolver = require('./actor/actor.resolver');

const types = [
  movieType,
  actorType,
];

const resolvers = [
  movieResolver,
  actorResolver,
];

module.exports = {
  typeDefs:  mergeTypeDefs(types),
  resolvers: mergeResolvers(resolvers)
};