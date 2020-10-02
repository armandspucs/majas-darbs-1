function rad(obj,simb) {
	if (obj.value == "+") {
		document.getElementById(simb + obj.id).style.display = "block";
		obj.value = "-";
	} else {
		document.getElementById(simb + obj.id).style.display = "none";
		obj.value = "+";
	}
}