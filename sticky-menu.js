 
    window.addEventListener('scroll',function(){
        let navbar = document.getElementById("navbar")
// console.log(navbar);
        if(window.pageYOffset >= 250){
            navbar.classList.add('sticky');
                }else{
            navbar.classList.remove('sticky')

        }
    })