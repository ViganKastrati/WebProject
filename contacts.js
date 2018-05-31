function validateForm() {
    var emri = document.forms["validate"]["username"].value;
    var imella = document.forms["validate"]["email"].value;
    var mesazhi = document.forms["validate"]["message"].value;

    if (emri == "" || imella == "" || mesazhi == "") {
        alert("All information must be filled out");
        return false;

    } 
    else if (!imella.includes("@") || !imella.includes(".com")){
    	alert("Invalid Email Type A Valid Email");
    	return false;
    }

    else {
    	alert("Message sent successfully");
    	return true;
    }

}
