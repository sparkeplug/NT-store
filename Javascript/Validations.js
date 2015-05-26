function validation() {
	var fname=document.getElementById("firstname").value;
	if (fname == null || fname == "") {
        alert(" First Name must be filled out");

		$('#firstname').addClass('alert');
		 return false;

    }
}



