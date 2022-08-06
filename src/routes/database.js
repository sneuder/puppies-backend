const { Router } = require('express');
const router = Router();

const databaseControllers = require('../controllers/databaseControllers');

router.get('/database/populate', databaseControllers.postDatabase);
router.get('/database/unpopulate', databaseControllers.deleteDatabase);

module.exports = router;