const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/NewsControllers');

// newsControllers.index
router.use('/:slug', newsControllers.detail);

router.use('/', newsControllers.index);

module.exports = router;
