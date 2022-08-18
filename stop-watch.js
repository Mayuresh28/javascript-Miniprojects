var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer= false

function  start(){
  timer = true
  stopwatch()
  
}
function  stop(){
    timer = false
}
function  reset(){
    hr=0;
    min=0;
    count=0;
    sec=0;
    document.getElementById("countv").innerHTML = count;
    document.getElementById("secv").innerHTML = sec;
document.getElementById("minv").innerHTML = min;
document.getElementById("hrv").innerHTML = hr;

timer = false;
}

function stopwatch(){
if(timer==true){
setTimeout("stopwatch()",10)
count = count + 1;
if(count==100){
  sec=sec+1;
  count=0
}
  if(sec==60){
      min = min+1;
      sec=0
  }
      if(min==60){
          hr=hr+1
          min=0
      
  }

document.getElementById("countv").innerHTML = count;
document.getElementById("secv").innerHTML = sec;
document.getElementById("minv").innerHTML = min;
document.getElementById("hrv").innerHTML = hr;

}
}