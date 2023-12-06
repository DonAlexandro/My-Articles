export default {
  routes: [
    {
      method: 'GET',
      path: '/export',
      handler: 'export.exportData',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
