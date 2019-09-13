function sync(){
  window.joyconJS.onSync(true)
  console.log("start");
  setTimeout(function() {
		window.joyconJS.onSync(false);
    console.log("started");
  }, 5000);
};
