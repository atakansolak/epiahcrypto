document.getElementById("sifrele").addEventListener("click", encode);
document.getElementById("jssifrele").addEventListener("click", encodejs);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("cevap").value = this.responseText;
    }
};

function encode(){
	var text = document.getElementById("epitext").value;
	if(text!=null&&text!=""&&text!=undefined){
		document.getElementById("cevap").placeholder = "Hazırlanıyor";
		document.getElementById("cevap").value = "";
		xhttp.open("POST", "php/test.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("sifrele="+text);
	}
}

function encodejs(){
	var text = document.getElementById("epitext").value;
	if(text!=null&&text!=""&&text!=undefined){
		document.getElementById("cevap").placeholder = "Hazırlanıyor";
		document.getElementById("cevap").value = "";
		document.getElementById("cevap").value = epi(text);
	}
}