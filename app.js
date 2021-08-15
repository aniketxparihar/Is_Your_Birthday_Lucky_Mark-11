const dob = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#calculate");
const show = document.querySelector("#output-container");
const hide = document.querySelector("#cancel");
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
        return showMessage(`OG ,Your B'day is lucky!!  `)
    }
    showMessage(`Bleh! ,your B'day is not that lucky`);
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
hide.addEventListener("click", () => {
    document.getElementById("notice").style.display = "none";
})