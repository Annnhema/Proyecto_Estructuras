const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Endpoint para interactuar con Gemini AI
app.get('/gemini-api', async (req, res) => {
    try {
        const response = await axios.post('https://gemini.api.url/endpoint', {
            prompt: 'Generar un resumen de las estructuras de datos en informática.',
            // otros parámetros necesarios dependiendo de la API de Gemini
        }, {
            headers: {
                'Authorization': `AIzaSyDMlkKmK5LhSs0UKwNPsfeRGSp2X1F5mbw`,  // Reemplaza con tu clave API
                'Content-Type': 'application/json'
            }
        });

        // Enviar respuesta de Gemini al cliente
        res.json(response.data);
    } catch (error) {
        console.error('Error al llamar a la API de Gemini:', error);
        res.status(500).send('Error al procesar la solicitud');
    }
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
