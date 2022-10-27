const routes = require('./controllers');

module.exports = (app) => {
  app.use('/api/', routes);
};
