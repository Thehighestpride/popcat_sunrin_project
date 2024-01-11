const cat = document.getElementById("cat");
const score = document.getElementById("score");
let scr = 0;

function cat_click(){
    cat.src = "./img/waaaa.png";
   
    const audio = new Audio("./pop.mp3");
    audio.play();

    scr++;
    score.innerText = scr;
}

function cat_nonClick(){
    cat.src = "./img/normal.png";
}

cat.addEventListener("mousedown", cat_click);
cat.addEventListener("mouseup", cat_nonClick);