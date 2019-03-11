const express=require('express')
const bodyParser=require('body-parser')
const{ObjectID,MongoClient}=require('mongodb')

const app=express()
app.use(bodyParser.json())

const MongoUrl='mongodb://localhost:27017'

const database='expressimmo'


MongoClient.connect(MongoUrl,{useNewUrlParser:true},(err,client)=>{
   err ? console.log('Eroor while connecting to server') :   db = client.db(database)

app.post('/postimmo',(req,res) =>
{
    db.collection('all_immobilier').insertOne('abc:dfgdfg') , (err, data) => {
        if (err) res.send("cant not add list")
else res.send("data added")
}
}
)

})



const port = process.env.PORT || 3070;
app.listen(port, err => {
    err ? console.log("Server is down") : console.log('Server up and runing')
})