const express = require('express')
const redisRouter = express.Router();
const redisServer = require('../index.js')
const axios = require('axios')
const schedule = require('node-schedule');
var cron = require('node-cron');


var redis = require("redis"),
    client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});


redisRouter.get('/getRedisData', (req, res) => {
  client.get('indexFund', function(err, reply){
    if (reply === null){
      let indexObject = {}
      axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=60&e=CCCAGG')
      .then(ethResult => {
        indexObject['ETH'] = ethResult.data
        axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=60&e=CCCAGG')
        .then(btcResult => {
          indexObject['BTC'] = btcResult.data
          axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=60&e=CCCAGG')
          .then(ltcResult => {
            indexObject['LTC'] = ltcResult.data
            axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=ETC&tsym=USD&limit=60&e=CCCAGG')
            .then(etcResult => {
              indexObject['ETC'] = etcResult.data
              axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=NEO&tsym=USD&limit=60&e=CCCAGG')
              .then(neoResult => {
                indexObject['NEO'] = neoResult.data
                axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=XMR&tsym=USD&limit=60&e=CCCAGG')
                .then(xmrResult => {
                  indexObject['XMR'] = xmrResult.data
                  axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=DASH&tsym=USD&limit=60&e=CCCAGG')
                  .then(dashResult => {
                    indexObject['DASH'] = dashResult.data
                    axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=XEM&tsym=USD&limit=60&e=CCCAGG')
                    .then(xemResult => {  
                      indexObject['XEM'] = xemResult.data
                      axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=XRP&tsym=USD&limit=60&e=CCCAGG')
                      .then(xrpResult => {
                        indexObject['XRP'] = xrpResult.data
                        axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=BCH&tsym=USD&limit=60&e=CCCAGG')
                        .then(bchResult => {
                          indexObject['BCH'] = bchResult.data
                          var stringified = JSON.stringify(indexObject)
                          client.hmset('indexFund', 'allCryptos', stringified)
                          client.hgetall('indexFund', function(err, object){
                            res.status(200).send(object)
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })      
      } else {
      client.hgetall('indexFund', function(err, object){
        res.status(200).send(object)
      })
    }
  })
})

const resetRedis = () =>{
  var marketShares = {}
  var totalMarket = 0
  axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XMR,XRP,BCH,DASH,NEO,XEM,ETC&tsyms=USD')
    .then(result => {
      var data = result.data.RAW
      for (var crypto in data) {
        totalMarket += data[crypto].USD.MKTCAP
      }
      for (var crypto in data){
        marketShares[crypto] = (data[crypto].USD.MKTCAP / totalMarket) * 100
      }
      var stringified = JSON.stringify(marketShares)

      client.hgetall('marketShares', function(err, object){
        if (object === null){
          client.hmset('marketShares', 'data', stringified)
          console.log(object)
        } else {
          client.hdel('marketShares', 'data')
          client.hmset('marketShares', 'data', stringified)
          console.log(object)
        }
      })
    })
}

cron.schedule('*/1 * * * *', function(){
  resetRedis()
  console.log('running a task every two minutes');
});

module.exports = redisRouter;