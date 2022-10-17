const { Router } = require("express");
const router = Router();

const bredsForControllers = require("../controllers/bredsForControllers");

router.get("/bredsfor/allBredsFor", bredsForControllers.getAllBredsFor);
router.get("/bredsfor/:bredForId", bredsForControllers.getOneBredFor);
router.post("/bredsfor/newBredFor", bredsForControllers.postOneBredFor);
router.patch("/bredsfor/:bredForId", bredsForControllers.patchOneBredFor);
router.delete("/bredsfor/:bredForId", bredsForControllers.deleteOneBredFor);

module.exports = router;
