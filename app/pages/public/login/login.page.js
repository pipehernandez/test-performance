import { navigateTo } from "../../../Router";

export function loginPage() {
    const root = document.getElementById('root');
    root.innerHTML = `
    <h1>Login Here!</h1>
    <form id="loginForm">
        <label>Email: </label>
        <input type="email" placeholder="jhondoe@example.com" id="email"><br><br>

        <label>Contraseña: </label>
        <input type="password" placeholder="********" id="password"><br><br>

        <button type="submit">Log In</button>
    </form>
    `
    //logic

    const $loginFrom = document.getElementById('loginForm');
    $loginFrom.addEventListener('submit', async button => {
        button.preventDefault();
        const $userEmail = document.getElementById('email')
        const $userPassword = document.getElementById('password')

        if (!$userEmail.value || !$userPassword.value) {
            alert('All fields are required!!!')
            return;
        }

        //fetch

        const $usersFetched = await fetch('http://localhost:3000/users');

        if (!$usersFetched.ok) {
            alert('Error in LogIn');
            return;
        }

        const $usersToJson = await $usersFetched.json();
        const $userFound = $usersToJson.find(user => user.email === $userEmail.value);

        if (!$userFound) {
            alert("User Not Found");
            return;
        }

        if ($userFound.password !== $userPassword.value) {
            alert("Invalid password");
            return;
        }

        const token = Math.random().toString(36).substring(2);
        localStorage.setItem('token', token);
        navigateTo('/dashboard')
    })
}