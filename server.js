const express = require('express');
const app = express();
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// test
app.use(express.static('client/public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server on PORT: ${PORT}`);
});
