var groet = document.getElementById('groetTekst');
var moveGroet = new TimelineMax();
moveGroet.to(groet, 2, {ease: Bounce.easeOut, y: 350 });

var input = document.getElementById('input');
var moveInput = new TimelineMax();
moveInput.to(input, 0.9, {css: {opacity:"1"}, delay:5, ease:Power2.easeOut});

var button = document.getElementById('button');
var moveButton = new TimelineMax();
moveButton.to(button, 0.9, {css: {opacity:"1"}, delay:5.5, ease:Power2.easeOut});

var containerInfo = document.getElementById('containerInfo');
var moveContainerInfo = new TimelineMax();
moveContainerInfo.to(containerInfo, 8, {css: {opacity:"1"}, delay:2, ease:Power2.easeOut});

var img = document.getElementById('img');
var moveImg = new TimelineMax();
moveImg.to(img, 8, {css: {opacity:"1"}, delay:2, ease:Power2.easeOut});

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

  u = (u < 10) ? "0" + u : u;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var tijd = u + ":" + m + ":" + "<span id='sec'>" + s + "s</span>";
  document.getElementById("tijd").innerHTML = tijd;

  setInterval(showTijd, 1000);


  if(u >= 0 && u <= 4){
    document.getElementById("fases").innerHTML = "Nacht";
  } else if(u >= 5 && u <= 12) {
    document.getElementById("fases").innerHTML = "Ochtend";
  } else if(u > 12 && u <= 18) {
    document.getElementById("fases").innerHTML = "Middag";
  } else if(u > 18 && u <= 23) {
    document.getElementById("fases").innerHTML = "Avond";
  }
}
showTijd(); //Zorgt ervoor dat de klok meteen te zien nadat de pagina is geladen

function showDatum() {
  var datum = new Date();
  var dagen = ["ZO","MA","DI","WO","DO","VR","ZA"];


  var dagMaand = datum.getDate();
  var maand = datum.getMonth() + 1;
  var jaar = datum.getFullYear();

  var lDatum = dagMaand + " " + maand + " " + jaar;
  document.getElementById("dag").innerHTML = dagen[datum.getDay()] + " " + lDatum ;
}
showDatum(); //Laat de datum zien
