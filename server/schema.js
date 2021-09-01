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
     updatePushups(date: Int, pushups: any): String
     updateSitups(date: Int, pushups: any): String
     updateRun(date: Int, pushups: any): String
     updateAlcohol(date: Int, pushups: any): String
  }
`;

export default typeDefs