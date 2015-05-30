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

$(document).on('dragend', 'img', function(e){

	var w = window.localStorage.getItem('img_width');
	var h = window.localStorage.getItem('img_height');

	if(!w) { w = 160; }
	if(!h) { h = 120; }

	if($(this).width() > w && $(this).height() > h)
	{
	    dnl_downloadImg($(this).attr("src"));
	}

});//dragend