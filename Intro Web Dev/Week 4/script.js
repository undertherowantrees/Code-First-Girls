const myForm = document.querySelector('#my-form');
const topping1Input = document.querySelector('#topping1');
const topping2Input = document.querySelector('#topping2');
const topping3Input = document.querySelector('#topping3');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(topping1Input.value === '' || topping2Input.value === ''|| topping3Input.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${topping1Input.value} : ${topping2Input.value} : ${topping2Input.value} = Pizza Perfection!`));

        userList.appendChild(li);

        topping1Input.value = '';
        topping2Input.value = '';
        topping3Input.value = '';
    }

        console.log(topping1Input.value);
    }