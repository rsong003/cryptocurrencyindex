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



// app.use(parser.json());
// app.use(parser.urlencoded({extended:true}))

// app.use(express.static(path.resolve(__dirname, '../static')));

// app.use('/', router)

// io.on('connection', socket => {
//   console.log('client connected!')
//   socket.on('addedTask', body => {
//     socket.broadcast.emit('addedTask', {
//       body,
//       from: socket.id.slice(8),
//     })
//   })
//   socket.on('message', body => {
//     socket.broadcast.emit('message', {
//       body,
//       from: socket.id.slice(8),
//     })
//   })
// })

  app.use(parser.json())
  app.use(parser.urlencoded({ extended: true }))
  app.use(express.static('public'))
  app.use('/api', routes)
  app.use('/', redisRouter)
  // .listen(PORT, err => err ? console.log(`Err in connecting to server: ${err}`) : console.log(`Successfully connected on PORT: ${PORT}`));

  // app.get('/', (req, res) => {
  //   res.sendFile(path.resove(__dirname + '/public') + '/public/index.html')
  // })

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
// if you'd like to select database 3, instead of 0 (default), call 
// client.select(3, function() { /* ... */ }); 

client.on("error", function (err) {
    console.log("Error " + err);
});

// client.set("string key", "string val", redis.print);
// client.set('15', 'helloworld', redis.print)
// client.hset("hash key", "hashtest 1", "some value", redis.print);
// client.hset("hash key", "hashtest 2", "fuck", redis.print);
// client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');
// client.hgetall('frameworks', function(err, object) {
//     console.log(object);
// });

client.hkeys("hash key", function (err, replies) {
    console.log(redis.print, 'this is the redis print statement')
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});

redisRouter.get('/getRedisData', (req, res) => {
  console.log('hello')
  res.status(200).send('redis is connected and ready to receive routes')
})


