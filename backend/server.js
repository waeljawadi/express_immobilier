
const express=require('express')

const{ObjectID,MongoClient}=require('mongodb')

const app=express()


const bodyParser = require("body-parser")

const multer = require('multer');

const cors = require('cors');
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


app.get('/getimmo',(req,res)=>{

    db.collection('immo').find().toArray((err,data)=>{
         if(err) res.send('can not get list') 
        else res.send(data)
    })   
    })


    app.delete('/deleteimmo/:id',(req,res)=>{
        let id=ObjectID(req.params.id)
        db.collection('immo').findOneAndDelete({_id:id},(err,data)=>{
            if (err) res.send('can not delete immobilier')
            else res.send(data)
        })
    })


    app.put('/showimmo/:id',(req,res)=>{
      let id=ObjectID(req.params.id)
  db.collection('immo').findOneAndUpdate({_id:id,desactiver:false},{$set:{desactiver:true}},(err,data)=>{
      if(err) res.send('can not edit the immo')
      else res.send (data)
  })
  })
  

  //edit immobilier
app.put('/edit_immo/:id',(req,res)=>{
  let id=ObjectID(req.params.id)
  let updated=req.body
db.collection('immo').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
  if(err) res.send('can not edit the immobilier')
  else res.send (data)
})
})












  

 

})


const port = process.env.PORT || 3070
app.listen(port, err => {
  err ? console.log("Server is down") : console.log("Server up and runing")
})
