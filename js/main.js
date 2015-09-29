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
		swal("ok!");
	}
	else
	{
		swal(errorMessage);
	}
}

$("#buttonInput").on("click",function(){
	
	validateForm();
});