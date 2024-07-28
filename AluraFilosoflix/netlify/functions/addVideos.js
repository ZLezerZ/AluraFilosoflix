const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    try {
        const data = readFileSync(join(__dirname, '..', 'videos.json'), 'utf8');
        const videos = JSON.parse(data);
        const newVideo = JSON.parse(event.body);
        newVideo.id = videos.length ? videos[videos.length - 1].id + 1 : 1;
        videos.push(newVideo);
        writeFileSync(join(__dirname, '..', 'videos.json'), JSON.stringify(videos));
        return {
            statusCode: 201,
            body: JSON.stringify(newVideo),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al añadir el video' }),
        };
    }
};
