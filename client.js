const net = require('net');
const { IP, PORT, NAME } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
    conn.write('Move: up');
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  
  return conn;
}

console.log('Connecting ...');
connect();
