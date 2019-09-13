//not my work, check TheGreatRambler at github

if (!window.joyconJS) {
	// Used to test when not connected to the JoyConDroid API
	var currentCallback = null;

	window.joyconJS = {};

	window.joyconJS.registerCallback = function(functionName) {
		currentCallback = functionName;
	};

	window.joyconJS.unregisterCallback = function() {
		currentCallback = null;
	}

	function on(stat, key) {
		if(stat){
			console.log("pressed " + key);
		}else{
			console.log("released " + key);
		}
	};

	// All these need to exist for the system to succeed
	window.joyconJS.onA = on;
	window.joyconJS.onB = on;
	window.joyconJS.onX = on;
	window.joyconJS.onY = on;
	window.joyconJS.onL = on;
	window.joyconJS.onR = on;
	window.joyconJS.onZL = on;
	window.joyconJS.onZR = on;
	window.joyconJS.onPlus = on;
	window.joyconJS.onMinus = on;
	window.joyconJS.onSync = on;
	window.joyconJS.onLeft = on;
	window.joyconJS.onRight = on;
	window.joyconJS.onUp = on;
	window.joyconJS.onDown = on;
	window.joyconJS.onLeftJoystick = on;
	window.joyconJS.onRightJoystick = on;

	function loop() {
		if (currentCallback) {
			eval(currentCallback + "()");
		}
		// Run 60 FPS
		setTimeout(loop, 16);
	}
	loop();
}
