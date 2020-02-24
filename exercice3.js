const fs = require("fs");

let msg = 'ceci est un message écrit par Node.js';

fs.writeFile('exo3.txt', msg, () => {
});

// fs.readFile('exo3.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

const file = 'exo3.txt';

const lireFic = () => {
    fs.readFile('exo3.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
}

fs.access(file, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist' : lireFic()}`);
});


