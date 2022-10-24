const { Router } = require("express");
const router = Router();

const newUserControllers = require("../controllers/newUserControllers");

router.post("/user/new", newUserControllers.postToken);

module.exports = router;
