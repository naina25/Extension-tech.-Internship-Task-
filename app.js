let button = document.getElementById("button");

button.addEventListener("click", () => {
    console.log("hey")
    alert("Please Signup/Login first");
})
const scriptURL = 'https://script.google.com/macros/s/AKfycbzieAYOt7nrn5UAlJZsyEu-VoDtYmWQz1d9PSCQABmq8kT1T6cj/exec'
const form = document.forms['signup']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Signing Up, you may now login to our website.."))
    .catch(error => console.error('Error!', error.message))
});
