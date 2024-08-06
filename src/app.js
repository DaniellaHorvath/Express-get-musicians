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
})






module.exports = app;