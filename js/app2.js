// ##### Reservation ########//#endregion
/*button*/
var voiture = [
  {
    nom: "BMW",
    prix: "800 DH",
    desc: "Kilométrage illimité + Service Inclus",
    path: "./images/car-american-1.jpeg"
  },

  {
    nom: "REANUALT",
    prix: "100 DH",
    desc: "Kilométrage illimité + Service Inclus",
    path: "./images/car-american-2.jpeg"
  },

  {
    nom: "HYUNDAI",
    prix: "168 DH",
    desc: "Kilométrage illimité + Service Inclus",
    path: "./images/car-american-2.jpeg"
  }
];
// var information = document.getElementsByClassName("information");
// var title = document.createElement("H1");
// var prix = document.createElement("p");
// var desc = document.createElement("p");
// var img = document.createElement("img");
// img.setAttribute("id", "taille");
// var liste, texte;
var selectedValue = "";
// var dateEntered = "";
// var dateEntered2 = "";
// var date1;
// var nom2 = document.getElementById("Nom");
// var prenom2 = document.getElementById("Prenom");
var Date_debut2 = document.getElementById("Date");
// var EMAIL = document.getElementById("EMAIL");
// var duree;
var date = document.getElementById("datetime").value;
var duree = document.getElementById("inpt").value;
// var g;
// var titre = document.getElementById("titre");
// var image = document.querySelector(".taille");

function getSelectValue() {
  selectedValue = document.getElementById("liste").value;
}

function getdate2() {
  var input = document.getElementById("datetime").value;
  dateEntered = new Date(input);

  //   // console.log(dateEntered.getFullYear());
}
// function getdate1() {
//   var input = document.getElementById("datepermis").value;
//   dateEntered2 = new Date(input);

//   // console.log(dateEntered.getFullYear());
// }
document.getElementById("btnres").addEventListener("click", () => {
  duree = document.getElementById("inpt").value;
  //   console.log(dateEntered);
  if (dateEntered == "" || duree == "" || selectedValue == "") {
    alert("remplir les champs");
  } else {
    document.getElementsByClassName("popup")[0].style.display = "block";
  }
});

document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function() {
    document.getElementsByClassName("popup ")[0].style.display = "none";
  });
function carSelect() {
  for (var i = 0; i < voiture.length; i++) {
    if (selectedValue == voiture[i].nom) {
      var info = document.getElementsByClassName("carSelect");
      var img = document.createElement("img");
      var title = document.createElement("h1");
      var duree = document.createElement("p");
      var date = document.createElement("p");
      img.src = voiture[i].path;
      title.innerText = voiture[i].nom;
      duree.innerText = document.getElementById("inpt").value;
      info[0].appendChild(img);
      info[0].appendChild(title);
      info[0].appendChild(duree);
      info[0].appendChild(date);
    }
  }
}
