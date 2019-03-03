// Inject the payload.js script into the current tab after the popout has loaded

window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
	    file: 'payload.js'



	});;
});

$(document).ready(function () {
    $(".btn").click(function() {
      console.log('Zverejnit');
      if ($('.sx_536c0b')) $('.sx_536c0b').click();
    

    });
});