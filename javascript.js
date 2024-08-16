function computeLoan()
{
    var amount = document.getElementById("amount").value;
    var interest = document.getElementById("interest").value;
    var months = document.getElementById("months").value;
    var total = (amount * interest * 0.01) / months;
    var payment = ((amount / months) + total).toFixed(2);
    // payment = payment.toString().replace(/\B(?=(\d{3}) + (?!\d))/g, ",");
    document.getElementById("payment").innerHTML = "Monthly Payment = " + payment;
}