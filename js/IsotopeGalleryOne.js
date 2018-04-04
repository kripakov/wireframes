$(document).ready(function(){

	$('.our__wrap-button').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
		console.log(filterValue);
		$('.grid').isotope({
			filter: filterValue
		});
	});
});