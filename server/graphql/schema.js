import { gql } from'apollo-server-express';

const typeDefs = gql`
  type Query {
      allSepDates: [Date]
      getInfoByDate: Date
  }

  type Date {
      date: Int!
      pushups: Int
      situps: Int
      run: Boolean
      alcohol: Boolean
  }

  type Mutation {
     addDate(date: Int): String
     updatePushups(date: Int, pushups: Int): String
     updateSitups(date: Int, situps: Int): String
     updateRun(date: Int, run: Boolean): String
     updateAlcohol(date: Int, alcohol: Boolean): String
  }
`;

export default typeDefs