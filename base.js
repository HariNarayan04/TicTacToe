let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn= document.querySelector("#newbtn");
let msg = document.querySelector(".msg");
let winmsg=document.querySelector("#win-msg"); 

let turn="X";

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let click=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn==="X"){
            box.innerText="X";
            turn = "O";
        }
        else{
            box.innerText="O";
            turn="X"; 
        }
        box.disabled=true;
        click++;
        if(click==9){
            showWinner("Draw");
        }
        else checkWinner();
    })
});

const resetGame = ()=>{
    enableboxes();
    turn="X";
    msg.classList.add("hide"); 
    click=0;
}

const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    if(winner==="Draw"){
        winmsg.innerText=`Sorry game is Draw`;
    }
    else{
        winmsg.innerText=`Winner is ${winner}`;
    }
    click=0;
    msg.classList.remove("hide");
    disableboxes();
}

const checkWinner = ()=>{
    for (let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" &&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val &&pos2val===pos3val){
                showWinner(pos1val);
            }
        }

    }
}

resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame); 