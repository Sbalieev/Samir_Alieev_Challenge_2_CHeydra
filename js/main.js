var moon = document.getElementById('moon');

var moveMoon = new TimelineMax({repeat: -1});

moveMoon.to(moon, 6.5, { ease: SlowMo.ease.config(0.7, 0.7, false), width:20,left: 2000});

var groet = document.getElementById('groeting');
var moveGroet = new TimelineMax();
moveGroet.from(groet, 2, {fontSize:0});


function showTijd() {
  var date = new Date();
  var u = date.getHours(); //Pakt de uren
  var m = date.getMinutes(); //Pakt de minuten
  var s = date.getSeconds(); //Pakt de secondes

  u = (u < 10) ? "0" + u : u;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var tijd = u + ":" + m + ":" + "<span id='sec'>" + s + "s</span>";
  document.getElementById("tijd").innerHTML = tijd;

  setInterval(showTijd, 1000);


  if(u >= 0 && u <= 4){
    document.getElementById("fases").innerHTML = "Het is nacht";
  } else if(u >= 5 && u <= 12) {
    document.getElementById("fases").innerHTML = "Het is ochtend";
  } else if(u > 12 && u <= 18) {
    document.getElementById("fases").innerHTML = "Het is middag";
  } else if(u > 18 && u <= 23) {
    document.getElementById("fases").innerHTML = "Het is avond";
  }
}
showTijd(); //Zorgt ervoor dat de klok meteen te zien nadat de pagina is geladen

function showDatum() {
  var datum = new Date();
  var dagen = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];


  var dagMaand = datum.getDate();
  var maand = datum.getMonth() + 1;
  var jaar = datum.getFullYear();

  var lDatum = dagMaand + " " + maand + " " + jaar;
  document.getElementById("dagen").innerHTML = lDatum + '</br>' + dagen[datum.getDay()];
}
showDatum(); //Laat de datum zien
