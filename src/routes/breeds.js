const { Router } = require("express");
const router = Router();

const breedsControllers = require("../controllers/breedsControllers");
const middlewaresAuth = require("../middlewares/auth");

router.get(
  "/breeds/allBreeds",
  middlewaresAuth.user,
  breedsControllers.getAllBreeds
);

router.get(
  "/breeds/:breedId",
  middlewaresAuth.user,
  breedsControllers.getOneBreed
);

router.post(
  "/breeds/newBreed",
  middlewaresAuth.user,
  breedsControllers.postOneBreed
);

router.patch(
  "/breeds/:breedId",
  middlewaresAuth.user,
  breedsControllers.patchOneBreed
);

router.delete(
  "/breeds/:breedId",
  middlewaresAuth.user,
  breedsControllers.deleteOneBreed
);

module.exports = router;
