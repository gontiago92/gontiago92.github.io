function clearFormInputs(form) {
    form.querySelectorAll('input').forEach(element => {
        element.value = ""
    });
    form.querySelector('textarea').value = ""
}

const contact = document.getElementById('contactForm');

contact.addEventListener('submit', e => {
    e.preventDefault()
    let formData = new FormData(contact)

    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    if(email === "" || subject === "" || message === "")
        return alert("Please fill in all the fields!");

    let url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

    document.location.href = url

    clearFormInputs(contact)

})

/* function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const skills = document.querySelectorAll('.skills_list li');

skills.forEach(skill => {
    const max = window.innerWidth

    console.log(skill)
    let position = getRandomArbitrary(0, max)
    skill.style.left = position + "px"
}) */

/*const imageName = document.querySelectorAll('.card_container .project_card span ')

Array.from(imageName).forEach(element => {
    let imageEl = element.parentNode.parentNode
    let imagePath = element.innerText.toLowerCase() + '.jpg'

    imageEl.style.background = 'url(./assets/images/' + imagePath +')'
    imageEl.style.backgroundSize = 'cover'
})*/
