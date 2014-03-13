$(document).ready(function(){
	// the :first filter will return the first element among those matched by
	// the selector
 	var fontSize = $('#celebs tbody tr:first').css('font-size');
 	// 	TIP: you can ask for a css property after selecting
 	// multi elements but it is normally a BAD IDEA
 	// Reason: a funion will only returna single result so you'll
 	// obtain the property for the first matched elements

 	alert(fontSize);
});