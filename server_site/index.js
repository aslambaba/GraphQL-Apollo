const { ApolloServer, gql } = require('apollo-server');

const Customers = [
    {
        "Name": 'Ted Ford',
        "Product": 'IPhone X',
        "Country": 'USA',
    },
    {
        "Name": 'Aslam',
        "Product": 'IPhone 5',
        "Country": 'Pakistan',
    },
    {
        "Name": 'Rimi',
        "Product": 'IPhone 8',
        "Country": 'UK',
    },
];
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
      Customers: () => Customers,
  },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});