require('dotenv').config();

const app = require('./app');
const http = require('http');
const sequelize = require('./config/db');
const seed = require('./utils/seed');

const port = process.env.PORT || 3000;
const db_port = process.env.DB_PORT;
app.set('port', port);

sequelize.authenticate()
  .then(() => {
    console.log('✅ --> Connected to MySQL');
    return sequelize.sync(); // Optionally add { force: true } to reset DB on start
  })
  .then(async () => {
    await seed();
    server.listen(port, () => {
        console.log(`🚀 --> Server running on port ${port}`);
    });
    //app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('❌ --> Failed to connect to DB:', err);
  });

const server = http.createServer(app);
// server.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });