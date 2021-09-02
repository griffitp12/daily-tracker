import axios from 'axios';

export default {
  addDate: async function(date: number) {
    try {
      await axios({
        method: 'POST',
        url: '/graphql',
        data: {
          query: `
            mutation{
            addDate(date: ${date})
            }`,
        },
      }).then((data) => {
        if (data.data.errors) {
          console.log(data.data.errors);
        } else {
          console.log(data.data.data.addDate);
        }
      });
    } catch (err) {
      throw new Error(err);
    }
  },

  updateData: async function(data: GraphQLDataObj) {
    try {
      await axios({
        method: 'POST',
        url: '/graphql',
        data: {
          query: `
            mutation{
            updateData(date: ${data.date}, pushups: ${data.pushups}, situps: ${data.situps}, run: ${data.run}, alcohol: ${data.alcohol} )
            }`,
        },
      }).then((data) => {
        console.log(data.data.data.updateData);
      });
    } catch (err) {
      throw new Error(err);
    }
  },

  getDataByDate: async function(date: number) {
    try {
      await axios({
        method: 'POST',
        url: '/graphql',
        data: {
          query: `
            {
              getInfoByDate(date: ${date})
            }
          `,
        },
      }).then((data) => {
        console.log(data)
      });
    } catch (err) {
      throw new Error(err)
    }
  }
};
