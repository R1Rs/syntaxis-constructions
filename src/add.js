export default verificationSum;

function verificationSum(sumBuy) {
    let parsed = parseInt(sumBuy, 10);
    if (isNaN(parsed)) throw ("введите число");
    return parsed;
}

    