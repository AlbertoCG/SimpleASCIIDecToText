$(document).ready(function(){
	var key;
	var aux;
	$("#ascii").change(function(){
		$("#text").empty();
		key = $(this).val().split(" ");
		$.each(key, function(index, value){
			if(value != "" && value != 32){
				aux = "&#"+value.toString()+";";
			}
			else if(value == 32){
				aux = " ";
			}
				$("#text").append(aux);
		});

	});
});