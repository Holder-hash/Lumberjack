$('#mailInp').focus(function(){
    $('legend').css('color', 'rgb(28, 104, 104)')
})

$('#mailInp').blur(function(){
    $('legend').css('color', 'white')
})

//scroll top
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').fadeIn(500);
		} else {
			$('#scroll_top').fadeOut(300);
		}
	});
 
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});


//scroll elements
