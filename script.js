'use strict'

setInterval(() => {
    const clock=new Date();

    var hour=document.getElementById("hr");
    var min=document.getElementById("min");
    var sec=document.getElementById("sec");
    var ampm=document.getElementById("amPm");

    var h=clock.getHours();
    var m=clock.getMinutes();
    var s=clock.getSeconds();
    var am=h >=12 ? "PM":"AM";


    // convert 24hr clock to 12hr Clock...
    if (h>12){
        h=h-12;
    }

    //Add zero Before Single Digit number...
    h= (h < 10) ?"0"+h:h; 
    m= (m < 10) ?"0"+m:m; 
    s= (s < 10) ?"0"+s:s; 


    hour.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    ampm.innerHTML=am;

    
});
