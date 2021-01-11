# node-graphql-mongoose

Using `apollo-server-express` for setting up the GraphQL Server. `Mongoose` is used for stroing the data in the database.

## Prerequisite 

>NodeJs

>MongoDB

The above should be installed in your system.


## Steps

1. `git clone https://github.com/suri66/node-graphql-mongoose.git`
2. `npm i` 
3.  `node /bin/www or nodemon`



> Now navigate to `http://localhost:3000/graphql`. You will get an graphql interface.

> Here you can perform the queries and mutation


## Example

Copy Paste below query on the left side of interface and then run it

`{
  movies {
    name
    producer
    rating
    id
  }
}`