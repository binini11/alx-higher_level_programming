#!/usr/bin/node
const req = require('req');
const fs = require('fs');

req(process.argv[2], function (err, response, body) {
  if (err == null) {
    fs.writeFileSync(process.argv[3], body);
  }
});
