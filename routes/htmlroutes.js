//import path to access directories
const path = require('path');

//import router so we can use our endpoints
const router = require('express').Router();

router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;