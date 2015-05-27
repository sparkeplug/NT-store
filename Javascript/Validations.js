/* SIGN UP FUNCTIONS */

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



}

function passcheck(field1,field2){

	/* PASSWORD MATCH validation */

	if((field2!=null)&&(field1.value!=field2.value))
	{
		$(field2).addClass("alert-danger");
		field2.setCustomValidity("Password doesn't match");
	}
	else
	{
		$(field2).removeClass("alert-danger");
		field2.setCustomValidity('');
	}
}

function empty(field1)
{

	/* EMPTY field validation */

	if(field1.value == '')
	{
		$(field1).addClass("alert-danger");
		field1.setCustomValidity(field1.getAttribute("name")+" is required");
	}

	/* MOBILE number only check

	else if(field1.getAttribute("name")=="mobile")
	{
		if(isNaN(field1.value))
		{
			field1.setCustomValidity("Enter only numbers");
		}
	}*/

	/* no errors setting */

	else
	{
		field1.setCustomValidity('');
		$(field1).removeClass("alert-danger");
	}
}


/* SIGN IN FUNCTIONS */

function login(){
	var user=document.getElementById("login_username");
	var pass=document.getElementById("login_pass");

	verify(user);
	verify(pass);

}

function verify(field)
{

	/* EMPTY field validation */

	if(field.value == '')
	{
		$(field).addClass("alert-danger");
		field.setCustomValidity("Enter "+field.getAttribute("name"));

	}

	/* no errors setting */

	else
	{
		$(field).removeClass("alert-danger");
		field.setCustomValidity('');

	}
}

$(document).ready(function(){
	$('#frgt_btn').click(function(){
		window.prompt("Please enter your registered email id to recover password !","recovery email ID");
	});
});
