module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
};
