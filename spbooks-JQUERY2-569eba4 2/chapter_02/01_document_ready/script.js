$(document).ready(function(){
  // alert('Welcome to StarTrackr! Now no longer under police investigation!');

	// 1.) START BY SELECTING ALL THE TABLE ROWS
	// $('tr')
	// 2.) We decide we don't want to target all Table rows but just the 
	// ones for the $('#celebs') table. As such we get more specific.
	// we are using the id #celebs over .data bc we only want it to effect that 
	// specific and unique element in the DOM
	// $('#celebs tr')
	// to Test your selection use .length property

	alert($('#celebs tbody tr:even').length+' elements');

});