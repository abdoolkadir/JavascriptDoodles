// Get Text File
document.getElementById('button1').addEventListener('click', getText);

// Get JSON File
document.getElementById('button2').addEventListener('click', getJson);

// // Get from External API
document.getElementById('button3').addEventListener('click', getExternal);

// Get Text file
function getText() {
        fetch('Test.txt')
        .then(res => res.text())
        .then(data => {
            // console.log(resolve(data))
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => err);
};

// Get Json file
function getJson() {
    fetch('superheroes.json')
        .then(res => res.json())
        .then(data => {
            let output = '';

            data.forEach(hero => {
                output += `
                <li>${hero.name}</li>
                <li>${hero.age}</li>
                <li>${hero.secretIdentity}</li>
                <li>${hero.powers} </li>
                `;
            });

            document.getElementById('output').innerHTML = output;
        })
}

// Get External API
function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            let output = '';

            data.forEach(user => {
                output += `
                <li>${user.login}</li>
                `;
            })
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => err)
}