/*debugging
var errorText = document.createElement("div");
document.body.appendChild(errorText)
window.onerror = function (msg, file, line, column) {
  errorText.innerHTML = msg + '<br>' + file + ' ' + line + ':' + column;
}
*/

function loadOptions() {
  chrome.storage.sync.get({
    img_width: 160,
    img_height: 120
  }, function(items) {
    document.querySelector('#w').value = items.img_width;
    document.querySelector('#h').value = items.img_height;
  });
}//loadOptions

function isInt(n){
    return Number(n)===n && n%1===0;
}

function saveOptions() {

    var w = document.querySelector("#w").value;
    var h = document.querySelector("#h").value;
    w = parseInt(w, 10);
    h = parseInt(h, 10);


    //check numeric
    if(!isInt(w) || !isInt(h)) {
        var status = document.querySelector('#status');
        status.style.color = '#FF0000';
        status.textContent = 'Values must be integers.';
        setTimeout(function() {
          status.textContent = '';
        }, 1500);
        return;
    }

    chrome.storage.sync.set({
        img_width: w,
        img_height: h
    }, function() {
        var status = document.querySelector('#status');
        // Update status to let user know options were saved.
        status.style.color = 'green';
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 900);
    });

}//saveOptions

/*
function closeOptions() {
    window.close();
}//closeOptions
document.querySelector('#cancel_btn').addEventListener('click', closeOptions);
*/

//events
document.addEventListener('DOMContentLoaded', loadOptions);
document.querySelector('#save_btn').addEventListener('click', saveOptions);

