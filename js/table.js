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
		if (val1 && val2)  {
			val1 = Number(val1);
			val2 = Number(val2);
			var adding = val1 + val2;
			var subtracting = val1 - val2;
			var multiplying = val1 * val2;
			var division = val1 / val2;
			var modulus = val1 % val2; 
			$('.add-result').text(adding);
			$('.sub-result').text(subtracting);
			$('.mult-result').text(multiplying);
			$('.div-result').text(division);
			$('.mod-result').text(modulus);
		} else {
			$('.add-result').text('');
			$('.sub-result').text('');
			$('.mult-result').text('');
			$('.div-result').text('');
			$('.mod-result').text('');	
		}
	}
});
