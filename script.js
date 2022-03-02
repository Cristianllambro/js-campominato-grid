const btnPlay = document.getElementById('btn-play');
const btnReset = document.getElementById('btn-reset');
const container = document.querySelector('.container-box');
const select = document.getElementById('difficulty');

for (let i = 1; i <= 100; i++) {
    let item = document.createElement('div');
    item.classList.add('box');
    item.innerHTML = i;
    container.append(item);
}


for (let i = 1; i <= 81; i++) {
    let item = document.createElement('div');
    item.classList.add('box');
    item.innerHTML = i;
    container.append(item);
}


for (let i = 1; i <= 49; i++) {
    let item = document.createElement('div');
    item.classList.add('box');
    item.innerHTML = i;
    container.append(item);
}



select.addEventListener('change', (event) => {
    let option = select.querySelector('option');



})


