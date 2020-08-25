console.log("Hello, this is a console message!");

function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = (isNaN(amountNumber)) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
}

function showSumPrice(price, amountNumber) {
    amountNumber = amountNumber || 0;
    let showAmount = document.querySelector("span.show-amount");

    if ( amountNumber > 10 ) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if ( amountNumber < 1 ) {
        alert("Minimum 1 terméket vásárolhat!");
    } else {
        let amount = amountNumber * price;
        
        showAmount.innerHTML = amount;
    }
} 

//Global scope
function someFuction() {
    //Local scope #1
    function someOtherFunction() {
        //Local scope #2
    }
}