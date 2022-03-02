const btnPlay = document.getElementById('btn-play');
const container = document.querySelector('.container-box');
const select = document.getElementById('difficulty');


btnPlay.addEventListener('click', function() {
    container.innerHTML = '';
    
    if(select.value == 'easy'){
        grid(49);
    } else if(select.value == 'medium') {
        grid(81);
    } else if(select.value == 'hard') {
        grid(100);
    }
})

function grid (max){

    for (let i = 1; i <= max; i++) {
        let item = document.createElement('div');
        item.classList.add('box');
        item.innerHTML = i;
        container.append(item);

        if(max == 49) {
            item.classList.add('easy')
        } else if (max == 81) {
            item.classList.add('medium');
        } else {
            item.classList.add('hard');
        }

        item.addEventListener('click', function(){
            item.classList.add('bk-color')
        })
    }

}




