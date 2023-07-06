const {response}=require('express')
const http = require ('http')
http.createServer((request,response)=>{

    response.end('Hello haithem world!!!!')
}

).listen(3008)

const fs = require('fs');

  // Read the file and log its data
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:\n', data);
  });





