let circle = document.querySelector('.circle');
let btnRed = document.querySelector('.btn_red');
let btnYellow = document.querySelector('.btn_yellow');
let btnGreen = document.querySelector('.btn_green');
let btnReset = document.querySelector('.btn_reset');
let timeoutId;

let changeColor = (color) => {
    timeoutId = setTimeout(() => {
        circle.style.backgroundColor = color;
        console.log('This color:', color);
        setTimeout(() => {
            circle.style.backgroundColor = 'rgb(126, 125, 124)';
            console.log('The colors have returned to their original state');
        }, 1000);
    }, 1000);
};

btnRed.addEventListener('click', () => {
    clearTimeout(timeoutId);
    changeColor('Red');
});
btnYellow.addEventListener('click', () => {
    clearTimeout(timeoutId);
    changeColor('Yellow');
});
btnGreen.addEventListener('click', () => {
    clearTimeout(timeoutId);
    changeColor('Green');
});
btnReset.addEventListener('click', () => {
    clearTimeout(timeoutId);
    circle.style.backgroundColor = 'rgb(126, 125, 124)';
    console.log('Colors Reset');
});