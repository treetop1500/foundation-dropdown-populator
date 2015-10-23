/*
 * Foundation Dropdown Populator v1.1.0 by @treetop1500
 * https://github.com/treetop1500/foundation-dropdown-populator
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		/* AMD */
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		/* CommonJS */
		factory(require('jquery'));
	} else {
		/* Browser globals */
		factory(jQuery);
	}
}(function( $ ) {
	$.fn.dropdownPopulator = function(options) {
		var settings = $.extend({
			closeOnClick: true,
			debug: false
		}, options );
		console.log(this);
		this.find('td').css('cursor','pointer').on('click',function() {
			console.log($(this));
			$cell_value = $(this).attr('rel');
			$dropdown_id = $(this).closest('div.content').attr('id');
			$anchor = $("a[data-dropdown*='"+$dropdown_id+"']");
			$input = $($anchor).closest('div.row').find('input');
			if ($input.val($cell_value) && settings.closeOnClick) {
				Foundation.libs.dropdown.close($('#' + $dropdown_id));
			}
			if (settings.debug == true) {
				console.log('-----------------');
				console.log('cell_value ' + $cell_value);
				console.log('$dropdown_id ' + $dropdown_id);
				console.log('$anchor ' + $anchor.attr('id'));
				console.log('$input ' + $input.attr('id'));
			}
		});

		return this;
	};
}));