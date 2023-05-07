const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")
// afficher la liste des articles.
router.get('/', async (req, res,) => {
    try {
        const articles = await
            Movie.find();
        res.status(200).json(articles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// créer un nouvel article
router.post('/', async (req, res) => {
    const { title, description, date_creation, categorie, Image, video } = req.body;
    const nouvarticle = new Movie({
        title: title, description: description,
        date_creation: date_creation,
        categorie: categorie,
        Image: Image,
        video: video
    })
    try {
        await nouvarticle.save();
        res.status(200).json(nouvarticle);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// chercher un article
router.get('/:articleId', async (req, res) => {
    try {
        const art = await Movie.findById(req.params.articleId);
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// modifier un article
router.put('/:articleId', async (req, res) => {
    const { title, description, date_creation, categorie, Image, video } = req.body;
    const id = req.params.articleId;
    try {
        const art1 = {
            title: title, 
            description: description,
            date_creation: date_creation,
            categorie: categorie,
            Image: Image,
            video: video
        };
        await Movie.findByIdAndUpdate(id, art1);
        res.json(art1);
    } catch (error) {
        res.status(404).json({ message: error.message });
    } 19
});
// Supprimer un article
router.delete('/:articleId', async (req, res) => {
    const id = req.params.articleId;
    await Movie.findByIdAndDelete(id);
    res.json({ message: "article deleted successfully." });
});
module.exports = router;