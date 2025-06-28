const express = require('express');
const router = express.Router();

// Endpoint racine
router.get('/', (req, res) => {
    res.send('Hello ANDO');
});

module.exports = router;