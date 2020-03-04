let buy = document.getElementById("buy");
let sumBuy = buy.textContent.trim();

let button = document.getElementById("but");
button = addEventListener("click", verificationSum);

verificationSum() {
    console.log(sumBuy);
}