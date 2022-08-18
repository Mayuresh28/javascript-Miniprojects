const tempLoad = () => {let temp = document.getElementById('icon');
temp.innerHTML = "&#xf2cb;" ;
setTimeout ( ( ) => {
temp.innerHTML = "&#xf2cb;" ;
temp.style.color = " #f8b627" ;
} , 1000 ) ;
setTimeout ( ( ) => {
temp.innerHTML = "&#xf2ca;";
} , 2000 ) ;
setTimeout ( ( ) => {
temp.innerHTML = "&#xf2c9;";
},3000);
setTimeout ( ( ) => {
temp.innerHTML = "&#xf2c8;";
},4000);
setTimeout ( ( ) => {
temp.innerHTML = "&#xf2c7;";
temp.style.color = "#d63031";
},5000);
}

tempLoad();
setInterval(tempLoad,6000);