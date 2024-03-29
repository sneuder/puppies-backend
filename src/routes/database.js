const { Router } = require('express');
const router = Router();

const databaseControllers = require('../controllers/databaseControllers');

router.post('/database/populate', databaseControllers.postDatabase);
router.delete('/database/unpopulate', databaseControllers.deleteDatabase);

module.exports = router;
