$(document).ready(function() {
	$('input').blur(function() {
		calculation(this);
	});
	$('.fa-repeat').click(function(){
		reset_row(this);
	});
	$('.fa-trash-o').click(function() {
		trash_row(this);
	});
	//adding clones after add-row button
	$('.add-row').click(function() {
		//getting first .row cloning and inserting after .table-rows
		var cloned = $('.row').first().clone().appendTo('.table-rows');
		//getting .row and finding his childs (inputs, spans) and removing cloned values
		var cloned_input = $('.row').last().find('input').val('');
		var cloned_span = $('.row').last().find('span').text('');
		$('input').blur(function() {
			calculation(this);
		});
		$('.fa-repeat').click(function(){
			reset_row(this);
		});
		$('.fa-trash-o').click(function() {
			trash_row(this);
		});
	});
	//removing row's values after clicking reset icon
	function reset_row(self) {
		var row = $(self).parents('.row');
		row.find('input').val('');
		row.find('span').text('');
	}
	//Deleting rows after clicking trash icon
	function trash_row(self) {
		var row = $(self).parents('.row:not(:first-child)').remove();	
	}
	//Calculate inputs values when they get blur
	function calculation(self) {
		//getting self(inputs) parent
		var row = $(self).parents('.row');
		//find first and second input with their values
		var val1 = row.find('.val-one').val();
		var val2 = row.find('.val-two').val();
		//finding spans
		var addition_span = row.find('.add-result');
		var subtract_span = row.find('.sub-result');
		var multiply_span = row.find('.mult-result');
		var division_span = row.find('.div-result');
		var modulus_span  = row.find('.mod-result');
		//checking if 2 inputs have values then calculate else remove values
		if (val1 && val2)  {
			val1 = Number(val1);
			val2 = Number(val2);
			//calculates two inputs values
			var adding = val1 + val2;
			var subtracting = val1 - val2;
			var multiplying = val1 * val2;
			var division = val1 / val2;
			var modulus = val1 % val2; 
			//adding already calculated values into spans
			addition_span.text(adding);
			subtract_span.text(subtracting);
			multiply_span.text(multiplying);
			division_span.text(division);
			modulus_span.text(modulus);
			//else if inputs have not values delete texts of spans
		} else {
			row.find('span').text('');	
		}
	}
});
