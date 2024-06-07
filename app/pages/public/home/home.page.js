import { navigateTo } from "../../../Router";

export function homePage() {
    const root = (document.getElementById("root").innerHTML = `
    <h1>Welcome to RiwiFlights</h1>
    <button id="logIn">Log in</button>
    <button id="register">Register</button>
    `);

    //logic

    const $loginButton = document.getElementById('logIn')
    const $registerButton = document.getElementById('register')

    $loginButton.addEventListener('click', button => {
        button.preventDefault();
        if(!localStorage.getItem('token')){
            navigateTo('/login');
            return;
        }
        navigateTo('/dashboard')
    })

    $registerButton.addEventListener('click', button => {
        button.preventDefault();
        if (!localStorage.getItem('token')) {
            navigateTo('/register');
            return;
        }
        navigateTo('/dashboard')
    })
    
}
