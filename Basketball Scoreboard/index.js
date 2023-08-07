let homeScore = document.getElementById("homeScore")
let score_home = 0
let score_guest = 0

let homeTxt = document.getElementById("home-txt")

function addOneHome() {
    score_home += 1
    homeScore.textContent = score_home
}

function addTwoHome() {
    score_home += 2
    homeScore.textContent = score_home
}

function addThreeHome() {
    score_home += 3
    homeScore.textContent = score_home
}

function addOneGuest() {
    score_guest += 1
    guestScore.textContent = score_guest
}

function addTwoGuest() {
    score_guest += 2
    guestScore.textContent = score_guest
}

function addThreeGuest() {
    score_guest += 3
    guestScore.textContent = score_guest
}

function newGame() {
    score_guest = 0
    score_home = 0
    guestScore.textContent = score_guest
    homeScore.textContent = score_home
}

function leader() {
    if (score_home > score_guest) {
        document.getElementById("home-txt").style.color = 'yellow'
        document.getElementById("guest-txt").style.color = 'white'
    } else if (score_home < score_guest) {
        document.getElementById("guest-txt").style.color = 'yellow'
        document.getElementById("home-txt").style.color = 'white'
    } else {
        document.getElementById("home-txt").style.color = 'white'
        document.getElementById("guest-txt").style.color = 'white'
    }
}