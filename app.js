const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://adrp6:abcdefgh@cluster0.hvhqt.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connexion à MongoDB fait'))
    .catch(() => console.log('connexion à MongoDB fail'));

app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
    next();
});

app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
});



module.exports = app;