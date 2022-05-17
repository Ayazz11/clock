

function displayTime(){
    let time=new Date();
    let hours=time.getHours();

if(hours>12){
    $("span")[0].textContent=" " + "pm"; 
}
else{
    $("span")[0].textContent="  "+  "am"; 
}

    switch (hours) {
        case 13: 
        hours=01;

            
            break;
        case 14: 
        hours=02;
        
            
            break;
        case 15: 
        hours=03;
            
            break;
        case 16: 
        hours=04;
            
            break;
        case 17: 
        hours=05;
            
            break;
        case 18: 
        hours=06;
            
            break;
        case 19: 
        hours=07;
            
            break;
        case 20: 
        hours=08;
            
            break;
        case 21: 
        hours=09;
            
            break;
        case 22: 
        hours=10;
            
            break;
        case 23: 
        hours=11;
            
            break;
        case 0: 
        hours=12;
            
            break;
    
        default:
            break;
    }
    let minutes=time.getMinutes();
    if(minutes<10){
        minutes="0"+minutes;
    }
    let sec=time.getSeconds();
    if(sec<10){
        sec="0"+sec;
    }
  
    let currTime=hours + " : " + minutes + " : "  + sec;
    document.querySelector("h3").textContent= currTime;

}





setInterval(() => {
    displayTime();

}, 1000);




function rotate(){
    let time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();


    let hRotation=(30*h + m/2);
    $("#hour").css("transform",`rotate(${hRotation}deg)`);

    let mRotation=6*m;
    $("#min").css("transform",`rotate(${mRotation}deg)`);


    let sRotation=6*s;
    $("#sec").css("transform",`rotate(${sRotation}deg)`);
}

setInterval(() => {
  rotate();
}, 1000);


