let flag = 0;
    
    
function update(x){
    flag = flag + x;
    slideshow(flag);
}
slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName("slider_box")

    if(flag==slides.length){
    flag = 0;
    num=0;
}
else if(flag < 0){
    flag = slides.length - 1;
    num=slides.length - 1;
}

    for(let y of slides){
        y.style.display = "none"
    }
     slides[num].style.display= "block"
 }

