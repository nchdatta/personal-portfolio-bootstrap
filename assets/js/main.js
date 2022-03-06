window.addEventListener('scroll', function (){
    if(window.scrollY > 80){
        document.getElementById('fixed_top').classList.add('fixed-top');
    }else{
        document.getElementById('fixed_top').classList.remove('fixed-top')
    }
});
