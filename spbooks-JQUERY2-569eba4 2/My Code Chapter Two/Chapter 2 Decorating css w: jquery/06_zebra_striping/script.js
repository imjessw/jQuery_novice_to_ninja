$(document).ready(function(){
	// broken down : The code is saying on every even table row after 
	// the tbody change the css to have a background color of purple
 	$('#celebs tbody tr:even').css('background-color','#331524');
 		// this funtion has to be run inside doc ready bc if it wasn't, it would
 		// run before thr page loded leading to no tr to actuallt affect.
 		


});