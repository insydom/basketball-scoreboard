let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let periodText = document.getElementById("period-text");
let foulText = document.getElementById("fouls-text");

let homeScoreCount = 0;
let guestScoreCount = 0;
let periodCount = 0;
let foulCount = 0;

function addHome1() {
    homeScoreCount += 1;
    homeScore.textContent = homeScoreCount;
}

function addHome2() {
    homeScoreCount += 2;
    homeScore.textContent = homeScoreCount;
}

function addHome3() {
    homeScoreCount += 3;
    homeScore.textContent = homeScoreCount;
}

function addGuest1() {
    guestScoreCount += 1;
    guestScore.textContent = guestScoreCount;
}

function addGuest2() {
    guestScoreCount += 2;
    guestScore.textContent = guestScoreCount;
}

function addGuest3() {
    guestScoreCount += 3;
    guestScore.textContent = guestScoreCount;
}

function restart() {
    homeScoreCount = 0;
    guestScoreCount = 0;
    periodCount = 0;
    foulCount = 0;
    homeScore.textContent = homeScoreCount;
    guestScore.textContent = guestScoreCount;
    periodText.textContent = periodCount;
    foulText.textContent = foulCount;
}

function period() {
    periodCount += 1;
    periodText.textContent = periodCount;
}

function foul() {
    foulCount += 1;
    foulText.textContent = foulCount;
}
