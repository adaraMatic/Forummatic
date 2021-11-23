const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");

/**
 * @description: Initializing express
 */
 const app = express();
 const PORT = 3000;

 /**
 * Middleware
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
/**
 * @description: Importing routes
 */

 let formRouter = require("./routes/email_router");
 app.use("/", formRouter);
 app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname+'/views/index.html'));
});
app.get('/wallet', (req,res) => {
  res.sendFile(path.join(__dirname+'/views/wallet.html'));
});

/**
 * Server
 */
app.listen(PORT, () => {
  // console.log(`Server started on port localhost:${PORT}`);
});

module.exports = app;
// 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