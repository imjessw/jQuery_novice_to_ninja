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
			// $('#celebs tbody tr:even').css(
			// 	{'background-color':'#331524',
			// 	 'color':'#ff69b4',
			// 	 'font-size': '11px'
			// });
	// Now the above code doe steh job however the problem is this:
	// this adds the style sin the HTML, and no one likes that... its gross 
	// so what do we do? we create a custom class in our css to call the 
	// class name when we need it to invoke the new styles. This keeps everything pretty
	// and as I put it keeps it looking like "synatactic sugar"
	// First we go into our css file and add and in jQuery add an . add class
	// Basic set up:
		// ('div').addClass('class_name');
	// Also if you want to add multiple new classes
		// ('div').addClass('class_name1 class_name2 class_name3');
	// Now how to apply this to our website
	 		// **In CSS**
	 			// .zebra{
	 				// 'background-color':'#331524',
					//'color':'#ff69b4',
					//'font-size': '11px'
	 			//}
	// Now back in jQuery using the previous way of targeting what we want to highlight 
	// we are now going to use an .addClass of .zebra which is adding the zebra class to 
	// every even tr
		// $('#celebs tr:even').addClass('zebra');
	// this gives us the same results as using the .css however it removes the inline styles. 
	// If you ever want to remove that you will use .removeClass
		// $('#celebs tr.zebra').removeClass('zebra')



	// 
// });