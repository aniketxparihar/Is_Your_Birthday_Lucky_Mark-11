const dob = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#calculate");
const show = document.querySelector("#output-container");

const calculateSum=(date)=>{
    let sum=0;
    date = date.replaceAll("-","");
    for(let digit of date) {
        sum = sum + Number(digit);
    }
    return sum;
}

const checkIsNumberLucky = (sumOfDate,numberToCheck) => {
    console.log(sumOfDate,numberToCheck)
    if(sumOfDate%numberToCheck===0) {
        return showMessage(`OG ,${numberToCheck} is a lucky number!!  `)
    }
    showMessage(`Beh ,${numberToCheck} is not that lucky`);
}

const showMessage = (message) => {
    show.innerText = message;
}

checkBtn.addEventListener("click",()=>{
    const date = dob.value;
    const numberToCheck = luckyNumber.value;
    if(date&&numberToCheck) {
        const sumOfDate = calculateSum(date);
        checkIsNumberLucky(sumOfDate,numberToCheck);
    }else {
        showMessage("Please enter both the fields");
    }
})