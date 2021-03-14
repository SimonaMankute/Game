
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
    if (person == '') {
      alert("Tai ne vardas. Įveskite savo vardą.");
      return false;
    } else {
        let x = person;
        document.getElementById("vardoLaukas1").value=x;
    }
  }

function iveskVarda2() {
  var person = prompt("Įvesk savo vardą");
  if (person == '') {
    alert("Tai ne vardas. Įveskite savo vardą.");
    return false;
  } else {
      let x = person;
      document.getElementById("vardoLaukas2").value=x;
  }
}

function iveskVarda3() {
  var person = prompt("Įvesk savo vardą");
  if (person == '') {
    alert("Tai ne vardas. Įveskite savo vardą.");
    return false;
  } else {
      let x = person;
      document.getElementById("vardoLaukas3").value=x;
      alert(`Gražus vardas, ${x}! Gali įrašyti vardus ir kitiems žaidėjams!`);
      return true;
  }
}

window.onload = function() {
  document.getElementById("vardoLaukas1").value="";
  document.getElementById("vardoLaukas2").value="";
  document.getElementById("vardoLaukas3").value="";
} 

