const btnPlay = document.getElementById('btn-play');
const container = document.querySelector('.container-box');
const select = document.getElementById('difficulty');


btnPlay.addEventListener('click', function() {
    let optionsSelector = select.querySelector('option');
    container.innerHTML = '';

    if (optionsSelector.value == 'easy'){

        let gridEasy = grid(49);

    } else if(optionsSelector.value == 'medium'){

        let gridMedium = grid(81);

    } else if (optionsSelector.value == 'hard') {

        let gridHard = grid(100);
    }
    
})

function grid (max){
    for (let i = 1; i <= max; i++) {
        let item = document.createElement('div');
        item.classList.add('easy');
        item.innerHTML = i;
        container.append(item);
    }
}




