const fs = require('fs');
const path = require('path');
const videosPath = path.resolve(__dirname, './videos.json');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    const newVideo = JSON.parse(event.body);
    const videos = JSON.parse(fs.readFileSync(videosPath, 'utf-8'));

    newVideo.id = videos.length ? videos[videos.length - 1].id + 1 : 1;
    videos.push(newVideo);

    fs.writeFileSync(videosPath, JSON.stringify(videos, null, 2));

    return {
        statusCode: 201,
        body: JSON.stringify(newVideo)
    };
};
