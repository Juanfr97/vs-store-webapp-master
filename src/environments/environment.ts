// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
 // url_api: 'https://aljuvifoods-webapi.azurewebsites.net/api',
  url_api: 'https://localhost:7257/api',
  firebaseConfig : {
    apiKey: "AIzaSyDXkfaMQF39FRNeDyIuTHcW75Ksqw7qUZg",
    authDomain: "shoes-store-99bdd.firebaseapp.com",
    projectId: "shoes-store-99bdd",
    storageBucket: "shoes-store-99bdd.appspot.com",
    messagingSenderId: "179133604251",
    appId: "1:179133604251:web:d382cbe5260fad28c6413e",
    measurementId: "G-FFBZQ9423W"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
