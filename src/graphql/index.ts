import { usersResolver } from './resolvers/user.resolver';

export const typeDefs = `
     type Book {
        _id: String
        author: String
        title: String
        year: String
    }

    input BookInput {
        author: String
        title: String
        year: String
    }

    type Query {
        getBook(ID: ID!): Book
        getBooks(limit: Int): [Book]!
    }

    type Mutation {
        createBook(bookInput: BookInput): String!
        updateBook(ID: ID!, bookInput: BookInput): String!
    }
`;

export const resolvers = {
  Query: {
    ...usersResolver.Query
  },
  Mutation: {
    ...usersResolver.Mutation
  }
};
