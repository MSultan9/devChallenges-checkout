document.querySelectorAll('.minus').forEach(item => {
    item.addEventListener('click', event => {
        if (event.target.nextElementSibling)
            event.target.nextElementSibling.stepDown();
    })
})

document.querySelectorAll('.plus').forEach(item => {
    item.addEventListener('click', event => {
        if (event.target.previousElementSibling)
            event.target.previousElementSibling.stepUp();
    })
})

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
    alert("Success")
})