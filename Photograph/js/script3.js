const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const popup = document.getElementById('popup')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
        popup.style.display = 'none';
        c = 0;
    }
    if (email.value === '' || email.value == null) {
        messages.push('Email is required');
        popup.style.display = 'none';
        c = 0;
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
