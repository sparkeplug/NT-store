function validation() {

	var fname=document.getElementById("signup_fname");
	var lname=document.getElementById("signup_lname");
	var email=document.getElementById("signup_email");
	var pass=document.getElementById("signup_pass");
	var cpass=document.getElementById("signup_cpass");
	var mob=document.getElementById("signup_mobile");

	empty(fname);
	empty(lname);
	empty(email);
	empty(pass);
	empty(cpass);
	passcheck(pass,cpass);
	empty(mob);


}

function passcheck(field1,field2){

	/* PASSWORD MATCH validation */

	if((field2!=null)&&(field1.value!=field2.value))
	{
		field2.setCustomValidity("Password doesn't match");
	}
	else
	{
		field2.setCustomValidity('');
	}
}

function empty(field1)
{

	/* EMPTY field validation */

	if(field1.value == '')
	{
		field1.setCustomValidity(field1.getAttribute("name")+" is required");
	}

	/* MOBILE number only check */

	else if(field1.getAttribute("name")=="mobile")
	{
		if(isNaN(field1.value))
		{
			field1.setCustomValidity("Enter only numbers");
		}
	}

	/* no errors setting */

	else
	{
		field1.setCustomValidity('');
	}
}

