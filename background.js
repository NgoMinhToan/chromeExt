chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({color: '#3aa757'}, ()=>{
        console.log('the color is green');
    });
    chrome.storage.sync.set({textColor: 'white'}, ()=>{
        console.log('the text color is white');
    })
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
            })
            ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
})