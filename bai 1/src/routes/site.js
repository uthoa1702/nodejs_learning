const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/SiteControllers');

// newsControllers.index
router.use('/list', newsControllers.list);

router.use('/', newsControllers.home);

module.exports = router;
