export default verificationSum;

let button = document.getElementById("but");
button.addEventListener("click", verificationSum);

function verificationSum() {
    let buy = document.getElementById("buy");
    let sumBuy = buy.value;
    let parsed = parseInt(sumBuy, 10);
    if (isNaN(parsed)) throw ("введите число");
    console.log(parsed);
}
    