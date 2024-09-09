const btn = document.querySelector('.btn');
const input = document.querySelector('#input');

btn.addEventListener('click', () => {
    try {
        const inputEl = input.value;
        if(isNaN(inputEl) || inputEl.length == 0){
            throw new Error('Неверное значение! Введите число');
            
        }
        
        hint.textContent = 'Все верно';
    } catch (error) {
        hint.textContent = error.message;
    }
});

