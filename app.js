let show = document.getElementById('show');
let screenValue = '';
let buttons = document.querySelectorAll('button');


buttons.forEach(item => {
    item.addEventListener('click', (f) => {
        handleInput(f.target.innerText);
    });
});


function handleInput(input) {
    if (input === 'x') {
        input = '*';  
    }

    if (input === 'C') {
        screenValue = "";  
    } else if (input === '=') {
        try {
            screenValue = eval(screenValue); 
        } catch (error) {
            screenValue = 'Error';  
        }
    } else {
        screenValue += input;  
    }
    show.value = screenValue;  
}


document.addEventListener('keydown', (event) => {
    const key = event.key;


    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        handleInput(key);
    }
    
    else if (key === 'Enter') {
        handleInput('=');
    }
  
    else if (key === 'Backspace') {
        screenValue = screenValue.slice(0, -1);  
        show.value = screenValue;  
    }
   
    else if (key === 'C' || key === 'Escape') {
        handleInput('C');
    }
    
    else if (key === 'x') {
        handleInput('*');
    }
});
