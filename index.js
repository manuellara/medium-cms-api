const express = require("express");
var Feed = require("rss-to-json");
var cors = require('cors')
const app = express();

// allows us to receive json data from client
app.use(express.json({ limit: "1mb" }));

// Cross Origin Resourse Sharing options 
app.use(cors({
    // option to allow which domains through
    // origin: 'https://manuellara.com'
}));

// api routes
app.post("/api/rsstojson", (req, res) => {

  const username = req.body.username

  // function to convert RSS to JSON
  Feed.load(`https://medium.com/feed/@${username}`).then((rss) => {
    // returns result as object
    res.send(rss);
  })
  .catch(err => {
      res.send("There was an error with the request")
  });

});

// app listening 
app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});
