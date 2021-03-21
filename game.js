window.onload = function() {
  document.getElementById("vardoLaukas1").value="";
  document.getElementById("vardoLaukas2").value="";
  document.getElementById("vardoLaukas3").value="";
} 

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
    var person = prompt("Įvesk savo vardą! (ne daugiau kaip 12 simbolių)");
    if (person.length > 12) {
      alert("Įveskite ne daugiau kaip 12 simbolių.");
      return false;
    }   
    else if (person == '') {
      alert("Tai ne vardas. Įveskite savo vardą.");
      return false;
    } else {
        let x = person;
        document.getElementById("vardoLaukas1").value=x;
        alert(`Ačiū! Įrašyk vardus ir kitiems žaidėjams ir tada pradėk žaidimą!`);
        document.getElementById("submit").style.display="initial";
        return true;
    }
  }

  function iveskVarda2() {
    var person = prompt("Įvesk savo vardą! (ne daugiau kaip 12 simbolių)");
    if (person.length > 12) {
      alert("Įveskite ne daugiau kaip 12 simbolių.");
      return false;
    }   
    else if (person == '') {
      alert("Tai ne vardas. Įveskite savo vardą.");
      return false;
    } else {
        let x = person;
        document.getElementById("vardoLaukas2").value=x;
        alert(`Ačiū! Įrašyk vardus ir kitiems žaidėjams ir tada pradėk žaidimą!`);
        document.getElementById("submit").style.display="initial";
        return true;
    }
  }

  function iveskVarda3() {
    var person = prompt("Įvesk savo vardą! (ne daugiau kaip 12 simbolių)");
    if (person.length > 12) {
      alert("Įveskite ne daugiau kaip 12 simbolių.");
      return false;
    }   
    else if (person == '') {
      alert("Tai ne vardas. Įveskite savo vardą.");
      return false;
    } else {
        let x = person;
        document.getElementById("vardoLaukas3").value=x;
        alert(`Ačiū! Įrašyk vardus ir kitiems žaidėjams ir tada pradėk žaidimą!`);
        document.getElementById("submit").style.display="initial";
        return true;
    }
  }



function mygtukai() {
  document.getElementById("playButton1").style.display="initial";
  document.getElementById("playButton2").style.display="initial";
  document.getElementById("statinis1").style.display="initial";
  document.getElementById("statinis2").style.display="initial";
  document.getElementById("statinis3").style.display="initial";
  document.getElementById("submit").style.display="none";

}

function ridenk_paveiksliukas() {
  document.getElementById("statinis1").style.display="initial";
  document.getElementById("statinis1").src="img/rolling_dice.gif";
  document.getElementById("statinis2").style.display="initial";
  document.getElementById("statinis2").src="img/rolling_dice.gif";
  document.getElementById("statinis3").style.display="initial";
  document.getElementById("statinis3").src="img/rolling_dice.gif";

  document.getElementById("isridentas1").innerHTML="";
  document.getElementById("isridentas2").innerHTML="";
  document.getElementById("isridentas3").innerHTML=""; 
  document.getElementById("rezultatas").innerHTML="";
  const button = document. querySelector('#playButton2');
  button.disabled = false;
}

function stabdyk_kauliuka() {
  
  document.getElementById("statinis1").style.display="none";
  document.getElementById("statinis2").style.display="none";
  document.getElementById("statinis3").style.display="none";
  
  
  var isridentas1 = Math.floor(Math.random() * 6) + 1;
  var imageContainer1 = document.getElementById("isridentas1");

  var isridentas2 = Math.floor(Math.random() * 6) + 1;
  var imageContainer2 = document.getElementById("isridentas2");

  var isridentas3 = Math.floor(Math.random() * 6) + 1;
  var imageContainer3 = document.getElementById("isridentas3");
 
  if (isridentas1 == 1) imageContainer1.innerHTML = '<img src="img/dice1.jpg">';
  else if (isridentas1 == 2) imageContainer1.innerHTML = '<img src="img/dice2.jpg">';
  else if (isridentas1 == 3) imageContainer1.innerHTML = '<img src="img/dice3.jpg">';
  else if (isridentas1 == 4) imageContainer1.innerHTML = '<img src="img/dice4.jpg">';
  else if (isridentas1 == 5) imageContainer1.innerHTML = '<img src="img/dice5.jpg">';
  else  imageContainer1.innerHTML = '<img src="img/dice6.jpg">';
  
  if (isridentas2 == 1) imageContainer2.innerHTML = '<img src="img/dice1.jpg">';
  else if (isridentas2 == 2) imageContainer2.innerHTML = '<img src="img/dice2.jpg">';
  else if (isridentas2 == 3) imageContainer2.innerHTML = '<img src="img/dice3.jpg">';
  else if (isridentas2 == 4) imageContainer2.innerHTML = '<img src="img/dice4.jpg">';
  else if (isridentas2 == 5) imageContainer2.innerHTML = '<img src="img/dice5.jpg">';
  else  imageContainer2.innerHTML = '<img src="img/dice6.jpg">';

  if (isridentas3 == 1) imageContainer3.innerHTML = '<img src="img/dice1.jpg">';
  else if (isridentas3 == 2) imageContainer3.innerHTML = '<img src="img/dice2.jpg">';
  else if (isridentas3 == 3) imageContainer3.innerHTML = '<img src="img/dice3.jpg">';
  else if (isridentas3 == 4) imageContainer3.innerHTML = '<img src="img/dice4.jpg">';
  else if (isridentas3 == 5) imageContainer3.innerHTML = '<img src="img/dice5.jpg">';
  else  imageContainer3.innerHTML = '<img src="img/dice6.jpg">';
  
  const button = document. querySelector('#playButton2');
  button.disabled = true;

  var content3 = document.getElementById("vardoLaukas3").value;
  var content2 = document.getElementById("vardoLaukas2").value;
  var content1 = document.getElementById("vardoLaukas1").value;
  

  if(isridentas1 == isridentas2 & isridentas1 == isridentas3 & isridentas2 == isridentas3) {
    alert("Lygiosios! Galite ridenkti kauliukus dar kartą!");
  }
  else if (isridentas1 > isridentas2 & isridentas1 > isridentas3) {
    alert(`Sveikinimai! Laimėjo ${content1}! Galite ridenkti kauliukus dar kartą!`);
  }
  else if (isridentas2 > isridentas1 & isridentas2 > isridentas3) {
    alert(`Sveikinimai! Laimėjo ${content2}! Galite ridenkti kauliukus dar kartą!`);
  }
  else if (isridentas1 > isridentas2 & isridentas1 > isridentas3 & isridentas2 == isridentas3) {
    alert(`Sveikinimai! Laimėjo ${content1}! Galite ridenkti kauliukus dar kartą`);
  }
  else if (isridentas2 > isridentas1 & isridentas2 > isridentas3 & isridentas1 == isridentas3) {
    alert(`Sveikinimai! Laimėjo ${content2}! Galite ridenkti kauliukus dar kartą!`);
  }
  else if (isridentas3 > isridentas1 & isridentas3 > isridentas2 & isridentas1 == isridentas2) {
    alert(`Sveikinimai! Laimėjo ${content3}! Galite ridenkti kauliukus dar kartą!`);
  }
  else if (isridentas1 == isridentas2 || isridentas1 == isridentas3 || isridentas2 == isridentas3) {
    alert(`Niekas nelaimėjo. Ridenkti kauliukus dar kartą!`);
  }
  else alert(`Sveikinimai! Laimėjo ${content3}! Galite ridenkti kauliukus dar kartą!`);
}
