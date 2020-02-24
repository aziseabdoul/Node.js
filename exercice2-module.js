console.log("je suis un module secondaire");

global.console.log(__dirname);
global.console.log(process.cwd());

exports.fonctionArray = () => {
  const array = ["msg1", "msg2", "msg3"];

  console.log(`${array[0]} ${array[1]} ${array[2]}`);
};
