const dBody = document.querySelector('.body');
const btnRandom = document.querySelector('.random');
const btnBlack = document.querySelector('.black');
const btnClear = document.querySelector('.eraser');
const btnReset = document.querySelector('.reset');
const newNum = document.querySelector('.newNum');
const inputNum = document.querySelector('#number');
const btnColor = document.querySelector('.toColor');
const inputColor = document.querySelector('#color');
const dBtn = document.querySelectorAll('.dBtn');


function toActive(){
    dBtn.forEach(e=>{
    e.removeAttribute('id', 'dAct');
    });
}