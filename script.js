
function digitalClock(){


let time= new Date();
let hour = time.getHours();
let mnt = time.getMinutes()
let scnd = time.getSeconds()
let text = hour<12?"AM":"PM";


hour = hour<10?"0"+hour: hour;
mnt = mnt<10?"0"+mnt: mnt;
scnd= scnd<10?"0"+sec : scnd;

const h = document.querySelectorAll(".hrs");
const m = document.querySelectorAll(".mnts");
const s= document.querySelectorAll(".sec");
const txt = document.querySelectorAll(".text")

hour = hour.toString();
h[0].innerHTML=hour[0];
h[1].innerHTML=hour[1];
mnt= mnt.toString()
m[0].innerHTML=mnt[0]
m[1].innerHTML=mnt[1]
scnd= scnd.toString()
s[0].innerHTML=scnd[0]
s[1].innerHTML=scnd[1]
txt[0].innerHTML=text[0]
txt[1].innerHTML=text[1]

}

digitalClock()
setInterval(digitalClock, 1000)