/*if (typeof jQuery === 'undefined') {
    throw new Error('buttonstuff JavaScript requires jQuery');
}*/

//$(document).ready(function() {
(function($){
    // The maximum number of options
    var MAX_OPTIONS = 5;
	
	// Add button click handler
	.on('click', '.addButton', function() {
		var $template = $('#optionTemplate'),
			$clone    = $template
							.clone()
							.removeClass('hide')
							.removeAttr('id')
							.insertBefore($template),
			$option   = $clone.find('[name="option[]"]');

		// Add new field
		$('#surveyForm').bootstrapValidator('addField', $option);
	})

	// Remove button click handler
	.on('click', '.removeButton', function() {
		var $row    = $(this).parents('.form-group'),
			$option = $row.find('[name="option[]"]');

		// Remove element containing the option
		$row.remove();

		// Remove field
		$('#surveyForm').bootstrapValidator('removeField', $option);
	})

	// Called after adding new field
	.on('added.field.bv', function(e, data) {
		// data.field   -> The field name
		// data.element -> The new field element
		// data.options -> The new field options

		if (data.field === 'option[]') {
			if ($('#surveyForm').find(':visible[name="option[]"]').length >= MAX_OPTIONS) {
				$('#surveyForm').find('.addButton').attr('disabled', 'disabled');
			}
		}
	})

	// Called after removing the field
	.on('removed.field.bv', function(e, data) {
	   if (data.field === 'option[]') {
			if ($('#surveyForm').find(':visible[name="option[]"]').length < MAX_OPTIONS) {
				$('#surveyForm').find('.addButton').removeAttr('disabled');
			}
		}
	};
})(jQuery);
//	});
//});

/*bootstrap_alert = function() {}
bootstrap_alert.warning = function(message) {
            $('#alert_placeholder').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
        }

$('#clickme').on('click', function() {
            bootstrap_alert.warning('Your text goes here');
});
*/