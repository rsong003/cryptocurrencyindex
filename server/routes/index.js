const express = require('express')
const router = express.Router();


router.get('/getBitcoinPrices', (req, res) => {
  res.status(200).send('this is working')
})

module.exports = router;