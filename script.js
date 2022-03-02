const btnPlay = document.getElementById('btn-play');
const container = document.querySelector('.container-box');
const select = document.getElementById('difficulty');


btnPlay.addEventListener('click', function() {
    let options = select.querySelector('option');

    if (options.value == 'easy'){

        let grillEasy = grill(49);

    } else if(options.value == 'medium'){

        let grillMedium = grill(81);

    } else if (options.value == 'hard') {

        let grillHard = grill(100);
    }
    
    function grill (max){
        for (let i = 1; i <= max; i++) {
            let item = document.createElement('div');
            item.classList.add('easy');
            item.innerHTML = i;
            container.append(item);
        }
    }
    container.innerHTML = '';
})





