const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

const listener = app.listen(process.env.PORT || 8000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
