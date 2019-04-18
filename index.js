//JQuery codes
$(document).ready(() => {
	$('.nav-menu').on('mouseenter', () => {
		$('.hide-menu').fadeIn(300);
		$('.nav-menu').css('color', 'chartreuse');
		
		});
    $('.hide-menu').on('mouseleave', () => {
		$('.hide-menu').fadeOut(400);
		$('.nav-menu').css('color', 'khaki')
		
		});
	$('.nav-login').on('click', () => {
		$('.login-container').slideToggle('fast');
		
		});
		
	
});