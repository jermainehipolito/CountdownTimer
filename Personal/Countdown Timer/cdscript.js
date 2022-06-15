var x;

function getDateEnd() {
    var time = Date.now();
    var timerDays = document.getElementById("days").value;
    var timerHours = document.getElementById("hours").value;
    var timerMinutes = document.getElementById("minutes").value;
    var timerSeconds = document.getElementById("seconds").value;
    var timer = timerDays * (1000 * 60 * 60 * 24) + timerHours * (1000 * 60 * 60) + 
        timerMinutes * (1000 * 60) + timerSeconds * 1000;
    if (x != null) clearInterval(x);
    document.getElementById("formblock").style.display = "none";
    document.getElementById("resetblock").style.display = "flex";
    x = setInterval(function () {countdown(time, timer)}, 10);

}

function countdown(time, timer) {
    var countDownDate = (new Date(time + timer)) - Date.now();

    var countDownDays = Math.floor(countDownDate / (1000 * 60 * 60 * 24));
    var countDownHours = Math.floor(countDownDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var countDownMinutes = Math.floor(countDownDate % (1000 * 60 * 60) / (1000 * 60));
    var countDownSeconds = Math.floor(countDownDate % (1000 * 60) / 1000);

    if (countDownDate > 0) {
        document.getElementById("countdown").innerHTML = countDownDays + "d " +
        countDownHours + "h " + countDownMinutes + "m " + countDownSeconds + "s";
    } else {
        document.getElementById("countdown").innerHTML = "Countdown End";
    }
}

function resetTimer() {
    document.getElementById("formblock").style.display = "block";
    document.getElementById("resetblock").style.display = "none";
    document.getElementById("countdown").innerHTML = "0d 0h 0m 0s";
    document.getElementById("days").value = 0;
    document.getElementById("hours").value = 0;
    document.getElementById("minutes").value = 0;
    clearInterval(x);
}