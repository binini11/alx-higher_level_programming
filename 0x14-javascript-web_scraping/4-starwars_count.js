#!/usr/bin/node
const req = require('req');
let nFilms = 0;

req(process.argv[2], function (err, response, body) {
  if (err == null) {
    const resp = JSON.parse(body);
    const results = resp.results;
    for (let i = 0; i < results.length; i++) {
      const characters = results[i].characters;
      for (let j = 0; j < characters.length; j++) {
        if (characters[j].search('18') > 0) {
          nFilms++;
        }
      }
    }
  }
  console.log(nFilms);
});
