const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
    }

    try {
        const filePath = 'C:/Users/emika/Documents/Leo/Alura Oracle/AluraFilosoflix/AluraFilosoflix/db.json';
        const data = readFileSync(filePath, 'utf8');
        const db = JSON.parse(data);
        const nuevoVideo = JSON.parse(event.body);

        if (!Array.isArray(db.videos)) {
            throw new Error('El contenido de db.json no es un array');
        }
        
        db.videos.push(nuevoVideo);
        writeFileSync(filePath, JSON.stringify(db, null, 2));

        return {
            statusCode: 200,
            body: JSON.stringify(nuevoVideo),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Error al añadir el video: ${error.message}` }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
    }
};
