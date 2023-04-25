#!/usr/bin/node
const req = require('req');
const id = process.argv[2];
req('http://swapi.co/api/films/' + id + '/', function (error, response, body) {
  if (error == null) {
    const json = JSON.parse(body);
    console.log(json.title);
  }
});
