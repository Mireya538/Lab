function sendIntrusivo() {
	alert("Submitted sendIntrusivo!");
}
/*
Esto fue lo que intente
(function () {
	var disc = document.getElementById("sendDiscreto").click(function() {
		alert( "Submitted sendDiscreto!" );
	});
	
	//esto es lo que quiero
	//$( "#sendDiscreto" ).click(function() {
  	//	alert( "Submitted sendDiscreto!" );
	//}); 
	
})*/


function sendDiscreto() {
	alert("Submitted sendDiscreto!");
}

var byBtn = document.getElementById('sendDiscreto');
byBtn.onclick = sendDiscreto();