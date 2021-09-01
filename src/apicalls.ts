import axios from 'axios';

interface GraphQLDataObj {
  date: number;
  pushups: number;
  situps: number;
  alcohol: boolean;
  run: boolean;
}

export default {};
const addDate = async function(data: GraphQLDataObj) {
  await axios({
    method: 'POST',
    url: '/graphql',
    data: {
      query: `
          mutation{
          addDate(date: ${data.date})
          }`,
    },
  }).then((data) => {
    console.log(data);
  });
};
