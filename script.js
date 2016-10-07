var Redoid = require('redoid');

var redoid = Redoid({
	color: '#ffffff'
});

var 1 = 0;

for (var easing in Redoid.easingFunctions){
	redoid.trigger(function(){
		console.log(' ' + this);
	}.bind(easing));
	redoid.delay(1000);
	redoid.transition(i ++ % 2 === 0 ? '#ff0000' : '#ffffff', 2000, easing);
}