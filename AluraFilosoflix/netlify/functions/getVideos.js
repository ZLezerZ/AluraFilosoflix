const videos = require('../../../db.json');

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify(videos)
    };
};