
let buttonArray;
buttonArray = document.querySelectorAll(".drum");


function playByClick(){
    for (let i = 0; i < 7; i++){
    buttonArray[i].addEventListener('click', function(){
        setAudio(this.innerHTML);
        addAnimation(this.innerHTML);
    });
}
}
playByClick();

// detects key pressed
function playByKey(){
    document.addEventListener('keydown', function(){
        setAudio(event.key);
        addAnimation(event.key)
    });
}
playByKey();



// assigns sounds
function setAudio(e){

    switch (e) {
        case 'w':
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
            break;
        case 'a':
        let kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
            break;
        case 's':
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
            break;
        case 'd':
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
            break;
        case 'j':
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
            break;
        case 'k':
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
            break;
        case 'l':
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
            break;    
    
        default: 
        console.log(e);
            break;
    }    

}
// add animation
function addAnimation (currentKey){

    let pressedKey;
    pressedKey = document.querySelector('.' + currentKey);
    
    (function addClass(){
        pressedKey.classList.add('pressed');
    })();

    (function removeClass(){
        setTimeout(function(){
            pressedKey.classList.remove('pressed');
        }, 100);
    })();
    
}



