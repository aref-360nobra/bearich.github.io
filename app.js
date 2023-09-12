let amount = [100, 200, 500, 1000, 50, 10, 5, 2, 69];
let randomElement = amount[Math.floor(Math.random() * amount.length)];

document.getElementById("congratsMsg").innerHTML = "Congratulation! You have own " + randomElement + " BDT";