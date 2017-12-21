
chrome.browserAction.onClicked.addListener(function(tab) {
    var url = tab.url.replace(/^https?:\/\//,'');
    var linkto = url.search(/appspot/i);
    if(linkto < 0){
    chrome.tabs.update({'url': 'https://mirrorrr-170411.appspot.com/' + url}, function(tab) {
        return true;
    });
    } else {
    	alert("URL already mirorred!")
    }
});