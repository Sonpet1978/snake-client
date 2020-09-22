const net = require('net');

/**
 * Establishes connection with the game server
 */
//#!/usr/bin/env node
const connect = function() {
    const conn = net.createConnection({ 
      host: '10.0.2.15',
      port: 50541
    });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
  
    return conn;
  }
  
  //Sonyaadd

  console.log('Connecting ...');
  connect(); 
  
  
  
process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

// Begin game
game.start()


