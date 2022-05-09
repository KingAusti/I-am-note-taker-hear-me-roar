const fs = require('fs');
const router = require('express').Router();
const Store = require('../../db/Store');

router.get('/notes', (req,res) => {
    Store.getNotes()
    .then(data => {
        return res.json(data)
    })
    .catch(err => res.status(500).json(err))
});

router.post('/notes', (req, res) => {
    Store
    .addNote(req.body)
    .then(note => res.json(note))
    .catch(err => res.status(500).json(err))
})

module.exports = router;