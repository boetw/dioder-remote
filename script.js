var Redoid = require('redoid');

var redoid = Redoid({
	color: '#ffffff'
});

var i = 0;

for (var easing in Redoid.easingFunctions){
	redoid.trigger(function(){
		console.log(' ' + this + ' function');
	}.bind(easing));
	redoid.delay(1000);
	redoid.transition(i ++ % 2 === 0 ? '#ff0000' : '#ffffff', 2000, easing);
}