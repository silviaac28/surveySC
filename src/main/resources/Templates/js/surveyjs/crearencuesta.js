function guardarEncuestaCrear() {
    const nombreEncuesta = document.getElementById('nombreEncuesta').value;
    const descripcionEncuesta = document.getElementById('descripcionEncuesta').value;
    const jwtToken = localStorage.getItem("jwtToken")
    console.log("SURVER CREATION JWTOKEN "+jwtToken)      

    fetch('http://localhost:8080/surveyapi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken  
        },
        body: JSON.stringify({
            name: nombreEncuesta,
            description: descripcionEncuesta,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Encuesta creada con éxito!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al crear la encuesta.');
    });
}