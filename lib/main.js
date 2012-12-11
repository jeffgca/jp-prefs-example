let sp = require('simple-prefs');

function onPrefChange(prefName) {
	console.log(prefName);
	if (prefName === 'sayHello') {
		console.log('sayHello pref button was clicked.');
	}
	else {
		console.log('preference '+prefName+' changed to '+sp.prefs[prefName]);
	}
}

sp.on("", onPrefChange);

sp.on('sayHello', function() {
	console.log('XXX sayHello pref button was clicked.');
});
