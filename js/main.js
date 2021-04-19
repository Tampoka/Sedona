
// Inc and decr numbers in input
jQuery(document).ready(function ($) {
	$('.qtyplus').click(function (e) {
		var $target = $(e.currentTarget),
			$parent = $target.closest('.count-num'),
			$num = $parent.find('.qty');
		currentNum = parseInt($num.val(), 10) || 0;
		$num.val(++currentNum);
	});

	$('.qtyminus').click(function (e) {
		var $target = $(e.currentTarget),
			$parent = $target.closest('.count-num'),
			$num = $parent.find('.qty');
		currentNum = parseInt($num.val(), 10) || 1;
		$num.val(--currentNum);
	});

	//  Slider range
	$(function () {
		$('#slider-range').slider({
			range: true,
			min: 0,
			max: 3000,
			values: [50, 300],
			slide: function (event, ui) {
				$('#amount-min').val('от ' + ui.values[0]);
				$('#amount-max').val('до ' + ui.values[1]);
			},
		});
		$('#amount-min').val('от ' + $('#slider-range').slider('values', 0));
		$('#amount-max').val('до ' + $('#slider-range').slider('values', 1));
	});
	
    // Handler to first output/input
	$('input#amount-min').change(function () {
		var value1 = $('input#amount-min').val();
		var value2 = $('input#amount-max').val();
		if (parseInt(value1) > parseInt(value2)) {
			value1 = value2;
			$('input#amount-min').val(value1);
		}
		$('#slider-range').slider('values', 0, value1);
	});

	// Handler to second output/input
	$('input#amount-max').change(function () {
		var value1 = $('input#amount-min').val();
		var value2 = $('input#amount-max').val();

		if (parseInt(value1) > parseInt(value2)) {
			value2 = value1;
			$('input#amount-max').val(value2);
		}
		$('#slider-range').slider('values', 1, value2);
	});

	// фильтрация ввода в поля
	jQuery('#amount-min, #amount-max').keypress(function (event) {
		var key, keyChar;
		if (!event) var event = window.event;

		if (event.keyCode) key = event.keyCode;
		else if (event.which) key = event.which;

		if (
			key == null ||
			key == 0 ||
			key == 8 ||
			key == 13 ||
			key == 9 ||
			key == 46 ||
			key == 37 ||
			key == 39
		)
			return true;
		keyChar = String.fromCharCode(key);

		if (!/\d/.test(keyChar)) return false;
	});

    
  $('.tabs__control-link').on('click', function (e) {
		e.preventDefault();
		var item = $(this).closest('.tabs__controls-item'),
			contentItem = $('.tabs__item'),
			itemPosition = item.index();
		contentItem
			.eq(itemPosition)
			.add('item')
			.addClass('active')
			.siblings()
			.removeClass('active');
		// item.addClass('active')
		// siblings()
		// .removeClass('active');
  });

  $(function () {
		var sortBy = $('.tabs__controls li a');

		sortBy.click(function () {
			sortBy
				.removeClass('active-link')
				.not(sortBy)
				.add(this)
				.toggleClass('active-link');
		});
  });

});