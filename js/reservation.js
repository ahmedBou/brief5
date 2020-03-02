// ##### Reservation ########//
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

var selectedValue = "";
var dateEntered = "";
var Date_debut2 = document.getElementById("Date");

var date = document.getElementById("datetime").value;
var duree = document.getElementById("inpt").value;

function getSelectValue() {
  selectedValue = document.getElementById("liste").value;
}

function getdate2() {
  var input = document.getElementById("datetime").value;
  dateEntered = new Date(input);
}

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
    document.location.reload();
  });
var voitures = document.getElementById("voiture");
var durees = document.getElementById("duree");
function carSelect() {
  for (var i = 0; i < voiture.length; i++) {
    if (selectedValue == voiture[i].nom) {
      var img = document.createElement("img");
      var info = document.getElementsByClassName("carSelect");
      var title = document.createElement("h1");
      var duree = document.createElement("p");
      img.src = voiture[i].path;
      title.innerText = voiture[i].nom;
      duree.innerText = document.getElementById("inpt").value;

      info[0].appendChild(img);

      voitures.appendChild(title);
      durees.appendChild(duree);
    }
  }
}
