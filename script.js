const btnPlay = document.getElementById('btn-play');
const btnReset = document.getElementById('btn-reset');

for (let i = 1; i <= 100; i++) {
    let item = document.createElement('div');
    item.classList.add('box');
    item.innerHTML = i;
}
//non funziona