function dnl_is_image(src) {
    return src.match(/([^\.\/]*\.(?:jpg|jpeg|jpe|gif|png))/gi);
}//dnl_is_image

function dnl_downloadImg(src) {
    $("#dragnload_image").remove();
    $("body").append($("<a/>", {
        id: "dragnload_image",
        href: src,
        download: dnl_is_image(src) || ""
    }));
    document.getElementById("dragnload_image").click();
}//dnl_downloadImg

function dl_img (e) {

	var w = window.localStorage.getItem('img_width');
	var h = window.localStorage.getItem('img_height');
	if(!w) { w = 160; }
	if(!h) { h = 120; }

	if($(this).is('img')) {
		if($(this).width() > w && $(this).height() > h)
		{
			dnl_downloadImg($(this).attr("src"));
		}
	} else {

		bg_img_src = false;
		var match = (window.getComputedStyle(this).getPropertyValue("background-image")).match(/url\(([^)]+)\)/i);
		if (match) {
			bg_img_src = match[1];
		}
		if (!bg_img_src) {
			return;
		}
		if($(this).width() > w && $(this).height() > h)
		{
		    dnl_downloadImg(bg_img_src);
		}
	}

}//dl_img

/*
function dl_div (e) {

	console.log('dragged div');

	//check if there is a background image on this div container
	bg_img_src = false;
	var match = (window.getComputedStyle(this).getPropertyValue("background-image")).match(/url\(([^)]+)\)/i);
	if (match) {
		bg_img_src = match[1];
	}
	if (!bg_img_src) {
		return;
	}

	//instead of checking image width/height, I check the container width/height
	var w = window.localStorage.getItem('img_width');
	var h = window.localStorage.getItem('img_height');
	if(!w) { w = 160; }
	if(!h) { h = 120; }

	if($(this).width() > w && $(this).height() > h)
	{
	    dnl_downloadImg(bg_img_src);
	}

}//dl_div
*/

$(document).on('dragend', '*', dl_img);
