function getTrivia() {
    const numberOrDate = document.getElementById('inputNumber').value;
    axios.get(`http://numbersapi.com/${numberOrDate}`)
        .then(response => {
            displayTrivia(response.data);
        })
        .catch(error => {
            console.error('Error fetching trivia:', error);
        });
}

function displayTrivia(trivia) {
    const resultDiv = document.getElementById('result');
    const table = resultDiv.querySelector('table');
    if (!table) {
        // If table doesn't exist, create a new one with headers
        resultDiv.innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Number/Date</th>
                        <th>Trivia</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
        table = resultDiv.querySelector('table');
    }
    
    // Append new trivia to the table
    const tbody = table.querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${document.getElementById('inputNumber').value}</td>
        <td>${trivia ? trivia : 'No trivia found'}</td>
    `;
    tbody.appendChild(newRow);
}




function saveTrivia() {
    const description = document.getElementById('description').value;
    const trivia = document.getElementById('result').innerText.trim();

    axios.post('http://localhost:3000/trivia', { description, trivia })
        .then(response => {
            console.log('Trivia saved successfully:', response.data);
            alert('Trivia saved successfully!');
        })
        .catch(error => {
            console.error('Error saving trivia:', error);
            alert('Error saving trivia. Please try again later.');
        });
}

// Social Media Icons hover effect
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#007bff';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.color = '#333';
    });
});
