(function ($) {

	/*
	TODO:
	1. refactor, combine params
	2. orientation set functionality
	3. set transition effect
	 */

	$.fn.blockGraph = function (options) {
		var settings = $.extend({
			orientation: 'horizontal' // use it later
		}, options);

		return this.each (function () {
			var self = this,
				$graphContent = $(self).find('.graph-content').first(),
				$spanContent = $(self).find('span').first(),
				height = $graphContent.data('percent') === 0 ? 2 : $graphContent.data('percent'),
				percentage = $graphContent.data('percent');

			// set the initial height during page load
			$graphContent.height(height + 'px');

			// set the initial percentage
			$spanContent.text(percentage + '%');
		});
	};

	$.fn.blockGraphController = function (options) {

		return this.each (function (e) {
			var $button = $(this).find('button'),
				target,
				selected = $(this).find(':selected').attr('name'),
				$selectedGraph,
				isOver = false;

			$selectedGraph = $('#' + selected);

			$('button').on('click', function (e) {
				target = e.target.id;
				var $divPercent = $selectedGraph.find('.graph-content').first(),
					$spanPercent = $selectedGraph.find('span').first(),
					percent = $divPercent.data('percent');

				switch (target) {
					case 'add':
						percent += (25/100 * 200);
						isOver = percent > 200;
						break;
					case 'subtract':
						percent -= (25/100 * 200);
						isOver = percent < 0;
						break;
				}

				// update the data attribute
				$divPercent.data('percent', percent);
				$divPercent.attr('data-percent', percent);
				// update the graph, set 2 as the lowest number to keep the graph visible
				$divPercent.height(percent <= 0 ? 2 : percent);
				// update the percentage text
				$spanPercent.html(percent/2 + '%');

				if (isOver) {
					$divPercent.css('background-color', 'red');
				} else {
					$divPercent.css('background-color', 'blue');
				}
			});
		});
	};
}(jQuery));
