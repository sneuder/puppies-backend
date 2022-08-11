const { Router } = require('express');
const router = Router();

const dogsControllers = require('../controllers/dogsControllers');

router.get('/dogs/allDogs', dogsControllers.getAllDogs);
router.get('/dogs/:dogId', dogsControllers.getOneDog);
router.post('/dogs/newDog', dogsControllers.postOneDog);
router.patch('/dogs/:dogId', dogsControllers.patchOneDog);
router.delete('/dogs/:dogId', dogsControllers.deleteOneDog);

module.exports = router;