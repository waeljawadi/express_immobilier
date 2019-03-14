
const express=require('express')

const{ObjectID,MongoClient}=require('mongodb')

const app=express()


const bodyParser = require("body-parser")


app.use(bodyParser.json())
const MongoUrl = "mongodb://localhost:27017"
const database = "expressimmo"
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
  
  

 

})


const port = process.env.PORT || 3070
app.listen(port, err => {
  err ? console.log("Server is down") : console.log("Server up and runing")
})
