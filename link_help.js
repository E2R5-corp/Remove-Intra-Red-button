chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "https://meta.intra.42.fr/articles/j-ai-un-probleme"
		});
	});
});
