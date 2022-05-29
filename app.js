'use strict';

window.addEventListener('load', () => {
    showImg();
});


let load = 20;
let blurCount = 0;

function showImg(){
    let interval = setInterval(() => {
        load --;
        blurCount += 5;
        if(blurCount > 100){
            clearInterval(interval);
            document.querySelector(".num").textContent = '';
            return;
        }
        document.querySelector("body").style.backdropFilter =`blur(${load}px)`;
        document.querySelector(".num").textContent = blurCount + "%";
    }, 100);
}

