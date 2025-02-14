const express = require('express')
const router = express.Router()


// GET
router.get('/', (req, res) => {
    res.send('You got GET Request');
})

// POST
router.post('/items', (req, res) => {
    res.send('You got POST Request');
})

// PUT
router.put('/items/:id', (req, res) => {
    res.send('You got PUT Request');
})

// DELETE
router.delete('/items/:id', (req, res) => {
    res.send('You got DELETE Request');
})

module.exports = router;