const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const CustomerModel = require('./models/customers.model');
const Customer = require('./models/customers.model');

let CustomerRecord = Customer.find();
const saveDami = new Customer({
  Name: "Aslam Baba",
  Product: "Iphone 12",
  Country: "Pakistan",
});
saveDami.save().then(console.log('Domi Data Save'));
const typeDefs = gql`
  
  type Customer {
    Name: String
    Product: String
    Country: String
  }
  
  type Query {
    Customers: [Customer]
  }
`;

const resolvers = {
  Query: {
      Customers: () => CustomerRecord,
  },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

mongoose.connect('mongodb://localhost:27017/GraphQLAppollo', {useNewUrlParser: true, useUnifiedTopology: true}).then(
  console.log('MongoDb Connected !!')
);