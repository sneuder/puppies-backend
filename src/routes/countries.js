const { Router } = require("express");
const router = Router();

const countriesControllers = require("../controllers/countriesControllers");
const middlewaresAuth = require("../middlewares/auth");

router.get(
  "/countries/allcountries",
  middlewaresAuth.user,
  countriesControllers.getAllCountries
);

router.get(
  "/countries/:countrydId",
  middlewaresAuth.user,
  countriesControllers.getOneCountry
);

router.post(
  "/countries/newCountry",
  middlewaresAuth.user,
  countriesControllers.postOneCountry
);

router.patch(
  "/countries/:countryId",
  middlewaresAuth.user,
  countriesControllers.patchOneCountry
);

router.delete(
  "/countries/:countryId",
  middlewaresAuth.user,
  countriesControllers.deleteOneCountry
);

module.exports = router;
