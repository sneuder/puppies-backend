const { Router } = require('express');
const router = Router();

const dogsControllers = require('../controllers/dogsControllers');
const middlewaresAuth = require('../middlewares/auth');

router.get('/dogs/allDogs', middlewaresAuth.user, dogsControllers.getAllDogs);
router.get('/dogs/:dogId', middlewaresAuth.user, dogsControllers.getOneDog);
router.post('/dogs/newDog', middlewaresAuth.user, dogsControllers.postOneDog);
router.patch('/dogs/:dogId', middlewaresAuth.user, dogsControllers.patchOneDog);

router.delete(
  '/dogs/:dogId',
  middlewaresAuth.user,
  dogsControllers.deleteOneDog
);

module.exports = router;
