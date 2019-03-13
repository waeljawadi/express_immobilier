const express = require("express")
const bodyParser = require("body-parser")
const { MongoClient } = require("mongodb")

const multer = require('multer');

const cors = require('cors');



const app = express()
app.use(bodyParser.json())
const MongoUrl = "mongodb://localhost:27017"
const database = "expressimmo"









var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
const upload = multer({
  storage
})





















app.use(cors()).use(express.static('public')).post('/upload', upload.single('image'), (req, res) => {
  if (req.file)
    res.json({
      imageUrl: `images/uploads/${req.file.filename}`
    });
  else
    res.status("409").json("No Files to Upload.");
});








MongoClient.connect(MongoUrl, { useNewUrlParser: true }, (err, client) => {
  err ? console.log("can not connect to database") : (db = client.db(database))




  app.post("/postimmo", (req, res) => {
    let newimmo = req.body
    db.collection("immo").insertOne(newimmo, (err, data) => {
      err ? res.send("cant not add list") : res.send(data)
    })
  })





})













const port = process.env.PORT || 3070
app.listen(port, err => {
  err ? console.log("Server is down") : console.log("Server up and runing")
})
