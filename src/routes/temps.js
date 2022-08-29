const { Router } = require('express');
const router = Router();

const tempsControllers = require('../controllers/tempsControllers');

router.get('/temps/allTemps', tempsControllers.getAllTemps);
router.get('/temps/:tempId', tempsControllers.getOneTemp);
router.post('/temps/:tempId', tempsControllers.postOneTemp);
router.patch('/temps/:tempId', tempsControllers.patchOneTemp);
router.delete('/temps/:tempId', tempsControllers.deleteOneTemp);



module.exports = router;