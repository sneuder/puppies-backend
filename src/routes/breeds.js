const { Router } = require("express");
const router = Router();

const breedsControllers = require("../controllers/breedsControllers");

router.get("/breeds/allBreeds", breedsControllers.getAllBreeds);
router.get("/breeds/:breedId", breedsControllers.getOneBreed);
router.post("/breeds/newBreed", breedsControllers.postOneBreed);
router.patch("/breeds/:breedId", breedsControllers.patchOneBreed);
router.delete("/breeds/:breedId", breedsControllers.deleteOneBreed);

module.exports = router;
