# Firebase Cloud Functions API Template

This project is an API template built using firebase stack.

The API endpoints are hosted on firebase cloud functions.

The database used is Firestore.

The authentication is provided by firebase auth.

There is also firebase storage methods to upload and delete files.

## Starting

You must have a firebase project. To create a project, go to [firebase console](https://console.firebase.google.com/). Copy the `KEYS` provided by firebase in a `.env` file.

- After cloning this project, run `npm install`, and `npm start`. This will start the react application.
- Go to `cd functions` and run `npm install` to install firebase api dependencies. Run `npm run serve`. It will start to serve the API endpoints.

## Github Actions

In order to use github actions, it is necessary to:

- Create secret keys:
  - FIREBASE_TOKEN
  -

To create FIREBASE_TOKEN key, run `firebase login:ci` on your terminal.
