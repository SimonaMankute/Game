
function perskaityk() {
    var text = document.getElementById("skaityti");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

function zaisk() {
    var text = document.getElementById("zaidimas");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function iveskVarda1() {
    var person = prompt("Įvesk savo vardą");
    person = person.substr(0,12);
    alert("Įveskite ne daugiau kaip 12 simbolių.");
    if (person == '') {
      alert("Tai ne vardas. Įveskite savo vardą.");
      return false;
    } else {
        let x = person;
        document.getElementById("vardoLaukas1").value=x;
        alert(`Gražus vardas, ${x}! Gali įrašyti vardus ir kitiems žaidėjams!`);
        document.getElementById("submit").style.display="initial";
        return true;
    }
  }

function iveskVarda2() {
  var person = prompt("Įvesk savo vardą");
  person = person.substr(0,12);
    alert("Įveskite ne daugiau kaip 12 simbolių.");
  if (person == '') {
    alert("Tai ne vardas. Įveskite savo vardą.");
    return false;
  } else {
      let x = person;
      document.getElementById("vardoLaukas2").value=x;
      alert(`Gražus vardas, ${x}! Gali įrašyti vardus ir kitiems žaidėjams!`);
      document.getElementById("submit").style.display="initial";
      return true;
  }
}

function iveskVarda3() {
  var person = prompt("Įvesk savo vardą");
  person = person.substr(0,12);
    alert("Įveskite ne daugiau kaip 12 simbolių.");
  if (person == '') {
    alert("Tai ne vardas. Įveskite savo vardą.");
    return false;
  } else {
      let x = person;
      document.getElementById("vardoLaukas3").value=x;
      alert(`Gražus vardas, ${x}! Gali įrašyti vardus ir kitiems žaidėjams!`);
      document.getElementById("submit").style.display="initial";
      return true;
  }
}

window.onload = function() {
  document.getElementById("vardoLaukas1").value="";
  document.getElementById("vardoLaukas2").value="";
  document.getElementById("vardoLaukas3").value="";
} 

function mygtukai() {
  document.getElementById("playButton1").style.display="initial";
  document.getElementById("playButton2").style.display="initial";
}

function ridenk_paveiksliukas() {
  document.getElementById("statinis").style.display="initial";
  document.getElementById("statinis").src="img/rolling_dice.gif";
  document.getElementById("isridentas").innerHTML="";
  const button = document. querySelector('.button4');
  button.disabled = false;
}

function stabdyk_kauliuka() {
  document.getElementById("judantis").style.display="none";
  document.getElementById("statinis").style.display="none";
  
  var isridentas = Math.floor(Math.random() * 6) + 1;
  var imageContainer = document.getElementById("isridentas");
  if (isridentas == 1) imageContainer.innerHTML = '<img src="img/dice1.jpg">';
  else if (isridentas == 2) imageContainer.innerHTML = '<img src="img/dice2.jpg">';
  else if (isridentas == 3) imageContainer.innerHTML = '<img src="img/dice3.jpg">';
  else if (isridentas == 4) imageContainer.innerHTML = '<img src="img/dice4.jpg">';
  else if (isridentas == 5) imageContainer.innerHTML = '<img src="img/dice5.jpg">';
  else  imageContainer.innerHTML = '<img src="img/dice6.jpg">';
  const button = document. querySelector('.button4');
  button.disabled = true;
}

/*
  if (randomNumber1 === randomNumber2) { 
      document.querySelector("h1").innerHTML = "Draw!"; 
  } 

  else if (randomNumber1 < randomNumber2) { 
      document.querySelector("h1").innerHTML 
          = (player2 + " WINS!"); 
  } 

  else { 
      document.querySelector("h1").innerHTML 
          = (player1 + " WINS!"); 
  } */


/*
window.onload=function() {
  var canvas = document.getElementById('dice1');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();  
  }
}*/

