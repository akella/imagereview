$(document).ready(function() {
	$('.js-togglesidebar').click(function(event) {
		$('body').toggleClass('is-hiddensidebar');
		$(this).toggleClass('is-active');
		return false;
	});
});