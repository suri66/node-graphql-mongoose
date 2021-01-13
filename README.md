# node-graphql-mongoose

Using `apollo-server-express` for setting up the GraphQL Server. `Mongoose` is used for performing database operations.

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

> You can see all graphQL endpoints by clicking on Docs on the right side


## Example

Copy Paste below query on the left side of interface and then run it

### Fetch Movies

`{
  movies {
    name
    producer
    rating
    id
  }
}`

### Add Movie

`mutation {
  addMovie(
    name: "RBJ",
    producer: "YRF",
    rating: 4
  )
  {
    id
    name   
  }
}`