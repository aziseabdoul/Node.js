const fs = require("fs");

let msg = 'ceci est un message écrit par Node.js';

fs.writeFile('exo3.txt', msg, () => {

    
});

fs.readFile('exo3.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });




