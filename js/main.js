function getNaam() {
  var naam = document.getElementById("input").value;
  document.getElementById("persoon").style = "display:block";
  document.getElementById("persoon").innerHTML = naam;

  document.getElementById("img").src="img/pf.jpg";

  document.getElementById("form").style = "display:none";
}

function showTijd() {
	var date = new Date();
	var u = date.getHours(); //Pakt de uren
	var m = date.getMinutes(); //Pakt de minuten
	var s = date.getSeconds(); //Pakt de secondes

	var dagen = ["ZO","MA","DI","WO","DO","VR","ZA"];

	var dagMaand = date.getDate();
	var maand = date.getMonth() + 1;
	var jaar = date.getFullYear();

	var lDatum = dagMaand + " " + maand + " " + jaar;
	document.getElementById("dag").innerHTML = dagen[date.getDay()] + " " + lDatum ;

	u = (u < 10) ? "0" + u : u;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	var tijd = u + ":" + m + ":" + s + "s";
	document.getElementById("tijd").innerHTML = tijd;
	
	//Het toevoegen van nieuwe CSS class
	let className = 'morning';
	
	if(u >= 0 && u < 5){
		className = 'nacht'; //Toevoegen van nieuwe CSS class namelijk Nacht weergave
		document.getElementById("fases").innerHTML = "Nacht";
	} else if(u >= 5 && u < 12) {
		className = 'ochtend'; //Toevoegen van nieuwe CSS class namelijk Ochtend weergave
		document.getElementById("fases").innerHTML = "Ochtend";
	} else if(u >= 12 && u < 18) {
		className = 'middag'; //Toevoegen van nieuwe CSS class namelijk Middag weergave
		document.getElementById("fases").innerHTML = "Middag";
	} else if(u >= 18 && u <= 23) {
		className = 'avond'; //Toevoegen van nieuwe CSS class namelijk Avond weergave
		document.getElementById("fases").innerHTML = "Avond";
	}
document.body.classList.add(className);
	setInterval(showTijd, 1000);
	
}
showTijd(); //Zorgt ervoor dat de klok meteen te zien nadat de pagina is geladen.
