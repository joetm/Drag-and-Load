
//var width = 160;
//var height = 120;

function loadOptions() {
  chrome.storage.sync.get({
    width: 160,
    height: 120
  }, function(items) {
    document.getElementById('width').value = items.width;
    document.getElementById('height').value = items.height;
  });
}//loadOptions

function saveOptions() {
	chrome.storage.sync.set({
		width: document.getElementById("width").value,
		height: document.getElementById("height").value
	}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function() {
		  status.textContent = '';
		}, 750);
	});
}//saveOptions

//events
document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save_btn').addEventListener('click', saveOptions);