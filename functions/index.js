const FirebaseConfig = require("./FirebaseConfig");
const api = require("./api");
const functions = FirebaseConfig.functions;
const firestore = FirebaseConfig.firestore;
const storageBucket = FirebaseConfig.storageBucket;
const admin = FirebaseConfig.admin;

// calling api functions on http requests - will be added a /api on path
exports.api = functions.https.onRequest(api);

// https://crontab.guru/
// cron function example
const runtimeOptions = {
  timeoutSeconds: 300,
  memory: "256MB",
};

exports.midnightCron = functions
  .runWith(runtimeOptions)
  .pubsub.schedule("0 0 * * *")
  .onRun(async () => {
    console.log("midnightCron() called - time to check");
  });

console.log("SERVER STARTED!");
