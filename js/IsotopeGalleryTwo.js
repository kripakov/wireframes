$(document).ready(function(){
	$('.pagination__nav').on( 'click', 'li', function() {
		var filterValue = $( this ).attr('data-filter');
		console.log(filterValue);
		$('.photo').isotope({
			filter: filterValue
		});
	});
});