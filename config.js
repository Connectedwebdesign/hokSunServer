const config = {
  PORT: 8080,
  db: {
    host: 'localhost:8080',
    dbName: 'hokSun',
    username: 'hokSun',
    password: 'hokSun2022',
    hasAuth: true,
    authSource: 'admin',
    authMechanism: null,
    ssl: false,
  },
  readOnlyDb: {
    host: 'localhost:8080',
    dbName: 'hokSun',
    username: 'hokSun',
    password: 'hokSun2022',
    hasAuth: true,
    authSource: 'admin',
    authMechanism: null,
    ssl: false,
  },
};

module.exports = config;
