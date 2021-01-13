const Movie = require('./movie.model.js').Movie;

const resolvers = {
  Query: {
    movies: (parent, args) => {
      return Movie.find({});
    },
    movie: (parent, args) => {
      return Movie.findById(args.id);
    },
  },
  Mutation: {
    addMovie: (parent, args) => {
      let MovieModel = new Movie({
        name: args.name,
        producer: args.producer,
        rating: args.rating,
      });
      return MovieModel.save();
    },
    updateMovie: (parent, args) => {
      if (!args.id) return;
      return Movie.findOneAndUpdate(
        {
          _id: args.id,
        },
        {
          $set: {
            name: args.name,
            producer: args.producer,
            rating: args.rating,
          },
        },
        { new: true },
        (err, Movie) => {
          if (err) {
            console.log('Something went wrong when updating the movie');
          } else {
          }
        }
      );
    },
  },
};

module.exports = resolvers;
