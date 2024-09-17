document.getElementById("headerListButton").onclick = function() {
    myFunction();
}

function myFunction() {
    console.log("click")
}

document.getElementById("headerInstagramButton").onclick = function() {
    myFunction();
}

document.getElementById("headerGithubButton").onclick = function() {
    myFunction();
}

document.getElementById("youtube").onclick = function() {
    myFunction();
}




let box = document.querySelector(".box");
let play = document.querySelector(".stopAndPlayButton");

play.addEventListener('click', () => {
    if (box.style.animationPlayState == 'running') {
        box.style.animationPlayState = 'paused';
    } else {
        box.style.animationPlayState = 'running';
    }
});