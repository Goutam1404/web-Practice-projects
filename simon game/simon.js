let level=-1;
let btnColor=["red", "yellow", "green","blue"];
let h2=document.querySelector(".level");
let start=false;
let btn=document.querySelectorAll(".btn")
let gameSeq=[];
let userSeq=[];
let max=document.querySelector(".score");
let maxscore=0;
//starting the game
// let starter=document.addEventListener("button");
document.querySelector("button").addEventListener("click",function(){
    if(start==false){
        start=true;
        levelup();
    }
});
function levelup(){
    userSeq=[]
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btnColor[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    btnflash(randBtn);
    gameSeq.push(randColor);
}
//flashing the buttons
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);    
}
//checking the value of user seq and game seq
function seqCheck(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
        setTimeout(levelup,1000);
        }
    }
    else{
        document.querySelector('body').classList.add("white");
    setTimeout(function(){
        document.querySelector('body').classList.remove("white");
    },250);
    h2.innerText=`Game over!!\n press any key to start \n your score was:${level}`;
    max_score(level);
    reset();
    }
}

//printing the maximum score
function max_score(level){
    if(level>maxscore){
        maxscore=level;
        max.innerText=`Highest score:${level}`;
    }
}

//pressing the buttons
function pressing(){
    let btn=this;
    btnflash(btn);
    let color=btn.getAttribute("id");
    userSeq.push(color);
    seqCheck(userSeq.length-1);
}
for(btns of btn){       
    btns.addEventListener("click",pressing);
}
//reseting the game

function reset(){
    level=-1;
    start=false;
    userSeq=[];
    gameSeq=[];
}

