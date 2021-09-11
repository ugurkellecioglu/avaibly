/*global chrome*/

// Listening to messages in Context Script

window.onload = () => {

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const data = request.data
    const keys = Object.keys(data)


    const labels = document.getElementsByTagName("label");

    keys.forEach(key => {
      const searchText = key
      let found;

      for (var i = 0; i < labels.length; i++) {
        if (labels[i].innerText === searchText) {
          found = labels[i];
          break;
        }
      }
      if (found &&
        found.parentElement &&
        found.parentElement.nextElementSibling &&
        found.parentElement.nextElementSibling.childNodes
      )
        found.parentElement.nextElementSibling.childNodes[1].value = data[key]
    })

  });

}

