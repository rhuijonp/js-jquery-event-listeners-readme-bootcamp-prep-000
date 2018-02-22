//define functions here
function getIt() {
	$('p').on('click', function() {
		alert('Hey');
	})
}

function frameIt() {
	$('img').addClass('tasty');
}

function pressIt() {
	$('input#typing').on('keydown', function(key) { 
		if (key.which === 71) {
			alert("G");
		}
	})
}

function submitIt () {
	$("form").on('submit', function(){
		alert('your form is going to be submitted now');
	});
}
$(document).ready(function(){

// call functions here

});
