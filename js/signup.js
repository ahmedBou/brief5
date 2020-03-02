// Sing up
let iserrors = [true, true, true, true];


function validForm(n) {
    switch (n) {
        case 0:
            var name = document.getElementById("name").value;
            iserrors[n] = name === "" || !/[A-Za-z]+$/.test(name);
            // true = false ||
            break;
        case 1:
            var email = document.getElementById("email").value;
            iserrors[n] =
                email === "" ||
                !/([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/.test(email);
            break;

        case 2:
            var password = document.getElementById("password").value;
            iserrors[n] = password === "" || !/[A-Za-z0-9@\-\_]+$/.test(password);
            break;
        case 3:
            var cpassword = document.getElementById("cpassword").value;
            var password = document.getElementById("password").value;
            iserrors[n] = cpassword !== password;
            break;
    }

    if (iserrors[n]) {
        document.getElementsByClassName("error")[n].style.display = "inline-block";
    } else {
        document.getElementsByClassName("error")[n].style.display = "none";
    }
}

function reservation() {
    for (let i = 0; i < 4; i++) {
        if (iserrors[i]) {
            return;
        }
    }
    window.location.href = "http://127.0.0.1:5501/reservation.html";
}