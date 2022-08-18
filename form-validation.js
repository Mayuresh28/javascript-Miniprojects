let a = document.getElementById("fname");
let b = document.getElementById("lname");
let flag =1;

function validate(){
    if(a.value==""){
        document.getElementById("error1").innerHTML ="name Is blank"
       flag = 1;
    }else if(a.value.length < 3){
        document.getElementById("error1").innerHTML ="name required min 3 char"
        flag = 0;
    }else{
        document.getElementById("error1").innerHTML =""
        flag=1;
    }
    if(b.value==""){
        document.getElementById("error2").innerHTML ="password is blank"
       flag = 0;
    
    }else{
        document.getElementById("error2").innerHTML =""
        flag=1;
    }
    if(flag){
        return true;
    }
else{
    return false;

}
 
}