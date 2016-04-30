let express = require('express');
let app = express();
const PORT = 3838;

app.get('/', function(req, res) {
  res.send('<h2>Hello World</h2>');

});

app.listen(PORT, function() {
  console.log(`Listening on  http://localhost:${PORT}`);
})
