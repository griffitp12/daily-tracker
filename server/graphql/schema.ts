import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Date {
    date: Int!
    pushups: Int
    situps: Int
    run: Boolean
    alcohol: Boolean
  }

  type Query {
    getAllInfo: [Date]
    getInfoByDate(date: Int): Date
  }

  type Mutation {
    addDate(date: Int): String
    updateData(
      date: Int
      pushups: Int
      situps: Int
      run: Boolean
      alcohol: Boolean
    ): String
  }
`;

export default typeDefs;
