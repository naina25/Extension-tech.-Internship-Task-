// let button = document.getElementById("button");
// button.addEventListener("click", () => {
//     console.log("hey")
//     alert("Please Signup/Login first");
// })
// const scriptURL = 'https://script.google.com/macros/s/AKfycbzieAYOt7nrn5UAlJZsyEu-VoDtYmWQz1d9PSCQABmq8kT1T6cj/exec'
// const form = document.forms['signup']

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
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    window.location = "./logged.html"
}
