const express=require('express')
const bodyParser=require('body-parser')
const{MongoClient}=require('mongodb')

const app=express()
app.use(bodyParser.json())

const MongoUrl='mongodb://localhost:27017'

const database='expressimmo'


MongoClient.connect(MongoUrl, { useNewUrlParser: true }, (err, client) => {
    err ? console.log("can not connect to database") : (db = client.db(database))

    app.post("/postimmo", (req, res) => {
        let newimmo=req.body
    db.collection("immo").insertOne(newimmo, (err, data) => {
        if (err) res.send("cant not add list")
        else res.send(data)
})
    })

})



const port = process.env.PORT || 3070;
app.listen(port, err => {
    err ? console.log("Server is down") : console.log('Server up and runing')
})