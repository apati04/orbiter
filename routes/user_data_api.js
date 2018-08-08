const axios = require('axios');

module.exports = app => {
  app.get('/api/users', async (req, res) => {
    //change the firebase url to process.env
    const request = await axios.get('https://orbiter-db.firebaseio.com/users.json');
    const { data } = request;
    res.send(data);
  });

  app.post('/api/users', async (req, res) => {
    const request = await axios.post('https://orbiter-db.firebaseio.com/users.json', req.body);
    const { data } = request;
    res.send(data);
  });
};
