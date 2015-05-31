//debugging
var errorText = document.createElement("div");
document.body.appendChild(errorText)
window.onerror = function (msg, file, line, column) {
  errorText.innerHTML = msg + '<br>' + file + ' ' + line + ':' + column;
}

// A generic onclick callback function.
function genericOnClick(info, tab) {
  //console.log("info: " + JSON.stringify(info));
  //console.log("tab: " + JSON.stringify(tab));
}

// Create one test item for each context type.
var title = "Drag and Load";
var id = chrome.contextMenus.create({"title": title, "contexts":["page", "image", "selection", "link"], "onclick": genericOnClick});
