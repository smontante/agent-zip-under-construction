const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const phoneInput = document.querySelector('#phoneInput');
const messageInput = document.querySelector('#messageInput');

const btn = document.querySelector('#formSubmit');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const message = messageInput.value;
        ticket = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };
    console.log('support info: ', ticket);
    
        const options ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket),
        }
    fetch('/ticket', options);
    
    alert('Thank you for submitting a ticket');
    document.getElementById('contact').style.display='none'
});