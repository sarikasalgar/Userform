var { graphql, buildSchema } = require('graphql');
express = require('express');
//const cors=require('cors');
var { graphqlHTTP } = require('express-graphql');


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    name:String
  }
`);

// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  hello: () => {
    return 'Hello';
  },
  name: () => {
    return 'world!';
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source: '{ hello name }',
  rootValue
}).then((response) => {
  console.log(response);
});
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: true,
}));
//app.use(cors());
//app.listen('https://studio.apollographql.com/public/SpaceX-pxxbxen/explorer?variant=current');


