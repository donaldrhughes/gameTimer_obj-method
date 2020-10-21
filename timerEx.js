let num = 5;

function coreTimer(num){
    let timer = setInterval(function(){ 
        num--
        if(num === 0){
            clearInterval(timer)
        }
        console.log(num);
    }, 1000);
}

coreTimer(num);