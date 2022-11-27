const { Router } = require('express');
const router = Router();

const bredsForControllers = require('../controllers/bredsForControllers');
const middlewaresAuth = require('../middlewares/auth');

router.get(
  '/bredsfor/allBredsFor',
  middlewaresAuth.user,
  bredsForControllers.getAllBredsFor
);

router.get(
  '/bredsfor/:bredForId',
  middlewaresAuth.user,
  bredsForControllers.getOneBredFor
);

router.post(
  '/bredsfor/newBredFor',
  middlewaresAuth.user,
  bredsForControllers.postOneBredFor
);

router.patch(
  '/bredsfor/:bredForId',
  middlewaresAuth.user,
  bredsForControllers.patchOneBredFor
);

router.delete(
  '/bredsfor/:bredForId',
  middlewaresAuth.user,
  bredsForControllers.deleteOneBredFor
);

module.exports = router;
