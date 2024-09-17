let box = document.querySelector(".box");
let play = document.querySelector(".stopAndPlayButton");

play.addEventListener('click', () => {
    if (box.style.animationPlayState == 'running') {
        box.style.animationPlayState = 'paused';
    } else {
        box.style.animationPlayState = 'running';
    }
});

document.getElementById("headerGithubButton").onclick = function() {
    openGithub();
}

document.getElementById("currentProjects").onclick = function() {
    window.open("aktuelleProjekte.html", "_self");
}

document.getElementById("projectChess").onclick = function() {
    window.open("aktuelleProjekte.html", "_self");
}

document.getElementById("projectDame").onclick = function() {
    window.open("aktuelleProjekte.html", "_self");
}

document.getElementById("knowledge").onclick = function() {
    window.open("wissensweg.html", "_self");
}

document.getElementById("aboutme").onclick = function() {
    window.open("aboutme.html", "_self");
}