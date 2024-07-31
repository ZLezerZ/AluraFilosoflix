import videos from '../../db.json';

export async function handler(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify(videos),
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    };
}
