const express = require("express")
const { ObjectID, MongoClient } = require("mongodb")
const multer = require("multer")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const MongoUrl = "mongodb://localhost:27017"
const database = "expressimmo"
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/uploads")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
})
const upload = multer({
  storage
})
app
  .use(cors())
  .use(express.static("public"))
  .post("/upload", upload.single("image"), (req, res) => {
    if (req.file)
      res.json({
        imageUrl: `images/uploads/${req.file.filename}`
      })
    else res.status("409").json("No Files to Upload.")
  })
MongoClient.connect(MongoUrl, { useNewUrlParser: true }, (err, client) => {
  err ? console.log("can not connect to database") : (db = client.db(database))
  app.post("/postimmo", (req, res) => {
    let newimmo = req.body
    db.collection("immo").insertOne(newimmo, (err, data) => {
      err ? res.send("cant not add list") : res.send(data)
    })
  })
  app.get("/getimmo", (req, res) => {
    db.collection("immo")
      .find()
      .toArray((err, data) => {
        if (err) res.send("can not get list")
        else res.send(data)
      })
  })
  app.get("/getimmofront", (req, res) => {
    db.collection("immo")
      .find({ desactiver: 0 })
      .toArray((err, data) => {
        if (err) res.send("can not get list")
        else res.send(data)
      })
  })




// app.get("/getimmofrontsearch", (req, res) => {
//   let keyword = req.query.keyword
//   console.log(keyword)
//   db.collection("immo")
//     .find({title : new RegExp(keyword)  }, { sort: 'title'})
//     .toArray((err, data) => {
//       if (err) res.send("can not get list")
//       else res.send(data)
//     })
// })




 


  app.get("/getimmoavant", (req, res) => {
    db.collection("immo")
      .find({ enavant: 1 })
      .toArray((err, data) => {
        if (err) res.send("can not get list")
        else res.send(data)
      })
  })
  app.delete("/deleteimmo/:id", (req, res) => {
    let id = ObjectID(req.params.id)
    db.collection("immo").findOneAndDelete({ _id: id }, (err, data) => {
      if (err) res.send("can not delete immobilier")
      else res.send(data)
    })
  })
  app.delete("/deleteimmo/:id", (req, res) => {
    let id = ObjectID(req.params.id)
    db.collection("immo").findOneAndDelete({ _id: id }, (err, data) => {
      if (err) res.send("can not delete immobilier")
      else res.send(data)
    })
  }) 
  //edit immobilier
  app.put("/edit_immo/:id", (req, res) => {
    let id = ObjectID(req.params.id)
    let updated = req.body
    db.collection("immo").findOneAndUpdate(
      { _id: id },
      { $set: { ...updated } },
      (err, data) => {
        if (err) res.send("can not edit the immobilier")
        else res.send(data)
      }
    )
  })

 

 


    //Actualite
  //add actualite
  app.post("/postactu", (req, res) => {
    let newactu = req.body
    db.collection("actu").insertOne(newactu, (err, data) => {
      err ? res.send("cant not add list") : res.send(data)
    })
  })
  app.get("/getactu", (req, res) => {
    db.collection("actu")
      .find()
      .toArray((err, data) => {
        if (err) res.send("can not get list")
        else res.send(data)
      })
  })
  //remove actualite
  app.delete("/deleteactu/:id", (req, res) => {
    let id = ObjectID(req.params.id)
    db.collection("actu").findOneAndDelete({ _id: id }, (err, data) => {
      if (err) res.send("can not delete actualite")
      else res.send(data)
    })
  })
  //Edit actualite
  app.put("/editactu/:id", (req, res) => {
    let id = ObjectID(req.params.id)
    let updated = req.body
    db.collection("actu").findOneAndUpdate(
      { _id: id },
      { $set: { ...updated } },
      (err, data) => {
        if (err) res.send("can not edit the actualite")
        else res.send(data)
      }
    )
  })
  //get reservation
  app.get("/getreservation/:id", (req, res) => {
    let id = ObjectID(req.params.id)
    db.collection("immo")
      .find({ _id: id })
      .toArray((err, data) => {
        if (err) res.send("can not get item")
        else res.send(data)
        console.log(data)
      })
  })
  //get detail article
  app.get("/getdetailactualite/:id", (req, res) => {
    let id = ObjectID(req.params.id)
    db.collection("actu")
      .find({ _id: id })
      .toArray((err, data) => {
        if (err) res.send("can not get article")
        else res.send(data)
        console.log(data)
      })
  })
  app.post("/postavis", (req, res) => {
    let newavis = req.body
    db.collection("avis").insertOne(newavis, (err, data) => {
      err ? res.send("cant not add list") : res.send(data)
    })
  })
  app.get("/getavis", (req, res) => {
    db.collection("avis")
      .find({ enattente: 0 })
      .toArray((err, data) => {
        if (err) res.send("can not get list")
        else res.send(data)
      })
  })
  app.put("/isactive/:id/:desactiver", (req, res) => {
    let id = ObjectID(req.params.id)
    let desactiver = req.params.desactiver
    let x
    desactiver == 0 ? (value = 1) : (value = 0)
    db.collection("immo").findOneAndUpdate(
      { _id: id },
      { $set: { desactiver: value } },
      (err, data) => {
        err ? res.send("can not edit the contacts") : res.send(data)
      }
    )
  })


  app.get("/getavisenattente", (req, res) => {
    db.collection("avis")
      .find({ enattente: 1 })
      .toArray((err, data) => {
        if (err) res.send("can not get avis")
        else res.send(data)
      })
  })


  app.put("/isactiveavis/:id/:enattente", (req, res) => {
    let id = ObjectID(req.params.id)
    let enattente = req.params.enattente
    let x
    enattente == 1? (value = 0) : (value = 1)
    db.collection("avis").findOneAndUpdate(
      { _id: id },
      { $set: { enattente: value } },
      (err, data) => {
        err ? res.send("can not active avis") : res.send(data)
      }
    )
  })

  app.get("/getavisvalid", (req, res) => {
    db.collection("avis")
      .find({ enattente: 0 })
      .toArray((err, data) => {
        if (err) res.send("can not get avis")
        else res.send(data)
      })
  })

  app.put("/enattenteavis/:id/:enattente", (req, res) => {
    let id = ObjectID(req.params.id)
    let enattente = req.params.enattente
    let x
    enattente == 0? (value = 1) : (value = 0)
    db.collection("avis").findOneAndUpdate(
      { _id: id },
      { $set: { enattente: value } },
      (err, data) => {
        err ? res.send("can not put on hold") : res.send(data)
      }
    )
  })

  //contact send

  app.post("/postcontact", (req, res) => {
    let newcontact = req.body
    db.collection("contact").insertOne(newcontact, (err, data) => {
      err ? res.send("cant not send contact") : res.send(data)
    })
  })

  //get contact

  app.get("/getcontact", (req, res) => {
    db.collection("contact")
      .find()
      .toArray((err, data) => {
        if (err) res.send("can not get list")
        else res.send(data)
      })
  })

// remove contact

app.delete("/deletecontact/:id", (req, res) => {
  let id = ObjectID(req.params.id)
  db.collection("contact").findOneAndDelete({ _id: id }, (err, data) => {
    if (err) res.send("can not delete contact")
    else res.send(data)
  })
})

// add users

app.post("/postusers", (req, res) => {
  let newuser = req.body
  db.collection("users").insertOne(newuser, (err, data) => {
    err ? res.send("cant not register") : res.send(data)
  })
})

// get users
app.get("/getusers", (req, res) => {
  db.collection("users")
    .find()
    .toArray((err, data) => {
      if (err) res.send("can not get user list")
      else res.send(data)
    })
})


//delete users
app.delete("/deleteuser/:id", (req, res) => {
  let id = ObjectID(req.params.id)
  db.collection("users").findOneAndDelete({ _id: id }, (err, data) => {
    if (err) res.send("can not delete user")
    else res.send(data)
  })
})


//search immobilier




app.get("/searchimmo/:type", (req, res) => {
  let type = req.params.type

  db.collection("immo")
    .find({type_immobilier: type }
     )
    .toArray((err, data) => {
      if (err) res.send("can not get user list")
      else res.send(data)
    })
})





























})
const port = process.env.PORT || 3070
app.listen(port, err => {
  err ? console.log("Server is down") : console.log("Server up and runing")
})
