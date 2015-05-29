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

	var width = window.localStorage.getItem('width');
	var height = window.localStorage.getItem('height');

	if(!width) { width = 160; }
	if(!height) { height = 120; }

	if($(this).width() > width && $(this).height() > height)
	{
	    dnl_downloadImg($(this).attr("src"));
	}

});//dragend