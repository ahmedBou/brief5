// const navbarBtn = document.querySelector(".navbar_btn");
// const navbarLinks = document.querySelector(".navbar_links");

// navbarBtn.addEventListener("click", function() {
//   let value = navbarLinks.classList.contains("navbar_collapse");
//   if (value) {
//     navbarLinks.classList.remove("navbar_collapse");
//     navbarBtn.classList.remove("change");
//   } else {
//     navbarLinks.classList.add("navbar_collapse");
//     navbarBtn.classList.add("change");
//   }
// });
// preloader;
// window.addEventListener("load", () =>
//   document.querySelector(".preloader").classList.add("hidePreloader")
// );

var firstName = document.getElementsByClassName("enter");
var liste_msg = ["first name", "last name", "email", "password"];
var button = document.getElementsByClassName("btn");
var error = document.getElementsByClassName("error");
button[0].addEventListener("click", function validation() {
  for (var i = 0; i <= firstName.length; i++) {
    if (firstName[i].value == "") {
      alert("please enter " + liste_msg[i]);
      break;
      error[i].innertext = "enter your" + liste_msg[i];

      console.log(firstName[i - 1]);
      // } // else if (firstName[i - 1].value != firstName[i].value && i == 3) {
      alert("le password doesn't match");
    }
  }
});
const myForm = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll(".error");
const required = ["email", "userName"];
myForm.addEventListener("submit", validation);
function validation(e) {
  // console.log(e);
  let data = {};
  e.preventDefault();
  errors.forEach(function(item) {
    item.classList.add("hide");
  });
  let error = false;
  // all inputs
  inputs.forEach(function(el) {
    // console.log(el);
    var recup;
    let tempName = el.getAttribute("name");

    // console.log(tempName);
    if (tempName != null) {
      el.borderColor = "#ddd";
      // console.log(el.value.length);
      // console.log(required.includes(tempName));

      if (el.value.length == 0 && required.includes(tempName)) {
        addError(el, "Required Field", tempName);
      }
      if (tempName == "email") {
        let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
        let result = exp.test(el.value);
        if (!result) {
          addError(el, "Invalid Email", tempName);
          error = true;
        }
        // console.log(result);
      }
      if (tempName == "password" || tempName == "confirm password") {
        let exp = /[A-Za-z0-9]+$/;
        let result = exp.test(el.value);
        if (!result) {
          addError(el, " Only numbers and letters", tempName);
          error = true;
        }
        if (!(el.value.length > 3 && el.value.length < 8)) {
          addError(el, " Needs to be between 3-8 characters", tempName);
        }
      }

      data[tempName] = el.value;
      // }
      let pass = document.getElementById("pass");
      let cpass = document.getElementById("cpass");
      if (pass.value == cpass.value || pass.value != "" || cpass.value != "") {
        console.log("ok");
      } else {
        alert("verifier les champs");
      }
    }
  });
  console.log(data);
}
function addError(el, mes, fieldName) {
  let temp = el.nextElementSibling;
  temp.classList.remove("hide");
  temp.textContent = fieldName.toUpperCase() + " " + mes;
  el.style.borderColor = "red";
  el.focus();
}
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
    document.getElementsByClassName("generale")[0].style.display = "block";
    // $("html,body").animate(
    // {
    //         scrollTop: $(".generale").offset().top
    //       },
    //       "slow"
    //     );
    //     for (var i = 0; i < voiture.length; i++) {
    //       if (selectedValue == voiture[i].nom) {
    //         title.innerText = voiture[i].nom;
    //         prix.innerText = voiture[i].prix;
    //         desc.innerText = voiture[i].desc;
    //         img.src = voiture[i].path;
    //         g = i;
    //         information[0].appendChild(title);
    //         information[0].appendChild(prix);
    //         information[0].appendChild(desc);
    //         information[0].appendChild(img);
    //         break;
    //       }
    //     }
  }
});
function carSelect() {
  for (var i = 0; i <= voiture.length; i++) {
    if (selectedValue == voiture[i].nom) {
      var info = document.getElementsByClassName("carSelect");
      var img = document.createElement("img");
      var title = document.createElement("h1");
      var duree = document.createElement("p");
      var date = document.createElement("p");
      img.src = voiture[i].path;
      title.innerText = voiture[i].nom;
      duree.innerText = document.getElementById("inpt").value;
    }
  }
}
