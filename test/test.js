import verificationSum from "../src/add";

test ("test number", () => {
    let sumBuy = "22";
    
})

function verificationSum() {
    let buy = document.getElementById("buy");
    let sumBuy = buy.value;
    let parsed = parseInt(sumBuy, 10);
    if (isNaN(parsed)) throw ("введите число");
    console.log(parsed);
}