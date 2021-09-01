import db from './knex';

const resolvers = {
  Query: {
    getInfoByDate: (_, args) => {
      return db
        .select('*')
        .from('september')
        .where('date', args.date)
        .then((data) => {
            return data
        })
    },
  },
  Mutation: {
      addDate: (_, args) => {
          return db('september')
            .insert({date: args.date})
            .then(() => { return `September ${args.date}th added to DB!`})
      }
  }
};

export default resolvers