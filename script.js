let turn="X";
let gameover=false;
//changing turns
let ticarray=["","","","","","","","",""];
let chances=0;
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}
let gameplaymusic=new Audio("music.mp3");
let gameovermusic=new Audio("gameover.mp3");
let movemusic=new Audio("ting.mp3");
//popfunctions
gameplaymusic.play();

let win_popup=document.getElementById("winpopup");
let draw_popup=document.getElementById("drawpopup");
let close_popup=document.getElementById("drawpopup");
function openpopup(){
    document.getElementById("winner").innerText=turn;
    win_popup.classList.add("open-popup");
    

}
function drawpopup(){
    draw_popup.classList.add("open-popup");

    
}
function closedrawpopup(){
    draw_popup.classList.remove("open-popup");
    win_popup.classList.remove("open-popup");
    console.log("closed");
    

}

//win check
const checkwin=()=>{
    if(ticarray[0]===ticarray[1]&&ticarray[1]===ticarray[2]&&ticarray[0]!="") gameover=true;
    else if(ticarray[0]===ticarray[4]&&ticarray[4]===ticarray[8]&&ticarray[0]!="") gameover=true;
    else if(ticarray[3]===ticarray[4]&&ticarray[3]===ticarray[5]&&ticarray[3]!="") gameover=true;
    else if(ticarray[6]===ticarray[7]&&ticarray[7]===ticarray[8]&&ticarray[7]!="") gameover=true;
    else if(ticarray[0]===ticarray[3]&&ticarray[3]===ticarray[6]&&ticarray[0]!="") gameover=true;
    else if(ticarray[1]===ticarray[4]&&ticarray[4]===ticarray[7]&&ticarray[1]!="") gameover=true;
    else if(ticarray[2]===ticarray[5]&&ticarray[5]===ticarray[8]&&ticarray[2]!="") gameover=true;
    else if(ticarray[2]===ticarray[4]&&ticarray[4]===ticarray[6]&&ticarray[2]!="") gameover=true;

}












let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener("click",(event)=>{
        let pid=event.target.id;
        movemusic.play();
        console.log(pid);

        
        if(!gameover&&boxtext.innerText===""){
            boxtext.innerText=turn;
            
            if(pid==="box1") ticarray[0]=turn;
            else if(pid==="box2") ticarray[1]=turn;
            else if(pid==="box3") ticarray[2]=turn;
            else if(pid==="box4") ticarray[3]=turn;
            else if(pid==="box5") ticarray[4]=turn;
            else if(pid==="box6") ticarray[5]=turn;
            else if(pid==="box7") ticarray[6]=turn;
            else if(pid==="box8") ticarray[7]=turn;
            else if(pid==="box9") ticarray[8]=turn;
            chances++;
            //console.log(ticarray);
            checkwin();
            if(gameover===true){
                gameplaymusic.pause();
                gameovermusic.play();
                openpopup();

                
            }
            if(chances===9&&gameover===false){
                gameplaymusic.pause();
                gameovermusic.play();
                
                drawpopup();

                
            }
            turn=changeTurn();
            
            turndisplay=turn;
            
        }
        document.getElementById("turndisplay").innerText=turn;

    })
})

let reset=document.getElementsByClassName("popreset");

Array.from(reset).forEach(element=>{
    element.addEventListener("click",()=>{
        let boxtexts = document.querySelectorAll('.boxtext');
        Array.from(boxtexts).forEach(element => {
            element.innerText = ""
        });
        turn="X";
        gameover=false;
        //changing turns
        ticarray=["","","","","","","","",""];
        chances=0;
        console.log("hello");
        gameplaymusic.play();
        closedrawpopup();
    
    
    })
})









//game logic
