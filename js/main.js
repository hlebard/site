$(document).ready(function(){
	$('.menu-trigger').click(function(){
		$('.menu-trigger').toggleClass('open');
		$('nav').toggleClass('open');
	});
})