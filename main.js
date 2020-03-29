$("button.sync").on( "click", function( event ) {
  window.joyconJS.onSync(true);
  setTimeout(window.joyconJS.onSync, 1000, false);
});

$("button.a").on( "click", function( event ) {
  window.joyconJS.onA(true);
  setTimeout(window.joyconJS.onA, 1000, false);
});

var tmp = '[{"button":"a", "time":"5000"}, {"button":"b", "time":"100"}, {"button":"l", "time":"500"}]'

var objs = JSON.parse(tmp);

$("button.start").on( "click", function( event ) {
  console.log("Macro start");
  for(const obj of objs){
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
        window.joyconJS.onL(true, "l");
        setTimeout(window.joyconJS.onA, obj.time, false);
        break;
      }
    }
});
