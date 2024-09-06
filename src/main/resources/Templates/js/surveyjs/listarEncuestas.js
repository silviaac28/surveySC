document.addEventListener('DOMContentLoaded', function() {
    const jwtToken = localStorage.getItem("jwtToken")
    console.log("SURVER CREATION JWTOKEN "+jwtToken)    

    fetch('http://localhost:8080/surveyapi/allsurvey',
    {
        
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken  
        }

    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Suponiendo que el backend devuelve un JSON
    })
    .then(data => {
        console.log('Datos recibidos:', data);  // Verifica los datos recibidos

        const encuestas = data.content || data; 

        if (!Array.isArray(encuestas)) {
            throw new Error('La estructura de datos no es un array.');
        }

        const encuestaList = document.getElementById('encuesta-list');

        encuestas.forEach(encuesta => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${encuesta.id}</td>
                <td>${encuesta.name}</td>
                <td>${encuesta.description}</td>
            `;
            encuestaList.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error al intentar obtener las encuestas:', error);
        alert('Error al intentar obtener las encuestas: ' + error.message);
    });
});