function sleep(ms) {
  console.log("sleeping");
  return new Promise(resolve => setTimeout(resolve, ms));
}


$("button.sync").on( "click", function( event ) {
  window.joyconJS.onSync(true);
  setTimeout(window.joyconJS.onSync, 1000, false);
});

$("button.a").on( "click", function( event ) {
  window.joyconJS.onA(true);
  setTimeout(window.joyconJS.onA, 1000, false);
});

var tmp = $("textarea.macro").val()

var objs = JSON.parse(tmp);

$("button.start").on( "click", async function( event ) {
  console.log("Macro start");
  for(const obj of objs){
    console.log(obj.trigger);
    await sleep(obj.trigger);
    switch(obj.button){
      case 'a':
        window.joyconJS.onA(true);
        setTimeout(window.joyconJS.onA, obj.time, false);
        break;
      case 'b':
        window.joyconJS.onB(true);
        setTimeout(window.joyconJS.onA, obj.time, false);
        break;
      case 'l':
        window.joyconJS.onL(true);
        setTimeout(window.joyconJS.onA, obj.time, false);
        break;
      }
    }
});
