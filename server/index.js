const express = require('express');
const parser = require('body-parser');
const PORT = process.env.PORT || 3030;
const path = require('path');
const db = require('../database')
const table = require('../database/Users.js')
const routes = require('./routes')
const redisRouter = express.Router()
const app = express()
const http = require('http')
const server = http.createServer(app)
const socketIO = require('socket.io')
const io = socketIO(server)
const axios = require('axios')


  app.use(parser.json())
  app.use(parser.urlencoded({ extended: true }))
  app.use(express.static('public'))
  app.use('/api', routes)
  app.use('/', redisRouter)

io.on('connection', socket => {
  console.log('client connected to socketIO!')
})

server.listen(PORT, (err)=>{
  if (err){
    console.log('there is an err')
  } else {
    console.log('the server is listening on port', PORT);
  }
})

var redis = require("redis"),
    client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

client.hkeys("hash key", function (err, replies) {
    console.log(redis.print, 'this is the redis print statement')
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    // client.quit();
});

redisRouter.get('/getRedisData', (req, res) => {
  client.get('indexFund', function(err, reply){
    if (reply === null){
      let indexObject = {}
      axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=30&e=CCCAGG')
      .then(ethResult => {
        indexObject['ETH'] = ethResult.data
        axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30&e=CCCAGG')
        .then(btcResult => {
          indexObject['BTC'] = btcResult.data
          axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=30&e=CCCAGG')
          .then(ltcResult => {
            indexObject['LTC'] = ltcResult.data
            axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=ETC&tsym=USD&limit=30&e=CCCAGG')
            .then(etcResult => {
              indexObject['ETC'] = etcResult.data
              axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=NEO&tsym=USD&limit=30&e=CCCAGG')
              .then(neoResult => {
                indexObject['NEO'] = neoResult.data
                axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=XMR&tsym=USD&limit=30&e=CCCAGG')
                .then(xmrResult => {
                  indexObject['XMR'] = xmrResult.data
                  axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=DASH&tsym=USD&limit=30&e=CCCAGG')
                  .then(dashResult => {
                    indexObject['DASH'] = dashResult.data
                    axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=XEM&tsym=USD&limit=30&e=CCCAGG')
                    .then(xemResult => {
                      indexObject['XEM'] = xemResult.data
                      axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=XRP&tsym=USD&limit=30&e=CCCAGG')
                      .then(xrpResult => {
                        indexObject['XRP'] = xrpResult.data
                        axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=BCH&tsym=USD&limit=30&e=CCCAGG')
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
      
        // client.hmset('cryptos1', 'ETH', result.data)
        // client.hgetall('cryptos1', function(err, object){
        //   res.status(200).send(object)
      
      } else {
      client.hgetall('indexFund', function(err, object){
        res.status(200).send(object)
      })
    }
  })
})


