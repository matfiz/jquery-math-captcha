# jQuery Math Captcha

This plugin provides basic CAPTCHA mechanism based on solving simple one-digit number operations (summation and multiplication).

## Usage

Please have a look at demo/index.html. In order to use the plugin:
1. Copy the content of src/ to your project.
2. Require JS and CSS:

```html
<link rel="stylesheet" type="text/css" href="../src/jquery.math-captcha.css" /> 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="../src/jquery.math-captcha.js"></script>

```

3. Initialize the plugin in one of your js files, for example:

```javascript
$("#math-captcha").mathCaptcha({
				imgPath: '../src/img/',
				operation: "random",
				introText: 'Please enter the result of equation:',
				successFunction: function() {
					form = $('form');
					form.append('<p><input type="submit" value="Submit"></p>');
					$('.math-captcha-error').remove();
				},
				failFunction: function() {
					form = $('form');
					form.find('input[type="submit"]').remove();
					if ($('.math-captcha-error').length < 1) {
						$('#math-captcha').append("<p class='math-captcha-error'>Wrong result!</p>");
					}
				}
			});
```

== Options
| Option | Values (default) | Description |
| ------ | ---------------  | ----------- |
| imgPath | ('/img/') | Provides relative path, where plugin images are stored |
| operation | random, plus, times (random) | Select mathematical operation |
| introText | ('Please enter the result of equation:') | Text explaining how to solve captcha. |
| successFunction | - | Callback function when CAPTCHA solve properly. |
| failFunction | - | Callback function when CAPTCHA solved in a wrong way. |

== License
Copyright 2014 Grzegorz Brzezinka, Mariusz Henn

Released under the MIT license
