var timer = () => {

    // declear var
    let time = new Date();
    let hours = (time.getHours() % 12);
    let mintues = time.getMinutes();
    let seconds = time.getSeconds();
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
console.log(year);

    // all days
    let allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  

    //all months
    let allMonths = ["January", 'Feburary', "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // loop Days
    for(let i = 0; i < allDays.length; i++) {
        switch(day) {
            case i:
                day = allDays[i];
                break;
        }
    }
    for(let i = 0; i < allMonths.length; i++) {
        switch(month) {
            case i:
                month = allMonths[i];
                break;
        }
    }
    
    // loop Months
    for (let i = 0; i < allMonths.length; i++) {
        month = allMonths[i]
    }

    //top date
    

    // add 0
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mintues < 10) {
        mintues = "0" + mintues;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // result
    if (hours < 12) {
        document.querySelector("h1").innerHTML = hours+ " " + ":" + " " + mintues+ " "  + ":" + " " + seconds + " " + "AM";
        document.querySelector("h2").innerHTML = " Good Morning !";
        
    } else {
        document.querySelector("h1").innerHTML = hours + ":" + mintues + ":" + seconds + " " + "PM";
        document.querySelector("h2").innerHTML = " Good Afternoon !";
    }
    if (time.getHours >= 5) {
        document.querySelector("h2").innerHTML = " Good evening !";
    }
    if (time.getHours >= 7) {
        document.querySelector("h2").innerHTML = " Good Night !";
    }
    if (hours === 12) {
        document.querySelector("h1").innerHTML = time.getHours + ":" + mintues + ":" + seconds;
    }
    document.querySelector("h3").innerHTML = day + " "+ "/" + date + " " + "/" + " "  + month + " " + "/" + year;
}
setInterval(timer, 1000);