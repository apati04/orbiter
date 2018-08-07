const axios = require('axios');

module.exports = app => {
  app.get('/test', (req, res) => {
    res.send('test');
  });
  
  app.get('/api/users', async (req, res) => {
    const request = await axios.get('https://orbiter-db.firebaseio.com/users.json');
    const { data } = request;
    res.send(data);
  });
};
