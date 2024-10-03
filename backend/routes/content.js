const express = require('express');
const { addContent, getContent } = require('../controllers/contentController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, addContent); // Admin Only
router.get('/', getContent); // Public

module.exports = router;
