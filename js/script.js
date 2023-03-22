let cardBalance = document.querySelector(".card-balance p");
let displayBalance = cardBalance.textContent;

let balanceAmount = parseFloat(displayBalance.split(" ")[0])

let addMoneyButton = document.querySelector(".card-buttons .add-money")

let cardHistory = document.querySelector(".card-history ul")
displayHistory = cardHistory.innerHTML

let takeMoneyButton = document.querySelector(".card-buttons .withdraw-money")
let paymentButton = document.querySelector(".card-buttons .make-payment")




addMoneyFunction();
withdrawMoneyFunction();
communalPaymentsFunction();





function addMoneyFunction(){
    addMoneyButton.addEventListener("click", function(){
        let amountOfAddition = prompt("ENTER THE AMOUNT OF MONEY YOU WANT TO ADD(AZN):")
        if(parseFloat(amountOfAddition) < 1){
            alert("YOUR ADDITION MUST HIGHER THAN 1AZN")
        }
        else if(amountOfAddition.includes(".")){
            alert("YOU CAN'T UPLOAD PENNIES!")
        }
        else if(/^[0-9]+(\.[0-9]+)?$/.test(amountOfAddition)){
            balanceAmount += parseFloat(amountOfAddition)
            cardBalance.textContent = `${balanceAmount} AZN`
            cardHistory.innerHTML += `<li style="color: green">${amountOfAddition} AZN - ADDITION - ${getDateFunction()}</li>`    
        }
        else{
            alert("SOMETHING WENT WRONG!")
        }
    })
}
function withdrawMoneyFunction(){
    takeMoneyButton.addEventListener("click", function(){
        let amountOfTake = prompt("ENTER THE AMOUNT OF MONEY YOU WANT TO TAKE(AZN):")
        if(amountOfTake.includes(".")){
            alert("YOU CAN'T TAKE PENNIES")
        }
        else if(balanceAmount < parseFloat(amountOfTake)){
            alert("INVALID FUNDS!")
        }
        else if(/^[0-9]+(\.[0-9]+)?$/.test(amountOfTake)){
            balanceAmount -= parseFloat(amountOfTake)
            cardBalance.textContent = `${balanceAmount} AZN`
            cardHistory.innerHTML += `<li style="color: red">${amountOfTake} AZN - WITHDRAW - ${getDateFunction()}</li>`    
        }
        else{
            alert("SOMETHING WENT WRONG!")
        }
    })
}
function communalPaymentsFunction(){
    paymentButton.addEventListener("click", function(){
        let communalPayment = prompt("CHOOSE ONE OF THE COMMUNAL PAYMENTS: (1-AZERGAS, 2-AZERWATER, 3-AZERLIGHT)")
        let choicePayment;
        switch(communalPayment){
            case "1":
                payments("AZERGAS","black")
                break;
            case "2":
                payments("AZERWATER","blue")
                break;
            case "3":
                payments("AZERLIGHT","yellow")
                break;
            default:
                alert("SOMETHING WENT WRONG!")
        }
    })
}



function getDateFunction(){
    let date = new Date()



let second = date.getSeconds();
if(second / 10 >= 1){
    second = second
}
else{
    second = `0${second}`
}

let minute = date.getMinutes();
if(minute / 10 >= 1){
    minute = minute
}
else{
    minute = `0${minute}`
}


let hour = date.getHours();
if(hour / 10 >= 1){
    hour = hour
}
else{
    hour = `0${hour}`
}


let year = date.getFullYear();
let day = date.getDate()
let month = `0${date.getDay()}`


let getFullDate = `${day}/${month}/${year}, ${hour}:${minute}:${second}`

return getFullDate
}
function payments(paymentType,colorType){
    choicePayment = parseFloat(prompt(`HOW MUCH YOU WANT TO PAY FOR ${paymentType}?(AZN)`))
    if(balanceAmount < choicePayment){
        alert("INVALID FUNDS!")
    }
    else if(/^[0-9]+(\.[0-9]+)?$/.test(choicePayment.toString())){
        balanceAmount -= choicePayment
        cardBalance.textContent = `${balanceAmount} AZN`
        cardHistory.innerHTML += `<li style="color: ${colorType}">${choicePayment} AZN - ${paymentType}(COMMUNAL) - ${getDateFunction()}</li>`    
    }
    else{
        alert("SOMETHING WENT WRONG!")
    }
}



