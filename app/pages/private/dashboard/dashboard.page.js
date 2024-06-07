import { navigateTo } from "../../../Router"

export function dashboardPage(){
    const $content = `
    <div id="Flights">
        <h1>Flights</h1>
    </div>
    <button id="create">Create new flight</button>
    <button id="edit">Edit flight</button>
    `
    const logic = () => { 
        const $createBtn = document.getElementById('create')
        const $editBtn = document.getElementById('edit')

        //verificar si el roleId es 1 para habilitar la pagina o no
        $createBtn.addEventListener('click', async e => {
            const $usersFetched = await fetch('http://localhost:3000/users');
            
            const $usersToJson = await $usersFetched.json();
            const $roleIdUser = $usersToJson.find(user => user.roleId === 1)
            console.log($roleIdUser)
        })
        //verificar si el roleId es 1 para habilitar la pagina o no
        $editBtn.addEventListener('click', async e => {
            const $usersFetched = await fetch('http://localhost:3000/users');

            const $usersToJson = await $usersFetched.json();
            const $roleIdUser = $usersToJson.find(user => user.roleId === 1)
            console.log($roleIdUser)
        })
    }
    return {
        $content,
        logic
    }
}