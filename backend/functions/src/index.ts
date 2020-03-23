import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const sendMessage = functions.https.onRequest((request, response) => {
    const expectedBody = [ 'name', 'email', 'message' ];
    const body = JSON.parse(Buffer.from(request.rawBody).toString());

    response.set('Access-Control-Allow-Origin', '*');

    const errors = expectedBody.filter((field) => Object.keys(body).includes(field) !== true);
    if (errors.length) {
        return response.status(400).send({ result: 'warning', message: 'missing fields', details: errors });
    }

    const db = admin.firestore();
    const messages = db.collection('messages').doc();

    const message = {
        ...body,
    };

    return messages.create(message)
        .then(() => response.send({ result: 'success' }))
        .catch((error: Error) => response.status(500).send({ result: 'error', message: 'database connection', details: error.message }));
});
