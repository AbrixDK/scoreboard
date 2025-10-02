let counthome = 0
let countaway = 0
let score = 0
let countHome = document.getElementById("score-home")
let countAway = document.getElementById("score-away")

function increment1home() {
    counthome += 1
    countHome.textContent = counthome
}

function increment2home() {
    counthome += 2
    countHome.textContent = counthome
}

function increment3home() {
    counthome += 3
    countHome.textContent = counthome
}

function increment1away() {
    countaway += 1
    countAway.textContent = countaway
}

function increment2away() {
    countaway += 2
    countAway.textContent = countaway
}

function increment3away() {
    countaway += 3
    countAway.textContent = countaway
}

function clearscorehome() {
    countHome.textContent = score
    counthome = 0
}

function clearscoreaway() {
    countAway.textContent = score
    countaway = 0
}


Object.assign(window, {
  increment1home, increment2home, increment3home,
  increment1away, increment2away, increment3away,
  clearscorehome, clearscoreaway
});
