export function dashboardPageCreate() {
    const $content = `
    <div>
        <h2>Create new Flight</h2>
    </div>
    <form>
        <label>Flight Number: </label>
        <input type="number"><br><br>

        <label>Origin: </label>
        <select name="origin">
            <option>JFK</option>
            <option>LAX</option>
            <option>MIA</option>
            <option>CDG</option>
        </select><br><br>

        <label>Destination: </label>
        <select name="destination">
            <option value="JFK">JFK</option>
            <option value="LAX">LAX</option>
            <option value="MIA">MIA</option>
            <option value="CDG">CDG</option>
        </select><br><br>

        <label>Departure: </label>
        <input type="date" id="departure"/><br><br>

        <label>Arrival: </label>
        <input type="date" id="arrival"/><br><br>

        <button type="submit">Create Flight</button>

    </form>
    `
    //logic
    const logic = ()=>{
        const $createFlightForm = document.getElementsByTagName('form')[0];
        $createFlightForm.addEventListener('submit', async button => {
            button.preventDefault();
            const $flightNumber = document.getElementsByTagName('input')[0];
            const $flightOrigin = document.getElementsByName('origin')[0];
            const $flightDestination = document.getElementsByName('destination')[0];
            const $flightDeparture = document.getElementById('departure');
            const $flightArrival = document.getElementById('arrival');

            if (!$flightNumber.value || !$flightOrigin.value || !$flightDestination.value || !$flightDeparture.value || !$flightArrival.value) {
                alert("All fields are required!!!");
                return;
            }
            if ($flightDestination.value === $flightOrigin.value) {
                alert("There are no flights from one origin to the same place for destination");
                return
            }

            //fetch

            const $flightCreated = await fetch('http://localhost:3000/flights', {
                method: 'POST',
                headers: {
                    'Content-type': 'aplication/json',
                },
                body: JSON.stringify({
                    number: $flightNumber.value,
                    origin: $flightOrigin.value,
                    destination: $flightDestination.value,
                    departure: $flightDeparture.value,
                    arrival: $flightArrival.value,
                    capacity: 100
                })
            })

            if (!$flightCreated.ok) {
                alert('Error creating flight');
                return;
            }
            alert('Flight created succesfully');
            
        })
    }
    return {
        $content,
        logic
    }
}