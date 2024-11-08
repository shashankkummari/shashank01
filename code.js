let boxes=document.querySelectorAll(".butt");
let turn=true;
let reset=document.querySelector(".Reset")

const winning=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerHTML="X";
            turn=false;
        }
        else{
            box.innerHTML="O";
            turn=true;
        }
        box.disabled=true;
    });
});

const Winner=()=>{

    for(let pattern of winning){
        let pos1=boxes[patterm[0]].innerText;
        let pos2=boxes[patterm[1]].innerText;
        let pos3=boxes[patterm[2]].innerText;

        if (pos1!="" && pos2!="" && pos3!="")
            if(pos1===pos2 && pos2===pos3){
                
            }

    }

}


reset.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerHTML=""
        box.disabled=false;
    });
    
} );
