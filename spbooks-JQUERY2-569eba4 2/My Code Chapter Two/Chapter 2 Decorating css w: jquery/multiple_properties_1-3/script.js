$(document).ready(function(){
	// The easiest way to add a second CSS property is to repeat
	// the entire jQuery statement.
	// example below:
		// $('#celebs tbody tr:even').css("background-color",'#331524')
		// $('#celebs tbody tr:even').css("color",'#ff69b4')
	// A better way of doing it is utilizig Object literals
	// Example below:
		// $('#celebs tbody tr:even').css(
		// 	{'background-color':'#331524', 'color':'#ff69b4'}
		// );
	// The key to the above code: utilizing Object literals
	// The syntax goes as follows: the object literal is wrpped in
	// curly braces and coresponding values and keys are separated
	// by a colon(:),and each key/value pair is seprated by commas.
	// This is particularly useful when needing to specify multiple 
	// key/value pairs (large number of properties)
	// Example Below:
		$('#celebs tbody tr:even').css(
			{'background-color':'#331524',
			 'color':'#ff69b4',
			 'font-size': '11px'
		});
});