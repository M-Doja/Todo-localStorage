const express = require('express'),
      path = require('path'),
      port = process.env.PORT || 3000,
      bodyParser = require('body-parser'),
      app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.set('view options', { layout: false });
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.render('index');
});

app.use(function(err, req, res, next){
  if(err.err) console.log("Error: "+ err.err);
  else console.log("Error: "+ err);
  res.status(400).send(err);
});

app.listen(port, () => {
  console.log(`Now running on port ${port}`);
});
