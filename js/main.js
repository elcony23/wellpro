function validateForm()
{
	var validFields = true;
	
	if("" == $("#nameInput").val().replace(/ /g,""))
	{
		validFields = false;
		errorMessage = "Introduce nombre";
	}
	if("" == $("#emailInput").val().replace(/ /g,""))
	{
		validFields = false;
		errorMessage = "Introduce email";
	}
	if("" == $("#msjInput").val().replace(/ /g,""))
	{
		validFields = false;
		errorMessage = "Introduce mensaje";
	}
	
	if(validFields)
	{		

// $.when(someWebService()).done(function()
// {
// 	swal("OK");
// });​​
		$("#buttonInput").html('<i class="fa fa-spinner fa-spin"></i>');
		setTimeout(function(){

			someWebService();
		},500);
		
		// swal("Registro Exitoso", "", "success");
	}
	else
	{
		swal("Favor de llenar campos");
	}
}

$("#buttonInput").on("click",function(){
	
	validateForm();
	
});


function someWebService()
{
	$.post("/js/sendbyemail.php", 
	{
		Nombre : $("#nameInput").val(),
		Correo: $("#emailInput").val(),
		Mensaje  : $("#msjInput").val()
	}, 

	function(response)
	{
		if(response.responseStatus)
		{			
			swal("En breve le responderemos", "", "success");
			$("#buttonInput").html("Enviar");
		}
		
	}, 'json')
	.fail(function(d)
	{	
		$("#buttonInput").html("Enviar");
		console.log(d);
	});
}