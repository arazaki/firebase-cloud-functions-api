# Firebase Cloud Functions API Template

This project is an API template built using firebase stack.

The API endpoints are hosted on firebase cloud functions.

The database used is Firestore.

The authentication is provided by firebase auth.

There is also firebase storage methods to upload and delete files.

## Starting

### 1. Create a new repository

Select the option `Use this template` to create a new repository.

Inform a name to your new repository and select `Private`.

Clone your repository and open on your IDE.

### 2. Create a firebase project

Go to your firebase console and create a new project, or use a existing one. Must be a project with billing so you can use Cloud Functions.

To create a project, go to [firebase console](https://console.firebase.google.com/). Copy the `KEYS` provided by firebase in a `.env` file.

```env
REACT_APP_API_KEY="apiKey"
REACT_APP_AUTH_DOMAIN="authDomain"
REACT_APP_PROJECT_ID="projectId"
REACT_APP_STORAGE_BUCKET="storageBucket"
REACT_APP_MESSAGING_SENDER_ID="messagingSenderId"
REACT_APP_APP_ID="appId"
REACT_APP_MEASUREMENT_ID="measurementId"
REACT_APP_CLOUD_FUNCTION_API_URL="cloudFunctionApiUrl" -> find this after deploying your cloud functions for the first time
```

#### Starting firebase on terminal

- Login into your firebase account with `firebase login`.
- Run `firebase init` on terminal
- Select `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`
- Select `Hosting: Set up GitHub Action deploys`
- Select `Emulators: Set up local emulators for Firebase products`
- Select `Functions: Configure a Cloud Functions directory and its files`
- Hit `Enter`
- Select `Use an existing project` and hit `Enter`
- Select the project you created and hit `Enter`
- Select your preferred language and hit `Enter`
- Select your preferred configuration regarding ESLint
- Select `No` for overwriting `functions/package.json` file and hit `Enter`.
- Select `No` for overwriting `functions/index.js` file and hit `Enter`.
- Select `No` for overwriting `functions/.gitignore` file and hit `Enter`.
- Select `Yes` for installing dependencies with npm and hit `Enter`.
- Inform `build` as public directory and hit `Enter`.
- Select `Yes` for configuring as a single-page app and hit `Enter`.
- Select `Yes` for setup automatic builds and deploys and hit `Enter`.
- Login into your account.
- Inform the repository created for this project and hit `Enter`.
- Select `No` for Set up the workflow to run a build script before every deploy?
- Select `No` for GitHub workflow file for PR previews exists. Overwrite? firebase-hosting-pull-request.yml
- Select `No` for Set up automatic deployment to your site's live channel when a PR is merged?
- Select `Functions Emulator` and `Hosting Emulator` and hit `Enter`
- Hit `Enter` to select the recommended port for functions emulator
- Hit `Enter` to select the recommended port for hosting emulator
- Inform `Yes` to enable Emulator UI and hit `Enter`.
- Hit `Enter` to select the recommended port for emulator UI
- Inform `Yes` to download the emulators and hit `Enter`.

#### Updating files

On the project folder find the files `.github/workflows/firebase-hosting-merge.yml` and `.github/workflows/firebase-hosting-pull-request.yml`.

Update the variable `YOUR_FIREBASE_SERVICE_ACCOUNT` with your firebase service account. You can find on the repository settings (github), under `Secrets/Actions`.

### 3. Create Keys on Github

On Github Secret Actions, create the same keys present on the `.env` file. For that, select `New repository secret`. That is going to be used for on the deployment process.

Create an additional key called `FIREBASE_TOKEN`. For that, run `firebase login:ci` on your terminal.

That will open an OAUTH popup.

Copy the token and save on Github Secret Actions under the name `FIREBASE_TOKEN`.

#### Cloud Function first deploy

Run `npm install` on the project root folder to install the dependencies.

Go to `functions` folder `cd functions`.

Run `npm run deploy`.

#### Create the REACT_APP_CLOUD_FUNCTION_API_URL key on Github

Go to [firebase console](https://console.firebase.google.com/), and under your project, select `Functions` and copy the HTTP url (hover the Request on Trigger column).

Go to the `.env` file and update the `REACT_APP_CLOUD_FUNCTION_API_URL` with this url.

Create a new repository secret on Github Secret Actions.

### 3. Commands

- Run `npm install`, and `npm start`. This will start the react application.
- Go to `cd functions` and run `npm install` to install firebase api dependencies. Run `npm run serve`. It will start to serve the API endpoints.

### 4. Cloud functions first deploy
