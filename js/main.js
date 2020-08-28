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

//Add helptext

let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";
console.log( helpText );

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

parent.removeChild(helpText);

let sendButton = document.querySelector("form .btn.btn-primary");
/*
sendButton.onclick = function() {
    alert("Hello JS!")
} 

sendButton.addEventListener("click", function() {
    alert("Működik!");
});

window.addEventListener("resize", function() {
    console.log(this.innerHeight, innerWidth);
});
*/

//Űrlapesemények
let orderForm = document.querySelector("#orderForm"); //legyen egy tömböm ezzel az űrlappal
orderForm.addEventListener("submit", function(ev) { //ha subit történik fusson le a következő fv
    ev.preventDefault(); //mielőtt bármi történne tegye ezt
    
    let inputs = this.querySelectorAll("input"); //kiválasztom az űrlap input elemeit
    let values = {}; //készítek egy tömböt az értékeknek
    for (let i = 0; i < inputs.length; i++) { //ezzel a ciklussal végigmegyek az inputokon
        values[inputs[i].name] = inputs[i].value; //az új tömbbe vegye fel az input nevét és annak értékét
    }
    
    console.log( values );
});

//Parent element kezelése

let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function(ev) {
    this.parentElement.style.display = "none";
};

for (let i = 0; i< alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction); 
}

//DOM Select elem
let toppings = [
    "szalonna",
    "hagyma",
    "tükörtojás",
    "libamáj",
    "extra sonka"
];
let toppingsSelect = document.querySelector("#topInput");

let index = 0;
while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingsSelect.appendChild(option);
    index++;
}