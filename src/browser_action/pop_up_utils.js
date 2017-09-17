// Scripts order
// * pop_up_utils
// d3.min (d3 visualization library)
// visualization
// browser_action.js

// Sender id for this file so background knows who it is
var sender = 'browser_action';

// We don't know what context this runs in, but it seems like we don't have access to the console
// Instead of using console.log in this file, use this method to append messages to the popup
function log(message) {
  var messageLi = document.createElement('li')
  messageLi.textContent = JSON.stringify(message);
  document.getElementById('log')
    .append(messageLi);
}

function getActiveTab(callback) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    callback(tabs[0]);
  });
}

function tellTabToNavigateTo(url) {
  // This is a bit of JS version es6 magic
  //   tab => {... is shorthand for function(tab) {...
  //   { url } is shorthand for { url: url }
  getActiveTab(tab => {
    chrome.tabs.update(tab.id, { url });
  });
}

function closePopUp() {
  window.close();
}