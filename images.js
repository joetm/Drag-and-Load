function dnl_is_image(src) {
    return src.match(/([^\.\/]*\.(?:jpg|jpeg|jpe|gif|png))/gi);
}

function dnl_downloadImg(src) {
    $("#dragnload_image").remove();
    $("body").append($("<a/>", {
        id: "dragnload_image",
        href: src,
        download: dnl_is_image(src) || ""
    }));
    document.getElementById("dragnload_image").click();
}

$(document).on('dragend', 'img', function(e){
    dnl_downloadImg($(this).attr("src"));
});