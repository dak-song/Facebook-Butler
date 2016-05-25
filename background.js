

var toggle = true;

function getTabUrl(callback) {
	var queryInfo = {
    	active: true,
    	currentWindow: true
  	};

  	chrome.tabs.query(queryInfo, function(tabs) {
  		var tab = tabs[0];
    	var url = tab.url;
    	callback(url);
  	});
}

function toggleIcon() {
	getTabUrl(function(url) {
		var regex = "[.]*www\.facebook\.com[.]*";
		if(!url.match(regex)) {
			alert("Extension only works on Facebook");
		} else {
			if(toggle) {
				chrome.browserAction.setIcon({path: "micon.png"});
				toggle = !toggle
			} else {
				chrome.browserAction.setIcon({path: "micoff.png"});
				toggle = !toggle
			}
		}
	});
}

chrome.browserAction.onClicked.addListener(toggleIcon);




