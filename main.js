$("button.sync").on( "click", function( event ) {
  window.joyconJS.onSync(true);
  setTimeout(window.joyconJS.onSync, 1000, false);
});

$("button.a").on( "click", function( event ) {
  window.joyconJS.onA(true, "a");
  setTimeout(window.joyconJS.onA, 1000, false, "a");
});

var tmp = '[{"button":"a", "time":"5000"}, {"button":"b", "time":"100"}, {"button":"l", "time":"500"}]'

var objs = JSON.parse(tmp);

$("button.start").on( "click", function( event ) {
  console.log("Macro start");
  for(const obj of objs){
    switch(obj.button){
      case 'a':
        window.joyconJS.onA(true, "a");
        setTimeout(window.joyconJS.onA, obj.time, false, "a");
        break;
      case 'b':
        window.joyconJS.onB(true, "b");
        setTimeout(window.joyconJS.onA, obj.time, false, "b");
        break;
      case 'l':
        window.joyconJS.onL(true, "l");
        setTimeout(window.joyconJS.onA, obj.time, false, "l");
        break;
      }
    }
});
