// JavaScript - Interactive functionality

// SHOW OR HIDE PASSWORD

function togglePassword() {

    let input = document.getElementById("password");

    let eye = document.getElementById("eyeBtn");

    input.type =
        input.type === "password" ? "text" : "password";

    eye.classList.toggle("showing", input.type === "text");

}


// RANDOM PERCENTAGE

function randomPercentage(values) {

    let random = new Uint32Array(1);

    crypto.getRandomValues(random);

    return values[random[0] % values.length];

}


// CHECK PASSWORD

function checkPassword() {

    let password =
        document.getElementById("password").value.trim();
