let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-game-btn");
let playAgainBtn=document.querySelector("#play-again-btn");
let playerTurn=document.querySelector(".player-turn");
let playerScore=document.querySelectorAll(".player-score");

let score1=0;
let score2=0;

let turnO=true;
let count=0;
const winPattern=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

boxes.forEach((box)=>{
  
  box.addEventListener("click",()=>{
    if(turnO){
      box.textContent="🍭";
      turnO=false;
      playerTurn.textContent="Player 2 turn ❤︎";
      playerTurn.style.color="#dd00aa";
    }
    else{
      box.textContent="🐰";
      turnO=true;
      playerTurn.textContent="Player 1 turn ❤︎";
      playerTurn.style.color="#184f6e"
    }
    count++;
    box.disabled=true;
    let isWin=checkWinner();

    if(count==9 && !isWin){
      gameDraw();
    } 
  })
});

let checkWinner=()=>{
  for(let pattern of winPattern){
    let value1=boxes[pattern[0]];
    let value2=boxes[pattern[1]];
    let value3=boxes[pattern[2]];

    if(value1.textContent!="" && value2.textContent!="" && value3.textContent!=""){
      if(value1.textContent==value2.textContent && value2.textContent==value3.textContent){
        value1.style.backgroundColor="#b0bec5";
        value2.style.backgroundColor="#b0bec5";
        value3.style.backgroundColor="#b0bec5";
        showWinner(value1.textContent);
        return true;
    }
    }
    
  }
}
let disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};

let enableBoxes=()=>{
  count=0;
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};

let gameDraw=()=>{
  playerTurn.innerText="Game Draw!!  🤝";
  disableBoxes();
}

let showWinner=(winner)=>{
  playerTurn.innerText=`Congratulations ✨ Winner is  Player`;
  if(winner==="🍭"){
    playerTurn.innerHTML+=" 1 ˚.🎀༘⋆";
    playerScore[0].innerText=`Player 1: ${++score1}`;
  }
  else{
    playerTurn.innerText+=" 2 ˚.🎀༘⋆";
    playerScore[1].innerText=`Player 2: ${++score2}`;
  }
  playerTurn.style.color="#ff8b94";

  disableBoxes();
  resetBtn.classList.add("hide");
  playAgainBtn.classList.remove("hide");
  
};

resetBtn.addEventListener("click",()=>{
  turnO=true;
  enableBoxes();
  playerTurn.innerText="Player 1 turn";
  playerTurn.style.color="#184f6e";
});

playAgainBtn.addEventListener("click",()=>{
  enableBoxes();
  playAgainBtn.classList.add("hide");
  resetBtn.classList.remove("hide");
  if(turnO===true){
    playerTurn.innerText="Player 1 turn ❤︎";
    playerTurn.style.color="#184f6e";
  }
  else{
    playerTurn.innerText="Player 2 turn ❤︎";
    playerTurn.style.color="#ff8b94";
  }
  boxes.forEach((box)=>{
    box.style.backgroundColor="#cbaacb";
  });
});

newGameBtn.addEventListener("click",()=>{
  enableBoxes();
  turnO=true;
  playerScore[0].innerText="Player 1: 0";
  playerScore[1].innerText="Player 2: 0";
  playerTurn.textContent="Player 1 turn";
  playerTurn.style.color="#184f6e";

  playAgainBtn.classList.add("hide");
  resetBtn.classList.remove("hide");

  boxes.forEach((box)=>{
    box.style.backgroundColor="#cbaacb";
  });
});