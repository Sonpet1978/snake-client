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
  