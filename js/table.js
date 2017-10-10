$(document).ready(function() {
	$('input').blur(function() {
		calculation(this);
	});
	$('.add-row').click(function() {
		var cloned = $('.row').first().clone().appendTo('.table-rows');
		var cloned_input = $('.row').last().find('input').val('');
		var cloned_span = $('.row').last().find('span').text('');
		$('input').blur(function() {
			calculation(this);
		});
	});	
	function calculation(self) {
		console.log(self);
		var row = $(self).parents('.row');
		console.log('.row:', row);
		console.log('.row-i meji inputner@:', row.find('input'));
		var val1 = row.find('.val-one').val();
		var val2 = row.find('.val-two').val();
		var addition_span = row.find('.add-result');
		var subtract_span = row.find('.sub-result');
		var multiply_span = row.find('.mult-result');
		var division_span = row.find('.div-result');
		var modulus_span  = row.find('.mod-result');
		if (val1 && val2)  {
			val1 = Number(val1);
			val2 = Number(val2);
			var adding = val1 + val2;
			var subtracting = val1 - val2;
			var multiplying = val1 * val2;
			var division = val1 / val2;
			var modulus = val1 % val2; 
			addition_span.text(adding);
			subtract_span.text(subtracting);
			multiply_span.text(multiplying);
			division_span.text(division);
			modulus_span.text(modulus);
		} else {
			row.find('span').text('');	
		}
	}
});
