const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/bollywood';

const connect = () => {
  try {
    mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Successfully connected
    mongoose.connection.on('connected', function () {
      console.log('db connected to', dbURI);
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (err) {
      console.log('Mongoose default connection error: ' + err);
    });

    // Connection is disconnected
    mongoose.connection.on('disconnected', function () {
      console.log('Mongoose default connection disconnected');
    });

    // Mongoose connection gracefully shutdown
    process.on('SIGINT', function () {
      mongoose.connection.close(function () {
        console.log(
          'Mongoose default connection disconnected through app termination'
        );
        process.exit(0);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connect: connect,
};
