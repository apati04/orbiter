const axios = require('axios');

module.exports = app => {
  app.get('/api/users', async (req, res) => {
    const request = await axios.get('https://orbiter-db.firebaseio.com/users.json');
    const { data } = request;
    res.send(data);
  });

  app.get('/api/add/users', async (req, res) => {
    console.log(req.query.values);
    // const request = await axios.post('https://orbiter-db.firebaseio.com/users.json', req.query.values);
    // console.log(req.query);
    // const { data } = request;
    // res.send(data);
  });
};
