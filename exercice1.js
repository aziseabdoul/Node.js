// global.console.log(__filename);
// global.console.log(__dirname);
// global.console.log(process.cwd());

// if (isNaN(process.argv[2])==false) {
//     console.log(`Bonjour ${process.argv[2]} fois`);
// } else {
//     console.log("Au revoir");
// }

let maFonction = function() {
  if (isNaN(process.argv[2]) == false) {
    console.log(`Bonjour ${process.argv[2]} fois`);
  } else {
    console.log("Au revoir");
  }
};

maFonction();
