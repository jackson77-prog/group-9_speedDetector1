function calculateSpeed() {
    var speed = parseInt(document.getElementById('speedInput').value);
    var points = 0;

    if (speed <= 70) {
        displayOutput('Ok');
    } else {
        points = Math.floor((speed - 70) / 5);

        if (points > 12) {
            displayOutput('License suspended', true);
        } else {
            displayOutput('Points: ' + points);
        }
    }
}

function displayOutput(message, suspended = false) {
    var outputDiv = document.createElement('div');
    outputDiv.className = suspended ? 'suspended' : 'output';
    outputDiv.textContent = message;

    var body = document.body;
    body.appendChild(outputDiv);
}
