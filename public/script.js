
let newDateFunction = new Date()
function randerDate(){
    newDateFunction.setDate(1)
    let day = newDateFunction.getDay()

    let currentDate = new Date(
        newDateFunction.getFullYear(),
        newDateFunction.getMonth() + 1,0
    ).getDate() // to get the last date of current month


    let prevDate = new Date(
        newDateFunction.getFullYear(),
        newDateFunction.getMonth(), 0
    ).getDate() // to get the last date of previous month

    let addNextDate = new Date(
        newDateFunction.getFullYear(),
        newDateFunction.getMonth() + 1,0
    ).getDate()

    console.log(currentDate, prevDate, addNextDate);

    let addNext = addNextDate + 7

    let month = newDateFunction.getMonth()
    let year = newDateFunction.getFullYear()
    let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    document.getElementById("month").innerHTML = monthArr[month]

    let today = new Date()
    let weekDay = today.getDay()
    document.getElementById("date").innerHTML = today.toDateString()
    document.querySelector(`.week :nth-child(${weekDay + 1})`).classList.add("active")
 


    let DATES = ""

    for(let x = day; x > 0; x--){
        DATES += "<div class='prev'>" + (prevDate - x + 1) + "</div>"
    }

    for(let i = 1; i <= currentDate; i++){
        if(i === today.getDate() && newDateFunction.getMonth() == today.getMonth() && newDateFunction.getFullYear() === today.getFullYear()){
            DATES += "<div class='today'>" + i + "</div>"
        }
        else{
            DATES += "<div>" + i + "</div>"
        }
    }

    for(let k = 1; k <= addNext; k++){
        DATES += "<div class='next'>" + k + "</div>"
    }

    document.querySelector('.dates').innerHTML = DATES
}

function moveDate(para){

    if(para == 'prev'){
        newDateFunction.setMonth(newDateFunction.getMonth() - 1)
    }
    
    else if(para == 'next'){
        newDateFunction.setMonth(newDateFunction.getMonth() + 1)
    }

    randerDate()
}

//popup
document.addEventListener('DOMContentLoaded', function() {
    // Get all date elements
    const dates = document.querySelectorAll('.dates div');

    // Get the popup element
    const popup = document.getElementById('popup');

    // Get the popup date element
    const popupDate = document.getElementById('popupDate');

    // Add event listener to each date element
    dates.forEach(date => {
        date.addEventListener('click', function() {
            // Display the popup when a date is clicked
            popupDate.textContent = date.textContent; // Set the popup content to the clicked date
            popup.classList.toggle('show');
        });
    });
});

