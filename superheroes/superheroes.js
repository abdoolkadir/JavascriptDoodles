// Event listeners
document.getElementById('superheroes').addEventListener('click', loadSuperheroes)

function loadSuperheroes() {
    // Create XHR object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'superheroes.json', true);

    // on load function
    xhr.onload = function() {
        if(this.status === 200) {
            const superheroes = JSON.parse(this.responseText);

            const members = superheroes.members;

            
            document.getElementById('superheroes-output').innerHTML = `<p>Squad Name: ${superheroes.squadName}</p>
            <p>Home Town: ${superheroes.homeTown}</p>
            <p>Formed: ${superheroes.formed}</p>
            <p>Secret Base: ${superheroes.secretBase}</p>
            <p>Active: ${superheroes.active}</p>
            <p>Members</p>
            `;

            members.forEach(function(hero){

                document.getElementById('superheroes-output').innerHTML += `
                    <ul>
                        </li>
                            <ul>
                                <li>Name: ${hero.name}</li>
                                <li>Age: ${hero.age}</li>
                                <li>SecretIdentity: ${hero.secretIdentity}</li>
                                <li>Powers: ${hero.powers}</li>
                            </ul>
                        </li>
                    </ul>
                `;

            })
            // console.log(members[2].powers)
        }
    }

    xhr.send();
    // const superhero = new Superheroes()
}