const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const graphQLSchema = require('./graphql/schema');
const graphQLresolvers = require('./graphql/resolvers');

const app = express();

app.use('/graphql' ,  graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQLresolvers,
    graphiql: true,
  }),
);


app.listen(3000 , () => {
    console.log("Server is running on port 3000")
})