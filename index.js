var active = 0;
var activePhoto = 0;
$('.btn').click(function() {
    var $btn = $(this);
	var $photoBox = $('.slider').find('.photo'); 
	 $photoBox.eq(activePhoto).animate({"margin-left": "-=100px"}, "fast").fadeOut(function() {
        if ($btn.hasClass('next')) {
            if (activePhoto == $photoBox.length - 1) {
                activePhoto = 0;
            }
            else {
                activePhoto ++;
            }
		$photoBox.eq(activePhoto - 1).css({"margin-left": "+=100px"});
        $photoBox.eq(activePhoto).css({"margin-left": "+=100px"});
		$photoBox.eq(activePhoto).fadeIn().animate({"margin-left": "-=100px"}, "fast");
        }
        else if($btn.hasClass('prev')) {
            if (activePhoto == 0) {
                activePhoto = $photoBox.length - 1;
            }
            else {
                activePhoto --;
            }
        } 
    });
});