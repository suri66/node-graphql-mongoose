const Actor = require('./actor.model.js').Actor;

const resolvers = {
  Query: {
    actors: (parent, args) => {
      return Actor.find({});
    },
    actor: (parent, args) => {
      return Actor.findById(args.id);
    },
  },
  Mutation: {
    addActor: (parent, args) => {
      let ActorModel = new Actor({
        firstName: args.firstName,
        lastName: args.lastName,
        gender: args.gender,
      });
      return ActorModel.save();
    },
    updateActor: (parent, args) => {
      if (!args.id) return;
      return Actor.findOneAndUpdate(
        {
          _id: args.id,
        },
        {
          $set: {
            firstName: args.firstName,
            lastName: args.lastName,
            gender: args.gender,
          },
        },
        { new: true },
        (err, Actor) => {
          if (err) {
            console.log('Something went wrong when updating the actor');
          } else {
          }
        }
      );
    },
  },
};

module.exports = resolvers;
