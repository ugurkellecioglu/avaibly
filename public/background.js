/*global chrome*/




// Sending messages from background / event page
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log(changeInfo)
  if (changeInfo.status === 'complete') {
    chrome.tabs.query({ active: true }, function (tabs) {
      if (localStorage.getItem('omiriData')) {
        chrome.tabs.sendMessage(tabs[0].id, { data: JSON.parse(localStorage.getItem('omiriData')) });
      }
    });
  }
});


