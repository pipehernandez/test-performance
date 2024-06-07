import { navigateTo } from "../Router";

export function privateLayout($content, logic) {

    const $nav = `
    <nav>
        <ul>
            <li><a id="reserve" href="reserve">Reserve</a></li>
            <li><a id="logOut" href="logOut">LogOut</a></li>
        </ul>
    </nav>`
    const root = document.getElementById('root');
    root.innerHTML = `
    ${$nav}
    ${$content}
    `;

    logic()
    
    const $logOutAnchor = document.getElementById('logOut')
    $logOutAnchor.addEventListener('click', event => {
        event.preventDefault();
        localStorage.removeItem('token')
        navigateTo('/login')
    })
    const $reserveAnchor = document.getElementById('reserve')
    $reserveAnchor.addEventListener('click', event => {
        event.preventDefault();
    })
}