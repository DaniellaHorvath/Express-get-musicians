const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get("/musicians", async (req, res) => {
    const musicians = await Musician.findAll();
    // res.status(200).send('OK');
    res.json(musicians);
})


app.get("/bands", async (req, res) => {
    const bands = await Band.findAll();
    // res.status(200).send('OK');
    res.json(bands);
})

// CREATE -GET (Part-2)

app.get("/musicians/:id", async (req, res) => {
    const musicians = await Musician.findByPk(req.params.id);

    if(musicians){
        res.json(musicians)
    }else{
        res.status(404).json({ error: "Musicians not found!"})
    }
});

// GET, POST, PUT, DELETE (Part-3)
//CREATE -USE
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.post("/musicians", async (req, res) => {
    const newMusicians = await Musician.create(req.body);

    if(!newMusicians){
        res.status(404).json({ error: "Missing Musician!"});
        return
    }
    res.status(201).json(newMusicians);
});

// UPDATE - PUT/PATCH
add.put("/musicians/:id", async (req, res) => {
    const updateMus = await Musician.findByPk(req.params.id);

    if(!updateMus){
        res.status(404).json({ error: 'Musician not updated!'})
        return
    }

    await Musician.update(req.body);
    res.status(200).json(updateMus);
})




module.exports = app;