const subscribeForm = document.querySelector('.subscribe__form')

subscribeForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const mail = e.target.mail_input.value

    if(mail) {
        alert('Thanks for subscribing!')
    } else {
        alert('Enter your email!')
    }
})