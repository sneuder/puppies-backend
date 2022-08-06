const { Router } = require('express');
const router = Router();

router.get('/breeds', (req, res) => {
  res.send("hola");
});

router.post('/breeds/:breed', (req, res) => {
  res.send('Bread Created');
});



module.exports = router;