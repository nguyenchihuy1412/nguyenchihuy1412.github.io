document.addEventListener("DOMContentLoaded",function(){
    var nut = document.getElementById('click');
    var nutDisplay = document.getElementById('show');
    var nut2 = document.getElementById('click2');
    
    nut.onclick = function(){
        nutDisplay.classList.add('navShow');
        nut.classList.add('faded');
    };

    nut2.onclick = function(){
        nutDisplay.classList.remove('navShow');
        nut.classList.remove('faded');
    };
    /* End navbar effect */

    window.addEventListener('scroll',function(){
        console.log(window.pageYOffset);
        if (window.pageYOffset > 300) {
            console.log('Dang o menu roi');
        }
    });
});
