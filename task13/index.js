//Task 13.1 New Code
const errorContainers = document.querySelectorAll('[data-error]');
const form = document.forms.task
const formData = {}
function setData(regex, value, message) {
    const valid = regex.test(value);
    return {
        value,
        valid,
        errorMessage: !valid ? message : 'Valid'
    }
}
function checkData(e, el) {
    switch (e.target.name) {
        case `name`: {
            formData[e.target.name] = setData(/^\w+$/g, e.target.value, 'Please enter a valid name')
            el.innerText = formData[e.target.name].errorMessage;
            form.elements.submit.disabled = !formData[e.target.name].valid
            break;
        }
        case `phone`: {
            formData[e.target.name] = setData(!/^\+380\d{9}$/, e.target.value, 'Please enter a valid phone number')
            el.innerText = formData[e.target.name].errorMessage;
            form.elements.submit.disabled = !formData[e.target.name].valid
            break;
        }
        case `email`: {
            formData[e.target.name] = setData(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/, e.target.value, 'Please enter a valid email')
            el.innerText = formData[e.target.name].errorMessage;
            form.elements.submit.disabled = !formData[e.target.name].valid;
            break;
        }
        case `message`: {
            formData[e.target.name] = setData(/^.{5,}$/, e.target.value, 'Please enter a valid message')
            el.innerText = formData[e.target.name].errorMessage;
            form.elements.submit.disabled = !formData[e.target.name].valid;
            break;
        }
    }
}
form.addEventListener('focusout', e => {
    Array.from(errorContainers).forEach( el => {
        checkData(e, el)
    })
});
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    console.log({ name, email, message, phone });
});



//     document.addEventListener('DOMContentLoaded', () => {
//     const submit = document.querySelector('#submit');
//
//     submit.addEventListener('click', (e) => {
//         e.preventDefault();
//
//         const name = document.querySelector('#name').value.trim();
//         const email = document.querySelector('#email').value.trim();
//         const message = document.querySelector('#message').value.trim();
//         const phone = document.querySelector('#phone').value.trim();
//         let isValid = true;
//
//         document.querySelector(`#nameerror`).value = '';
//         document.querySelector(`#emailerror`).value = '';
//         document.querySelector(`#messageerror`).value = '';
//         document.querySelector(`#phoneerror`).value = '';
//     if (!name){
//         document.querySelector(`#nameerror`).innerText = `Please enter a valid name`;
//         isValid = false;
//         setTimeout(() => {
//             document.querySelector(`#nameerror`).innerText = '';
//         }, 3000);
//     }
//     if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         document.querySelector(`#emailerror`).innerText = `Please enter a valid email`;
//         isValid = false;
//         setTimeout(() => {
//             document.querySelector(`#emailerror`).innerText = '';
//         }, 3000);
//     }
//     if (message.length <= 5){
//         document.querySelector(`#messageerror`).innerText = `Please enter a valid message`;
//         isValid = false;
//         setTimeout(() => {
//             document.querySelector(`#messageerror`).innerText = '';
//         }, 3000);
//     }
//    if (phone.length < 13 || !/^\+380\d{9}$/.test(phone)){
//         document.querySelector(`#phoneerror`).innerText = `Please enter a valid phone number`;
//         isValid = false;
//        setTimeout(() => {
//            document.querySelector(`#phoneerror`).innerText = '';
//        }, 3000);
//     }
//     else {
//         console.log({name, email, message, phone});
//         alert(`From submitted successfully.`);
//         document.querySelector(`form`).reset();
//     }
//     });
// });




