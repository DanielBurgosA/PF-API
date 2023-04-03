const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const db_port = process.env.PORT || 3001;


conn.sync({ force: true }).then(() => {
  server.listen(db_port, () => {
    console.log('%s listening at '+db_port);
  });
});
