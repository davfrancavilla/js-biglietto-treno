document.getElementById("button").addEventListener("click", cost); 


function cost() {
    var km = document.getElementById("km").value;
    var age = document.getElementById("age").value;
    if (km > 0 && age > 0) {
        document.getElementById("km-error").style.display = "none";
        document.getElementById("age-error").style.display = "none";
        cost = km * 0.21;
        if (age < 18) {
            cost *= 0.8;
        } else if (age > 65) {
            cost *= 0.6;
        }
        document.getElementById("price").style.display = "block";
        document.getElementById("price").innerHTML = (Math.round((cost + Number.EPSILON) * 100) / 100) + "€";
    } else if ((km <= 0 && age <= 0) || ((km / 1) != km && (age / 1) != age)) {
        document.getElementById("km-error").style.display = "block";
        document.getElementById("km-error").innerHTML = ("Inserire un numero positivo");
        document.getElementById("age-error").style.display = "block";
        document.getElementById("age-error").innerHTML = ("Inserire un numero positivo");
    } else if (km <= 0 || ((km / 1) != km && (age / 1) == age)) {
        document.getElementById("age-error").style.display = "none";
        document.getElementById("price").style.display = "none";
        document.getElementById("km-error").style.display = "block";
        document.getElementById("km-error").innerHTML = ("Inserire un numero positivo");
    } else if (age <= 0 || ((km / 1) == km && (age / 1) != age)) {
        document.getElementById("km-error").style.display = "none";
        document.getElementById("price").style.display = "none";
        document.getElementById("age-error").style.display = "block";
        document.getElementById("age-error").innerHTML = ("Inserire un numero positivo");
    }
}


