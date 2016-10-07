// var express = require("express");
var piblaster = require("pi-blaster.js");
var Redoid = require('redoid');

//17 Red grey
//22 Green white
//23 Blue purple
// piblaster.setPwm(17, 1 );
// piblaster.setPwm(22, 0.2 );
// piblaster.setPwm(23, 0 );
function blackOut () {
	piblaster.setPwm(17, 0);
	piblaster.setPwm(22, 0);
	piblaster.setPwm(23, 0);}
	
var redoid = Redoid({
	color: '#ffffff',
	colorComponentPins: [4, 17, 18],
	applyColorCallback: null,
	loopInterval: 25,
	defaultEasing: 'easeInOutQuad',
	idleTimeout: 0,
	idleCallback: null,
	idleColor: null,
	idleColorTransitionDuration: 4000,
	loopTransition: false
});

var i = 0;

for (var easing in Redoid.easingFunctions) {
	redoid.trigger(function() {
		console.log(' ' + this + ' function');
	}.bind(easing));
	redoid.delay(1000);
	redoid.transition(i++ % 2 === 0 ? '#ff0000' : '#ffffff', 2000, easing);
}

function red() {
	console.log("red");
	piblaster.setPwm(17, 1);
	piblaster.setPwm(22, 0);
	piblaster.setPwm(23, 0);
};

function blue() {
	console.log("blue");
	piblaster.setPwm(17, 0);
	piblaster.setPwm(22, 1);
	piblaster.setPwm(23, 0);
};

function green() {
	console.log("green");
	piblaster.setPwm(17, 0);
	piblaster.setPwm(22, 0);
	piblaster.setPwm(23, 1);
};