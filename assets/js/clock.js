const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");

function AngleTime() {
    var input = document.getElementById("angle").value;
    var minutes = 0;
    var hour = 0;
    var cal_angle;
    for (n = 0; n < 720; n++) {
        console.log( "Hour", parseInt(n/60), "Minute", n % 60);
        hour = parseInt(n/60*30); 
        minutes = parseInt(n%60*6); 
        cal_angle = (minutes - hour);

        if (cal_angle == input) {
            console.log("Angle", cal_angle, "Hour", hour, "Minute", minutes);
            let hrPosition = hour;
            let minPosition = minutes;
            HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
            MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
        }

    }


}
