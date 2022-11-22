const exp = require("constants");
const express = require("express");
var { SerialPort } = require("serialport");
// const server = express();

var robot = require("robotjs");
var io = require('socket.io')(server);

const port = 3000;
const app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var arduinoCOMPort = "COM3";

var arduinoSerialPort = new SerialPort({ path: arduinoCOMPort, baudRate: 9600 })
.on('error',function(err) {console.log(err);});

arduinoSerialPort.on('open',function() {
    console.log('Serial Port ' + arduinoCOMPort + ' is opened.');
  });

app.use("/js",express.static(__dirname+"/js"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/click+keypad+arduino.html");
})

/* server.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
}); */

server.listen(3000, function() {
  console.log(`Server is Running! http://localhost:${port}`);
});

io.on('connection', (socket) => { // 소켓 연결이 들어오면 실행
  // 클라이언트에서 수신받은 정보
  socket.on('location', (msg) => {
      //console.log('Message received: ' + msg);

      var screenSize = robot.getScreenSize();
      // var height = (screenSize.height / 2) - 10;
      var height = screenSize.height;
      var width = screenSize.width;

      // 마우스 커서 이동시킬 좌표
      var x = (width - msg[0] * width);
      var y = msg[1]*height;
      robot.moveMouse(x, y);
  })

  socket.on('angles', (msg) => {
    //console.log('angles: ' + msg);
  });

  socket.on('gesture', (msg) => {
    console.log(msg);
    if(msg == 1){
      robot.mouseClick();
      }
  });
  socket.on('pw', (msg) => {
    if(msg=='2204723'){
        arduinoSerialPort.write("o");
        console.log("moter on!")
    }
  })
});