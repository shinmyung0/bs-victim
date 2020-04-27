let express = require('express');
let app = express();

// customize your CSP here
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
  return next();
});

// Image & static HTML
app.use(express.static(__dirname + '/static'));

// Sample API for testing
app.get("/sample_api", (req, res) => {
  res.status(200).send({sample: "this is a sample api"});
});

app.listen(process.env.PORT || 3000);
