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

let numb = 10, color = 'black';
btnBlack.setAttribute('id', 'activeBtn');

function colorer(e, col){
    e.addEventListener('mouseover', (e) => {
        color = col;
        e.target.style.backgroundColor = color; 
        return color;
    });
}

function clearer(elem) {
    elem.innerHTML = "";
    elem.style.backgroundColor = '#fff';
};

function createBox(gBox, num) {
    clearer(dBody);
    for (let i = 1; i <= num * num; i++) {
        const box = document.createElement('div');
        box.style.flexBasis = `calc(100%/${numb})`;
        box.classList.add('box');
        gBox.appendChild(box);
        inputNum.value = numb;
    }
    colorer(dBody, color);
}

function numbeR(a){
    clearer(dBody);
    numb = a;
    if (numb <= 64 && numb >= 1) {
        createBox(dBody, numb);
        inputNum.value = numb;
        console.log(inputNum.value);  
    }else{
        numb = 16;
        createBox(dBody, numb);
        alert('Number greater than 64 \nNumber set to 16');
        inputNum.value = 16;
        console.log(inputNum.value);  
    }
}

createBox(dBody, numb);

newNum.addEventListener('click', () => {
    let btnPrompt = Number(prompt('Enter number of boxes'));
    numbeR(btnPrompt);
});

inputNum.addEventListener('input', ()=>{
    let inputPrompt = inputNum.value;
    numbeR(inputPrompt);
});

btnBlack.addEventListener('click', () => {
    toActive();
    btnBlack.setAttribute('id', 'activeBtn');
    colorer(dBody, 'black');
});