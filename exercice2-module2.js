exports.laFonction = () => {
        if (isNaN(process.argv[2]) == false) {
          console.log(`Bonjour ${process.argv[2]} fois`);
        } else {
          console.log("Au revoir");
        }
      
};
