let sp = require('simple-prefs');

function onPrefChange(prefName) {
	console.log('preference '+prefName+' changed to '+sp.prefs[prefName]);
}

sp.on("", onPrefChange);

sp.on('sayHello', function() {
	console.log('sayHello pref button was clicked.');
});
