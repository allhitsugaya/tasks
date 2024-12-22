document.addEventListener('DOMContentLoaded', () => {
    const submit = document.querySelector('#submit');

    submit.addEventListener('click', (e) => {
        e.preventDefault();

        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();
        const phone = document.querySelector('#phone').value.trim();

        let isValid = true;

        document.querySelector(`#nameerror`).value = '';
        document.querySelector(`#emailerror`).value = '';
        document.querySelector(`#messageerror`).value = '';
        document.querySelector(`#phoneerror`).value = '';
    if (!name){
        document.querySelector(`#nameerror`).innerText = `Please enter a valid name`;
        isValid = false;
        setTimeout(() => {
            document.querySelector(`#nameerror`).innerText = '';
        }, 3000);
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.querySelector(`#emailerror`).innerText = `Please enter a valid email`;
        isValid = false;
        setTimeout(() => {
            document.querySelector(`#emailerror`).innerText = '';
        }, 3000);
    }
    if (message.length <= 5){
        document.querySelector(`#messageerror`).innerText = `Please enter a valid message`;
        isValid = false;
        setTimeout(() => {
            document.querySelector(`#messageerror`).innerText = '';
        }, 3000);
    }
   if (phone.length < 13 || !/^\+380\d{9}$/.test(phone)){
        document.querySelector(`#phoneerror`).innerText = `Please enter a valid phone number`;
        isValid = false;
       setTimeout(() => {
           document.querySelector(`#phoneerror`).innerText = '';
       }, 3000);
    }
    else {
        console.log({name, email, message, phone});
        alert(`From submitted successfully.`);
        document.querySelector(`form`).reset();
    }
    });
});

