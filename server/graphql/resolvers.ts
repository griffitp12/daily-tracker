import db from '../knex/knex.js';

const resolvers = {
  Query: {
    getAllInfo: () => {
      return db
        .select('*')
        .from('september')
        .then((data: any) => {
          return data;
        });
    },

    getInfoByDate: (parent: never, args: any): Promise<any[]> => {
      return db
        .select('*')
        .from('september')
        .where('date', args.date)
        .then((data: any) => {
          return data;
        });
    },
  },

  Mutation: {
    addDate: (parent: never, args: any): Promise<string> => {
      return db('september')
        .insert({ date: args.date })
        .then(() => {
          return `September ${args.date}th added to DB!`;
        });
    },

    updateData: (parent: never, args: any) => {
      return db
        .select('*')
        .from('september')
        .where('date', args.date)
        .update({
          pushups: args.pushups,
          situps: args.situps,
          run: args.run,
          alcohol: args.alcohol,
        })
        .then(() => {
          return `September ${args.date} data updated`
        });
    },
  },
};

export default resolvers;
