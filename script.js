let hand = document.querySelectorAll('.hand__container'),
    leg = document.querySelectorAll('.leg__container'),
    buttonMove = document.querySelector('.butt');



let addHandMove=function(){

    hand.forEach(item => {
        if (item.classList.contains('right')) {
            item.classList.add('right__move');
        } else if (item.classList.contains('left')) {
            item.classList.add('left__move');
        }
    });
}

let addLegMove=function(){

    leg.forEach(item => {
        if (item.classList.contains('right')) {
            item.classList.add('left__move');
        } else if (item.classList.contains('left')) {
            item.classList.add('right__move');
        }
    });
}

let addMove=function(){
    addHandMove();
    addLegMove();
};

buttonMove.addEventListener(('click'),()=>{
    addMove()} );