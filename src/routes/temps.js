const { Router } = require("express");
const router = Router();

const tempsControllers = require("../controllers/tempsControllers");
const middlewaresAuth = require("../middlewares/auth");

router.get(
  "/temps/allTemps",
  middlewaresAuth.user,
  tempsControllers.getAllTemps
);

router.get("/temps/:tempId", middlewaresAuth.user, tempsControllers.getOneTemp);

router.post(
  "/temps/:tempId",
  middlewaresAuth.user,
  tempsControllers.postOneTemp
);

router.patch(
  "/temps/:tempId",
  middlewaresAuth.user,
  tempsControllers.patchOneTemp
);

router.delete(
  "/temps/:tempId",
  middlewaresAuth.user,
  tempsControllers.deleteOneTemp
);

module.exports = router;
