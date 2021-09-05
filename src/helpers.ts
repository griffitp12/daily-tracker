export default {
  filterInfoByDay: (
    data: GraphQLDataObj[],
    date: number
  ): GraphQLDataObj => {
    const result = data.filter(
      (element: GraphQLDataObj) => element.date === date
    );
    return result[0];
  },
};
