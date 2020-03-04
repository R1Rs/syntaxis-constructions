let buy = document.getElementById("buy");
let sumBuy = buy.textContent.trim();

let button = document.getElementById("but");
button = addEventListener("click", verificationSum);

function verificationSum() {
    console.log(sumBuy);
}