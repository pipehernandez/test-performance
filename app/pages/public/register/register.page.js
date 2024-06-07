import { navigateTo } from "../../../Router";

export function registerPage() {
    const root = document.getElementById('root');
    root.innerHTML = `
    <h1>Register Here!</h1>
    <form id="registerForm">
        <label>Name: </label>
        <input type="text" placeholder="Jhon Doe" id="name"><br><br>

        <label>Email: </label>
        <input type="email" placeholder="jhondoe@example.com" id="email" autocomplete="off"><br><br>

        <label>Birthdate: </label>
        <input type="date" id="birthdate"/><br><br>

        <label>Contraseña: </label>
        <input type="password" placeholder="********" id="password" automplete="off"><br><br>

        <button type="submit">Register</button>
    </form>
    `

    //logic

    const $registerForm = document.getElementById('registerForm')
    $registerForm.addEventListener('submit', async button => {
        button.preventDefault();
        const $userName = document.getElementById('name')
        const $userEmail = document.getElementById('email')
        const $userBirthdate = document.getElementById('birthdate')
        const $userPassword = document.getElementById('password')
        

        if (!$userName.value || !$userEmail.value || !$userBirthdate.value || !$userPassword.value) {
            alert('All fields are required!!!')
            return;
        }

        //validar correo
        const isValid = emailValidator($userEmail.value)
        if (!isValid) {
            alert('Please enter a valid email');
            return;
        }

        //fetch

        const $userCreated = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name: $userName.value,
                email: $userEmail.value,
                birthdate: $userBirthdate.value,
                password: $userPassword.value,
                roleId: 2
            })
        })

        if (!$userCreated.ok) {
            alert('Error creating user');
            return;
        }
        alert('User Created successfully')
        navigateTo('/login');
    })
}

export function emailValidator(emailToValidate) {
    const email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return email.test(emailToValidate)
}