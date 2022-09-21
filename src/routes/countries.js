const { Router } = require('express');
const router = Router();

const countriesControllers = require('../controllers/contriesControllers');

router.get('/countries/allcountries', countriesControllers.getAllCountries);
router.get('/countries/:countrydId', countriesControllers.getOneCountry);
router.post('/countries/newCountry', countriesControllers.postOneCountry);
router.patch('/countries/:countryId', countriesControllers.patchOneCountry);
router.delete('/countries/:countryId', countriesControllers.deleteOneCountry);

module.exports = router;