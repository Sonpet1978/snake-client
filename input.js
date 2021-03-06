const net = require('net');
const { IP, PORT, NAME } = require('./constants');
const connection = net.createConnection({ 
    host: IP,
    port: PORT
  });

 const setupInput = function() {
   const stdin = process.stdin;
   stdin.setRawMode(true);
   stdin.setEncoding('utf8');
   stdin.resume();
   return stdin;
 }
 const stdin = setupInput();

 const handleUserInput = function(key) {
   if (key === '\u0003') {
     process.exit();
   } else if (key === 'w') {
     connection.write('Move: up');
   } else if (key === 'a') {
     connection.write('Move: left');
   } else if (key === 's') {
    connection.write('Say: send fudge!');
   } else if (key === 'd') {
     connection.write('Move: right');
   };
 };

 stdin.on('data', key => {
   handleUserInput(key);
 });

 module.exports = { setupInput }; 
