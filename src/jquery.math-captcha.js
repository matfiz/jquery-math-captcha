/*!
 * jQuery Math Captcha Plugin v1.0.0
 * https://github.com/matfiz/jquery-math-captcha
 *
 * Copyright 2014 Grzegorz Brzezinka, Mariusz Henn
 * Released under the MIT license
 */
 
 (function( $ ) {
 
    $.fn.mathCaptcha = function( options ) {
	
		var settings = $.extend({
			operation: "random",
			imgPath: 'img/',
			introText: 'Please enter the result of equation:'
        }, options );
		
		var numbers = {
			1: settings.imgPath+'jeden.png',
			2: settings.imgPath+'dwa.png',
			3: settings.imgPath+'trzy.png',
			4: settings.imgPath+'cztery.png',
			5: settings.imgPath+'piec.png',
			6: settings.imgPath+'szesc.png',
			7: settings.imgPath+'siedem.png',
			8: settings.imgPath+'osiem.png',
			9: settings.imgPath+'dziewiec.png',
			0: settings.imgPath+'zero.png'
		}
		var operations = {
			plus: settings.imgPath+'dodaj.png',
		    times: settings.imgPath+'pomnoz.png'
		}
		var equal = settings.imgPath+'rownosc.png';
		
		var displayImage = function(src) {
			return "<img src='"+src+"'>";
		}
		var displayNumber = function(num) {
			return displayImage(numbers[num]);
		}
		
		//generate random numbers 0-9
		var number1 = Math.floor(Math.random() * 10);
		var number2 = Math.floor(Math.random() * 10);
		//select operation
		if (settings.operation == 'random') {
			if (Math.random() > 0.5) {
				var operation = 'plus';
			}
			else
			{
				var operation = 'times';
			}
		}
		else 
		{
			var operation = settings.operation;
		}
		
		//generate input
		var input = "<input type='number' id='math-captcha-result'>";
		var intro = "<p>"+settings.introText+"</p>";
		if (operation == 'plus') {
			var operationImg = displayImage(operations.plus);
		}
		else
		{
			var operationImg = displayImage(operations.times);
		}
		this.html(intro+displayNumber(number1)+operationImg+displayNumber(number2)+displayImage(equal)+input);
		this.addClass('math-captcha');
		
		$('body').on('keyup','#math-captcha-result',function() {
			if (operation == 'plus') {
				var condition = parseInt($(this).val()) === number1+number2;
			}
			else
			{
				var condition = parseInt($(this).val()) === number1*number2;
			}
			if (condition) {
				settings.successFunction.call()
			}
			else
			{
				settings.failFunction.call()
			}
		});
		
		return this;
 
    };
 
}( jQuery ));