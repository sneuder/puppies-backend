const { Router } = require('express');
const router = Router();

router.post('/database/populate', (req, res) => {
  res.send('database populated');
});

router.delete('/database/unpopulate', (req, res) => {
  res.send('database delete');
});


module.exports = router;