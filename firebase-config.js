/* Shared database for "Marked locations" (Firebase Firestore).
   Until this holds a real project config, marks are saved only in each person's browser.
   Paste the config from Firebase console > Project settings > Your apps > Web app.
   With a databaseURL the Realtime Database is used (path /marks); otherwise Firestore. e.g.:
   window.NBS_FIREBASE = {
     apiKey: "...", authDomain: "your-project.firebaseapp.com", projectId: "your-project",
     storageBucket: "your-project.appspot.com", messagingSenderId: "...", appId: "..."
   };
   (This web config is not a secret; access is controlled by the Firestore security rules.) */
window.NBS_FIREBASE = null;
