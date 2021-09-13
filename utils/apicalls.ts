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
          return;
        } else {
          console.log(data.data.data.addDate);
        }
      });
    } catch (err) {
      throw new Error(err as string);
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
      throw new Error(err as string);
    }
  },

  allInfo: async function(): Promise<GraphQLDataObj[]> {
    return axios({
      method: 'POST',
      url: '/graphql',
      data: {
        query: `
            {
            allInfo {
              date
              pushups
              situps
              alcohol
              run
            }
            }`,
      },
    }).then((data) => {
      // chain .then to check for each data object. Maybe if axios has a way to make this cleaner?
      const allInfo = data.data.data.allInfo
      return allInfo
    });
  },

  // this isn't working. WHY???
  /* getDataByDate: async function(date: number) {
    try {
      await axios({
        method: 'POST',
        url: '/graphql',
        data: {
          query: `
            {
              infoByDate(date: ${date}){
                pushups
                situps
                run
                alcohol
              }
            }
          `,
        },
      }).then((data) => {
        console.log(data)
      });
    } catch (err) {
      throw new Error(err)
    }
  }, */

  getDataByDateInefficiently: async function(
    date: number
  ): Promise<GraphQLDataObj> {
    return axios({
      method: 'POST',
      url: '/graphql',
      data: {
        query: `{
            allInfo {
              date
              pushups
              situps
              alcohol
              run
            }
          }
          `,
      },
    }).then((data) => {
      const filteredData: GraphQLDataObj[] = data.data.data.allInfo.filter(
        (data: GraphQLDataObj) => data.date === date
      );
      return filteredData[0];
    });
  },
};
