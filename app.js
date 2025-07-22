var char1 = document.getElementById("char1");   // Terry Bogard
var char2 = document.getElementById("char2");   // Rock Howard
var char1status = document.getElementById("char1status");
var char2status = document.getElementById("char2status");

// Moves (GIF URLs)
var terrymoves = {
    step: "images/characters-01/forward.gif",
    attack: "images/characters-01/backward.gif"
};

var rockmoves = {
    step: "images/characters-02/cfcf.gif",
    attack: "images/characters-02/cfcf.gif"
};

// Health
var terrycount = 25;
var rockcount = 25;

function updateHealthBars() {
    char1status.style.width = (terrycount / 25) * 50 + "%";
    char2status.style.width = (rockcount / 25) * 50 + "%";
}

// Movement
var terrySpeed = 10;
var rockSpeed = 10;

// Terry Controls (Arrow Keys)
function terryControl(command) {
    if (command === "forward") {
        terrySpeed += 10;
        char1.style.left = terrySpeed + "px";
        char1.src = terrymoves.step;
    } else if (command === "backward") {
        terrySpeed -= 10;
        char1.style.left = terrySpeed + "px";
        char1.src = terrymoves.step;
    } else if (command === "attack") {
        rockcount -= 1;
        char1.src = terrymoves.attack;
        updateHealthBars();
    }
}

// Rock Controls (A, D, F)
function rockControl(command) {
    if (command === "forward") {
        rockSpeed += 10;
        char2.style.right = rockSpeed + "px";
        char2.src = rockmoves.step;
    } else if (command === "backward") {
        rockSpeed -= 10;
        char2.style.right = rockSpeed + "px";
        char2.src = rockmoves.step;
    } else if (command === "attack") {
        terrycount -= 1;
        char2.src = rockmoves.attack;
        updateHealthBars();
    }
}

// Keyboard Events
window.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "ArrowRight":
            terryControl("forward");
            break;
        case "ArrowLeft":
            terryControl("backward");
            break;
        case "ArrowUp":
            terryControl("attack");
            break;

        case "d":
            rockControl("forward");
            break;
        case "a":
            rockControl("backward");
            break;
        case "f":
            rockControl("attack");
            break;
    }
});

// Initialize
char1.src = terrymoves.step;
char2.src = rockmoves.step;
updateHealthBars();
