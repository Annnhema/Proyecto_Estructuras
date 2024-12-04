const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Importamos el middleware de CORS

const app = express();
const port = 3000;

// Habilitamos CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware para procesar solicitudes JSON
app.use(express.json());

// Ruta que llama a la API de Gemini y devuelve el resultado
app.get('/gemini-api', async (req, res) => {
    try {
        const prompt = 'Generar un resumen sobre las estructuras de datos en informática.'; // Prompt fijo

        // Hacemos la solicitud a la API de Gemini
        const response = await axios.post('https://gemini.api.url/endpoint', {
            prompt: prompt,
        }, {
            headers: {
                'Authorization': `AIzaSyAONJIdS8oa7IUXUSFmJ3WLFKbfRr2hH-A`,  // Reemplaza con tu clave API de Gemini
                'Content-Type': 'application/json'
            }
        });

        // Responder con la información generada por Gemini
        res.json(response.data);
    } catch (error) {
        console.error('Error al llamar a la API de Gemini:', error);
        res.status(500).send('Error al procesar la solicitud');
    }
});

// Iniciamos el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
