function getValue(){
    let inputnumber = document.getElementById("inputnumber");
    let numbervalue = inputnumber.value;

    let show = document.getElementById("show");
    show.innerText = numbervalue;
}

function submitForm(){
    let name = document.getElementById("inputnumber");
    let submitvalue= name.value;

    show2.innerText = submitvalue;
}

function resetForm(){

    show.innerText ="";
    show2.innerText="";
    

}

let audio = new Audio("senpai.mp3");
audio.volume = 0.2;

function senpai(){
    let senpai = document.getElementById("inputnumber").value;
    if(senpai === "114514"){
         audio.play()
    } else if( senpai === "1919810" && !audio.paused){
        audio.pause()
    }
}

function easteregg(){
    submitForm();
    senpai();
    
}