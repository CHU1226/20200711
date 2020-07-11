$(document).ready(function() {
	$('.nav-link').click(function(){
		var targetId=$(this).attr("href");
		var linkScroll=$(targetId).offset().top;
		$('html,body').animate({
			scrollTop: linkScroll-30
		}, 1000)
	});
	$('.logon .change').click(function(){
		$('form.logon').fadeOut();
		$('.dark-bg').fadeOut();
		return false
	});
	$('.logon button').click(function(){
		alert('目前沒有網路請稍後再試')
	});
	$('#car').click(function(){
		$('form#logon').fadeIn();
		$('.dark-bg').fadeIn();
	});
	$('.join').click(function(){
		$('#joinus').fadeIn();
		$('.dark-bg').fadeIn();
	});
	$('.register').click(function(){
		$('#register').fadeIn();
		$('.dark-bg').fadeIn();
	});

});