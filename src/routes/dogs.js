const { Router } = require("express");
const router = Router();

const dogsControllers = require("../controllers/dogsControllers");
const middlewaresAuth = require("../middlewares/auth");

router.get("/dogs/allDogs", middlewaresAuth.user, dogsControllers.getAllDogs);
router.get("/dogs/:dogId", dogsControllers.getOneDog);
router.post("/dogs/newDog", dogsControllers.postOneDog);
router.patch("/dogs/:dogId", dogsControllers.patchOneDog);
router.delete("/dogs/:dogId", dogsControllers.deleteOneDog);

module.exports = router;
