$(document).ready(function() {
	$('.js-togglesidebar').click(function(event) {
		$('body').toggleClass('is-hiddensidebar');
		$(this).toggleClass('is-active');
		return false;
	});

	$('.toolbar__brushes,.toolbar__colors').click(function(event) {
		$(this).children('.toolbar__drop').toggleClass('is-visible');
	});


	$('.togglesearch, .topsearch__cancel').click(function(event) {
		$('.topsearch').toggleClass('is-visible')
	});

	$('.js-toggleversions').click(function(event) {
		$('body').toggleClass('is-versions');
	});
});