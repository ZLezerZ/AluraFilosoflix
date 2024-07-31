// functions/deleteVideo.js
const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/emika/Documents/Leo/Alura Oracle/AluraFilosoflix/AluraFilosoflix/db.json';

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'DELETE') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method not allowed' }),
        };
    }

    const { id } = JSON.parse(event.body);

    if (!id) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Id is required' }),
        };
    }

    try {
        // Leer el archivo db.json
        const data = fs.readFileSync(filePath, 'utf-8');
        const db = JSON.parse(data);

        // Buscar y eliminar el video por id
        const newVideos = db.videos.filter(video => video.id !== id);
        db.videos = newVideos;

        // Guardar el archivo actualizado
        fs.writeFileSync(filePath, JSON.stringify(db, null, 2), 'utf-8');

        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Video with id ${id} deleted successfully.` }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};
