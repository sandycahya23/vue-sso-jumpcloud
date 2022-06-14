import firebaseAdmin from 'firebase-admin';
// import { getAuth } from "firebase/auth";

export default (context, inject) => {
  const firebaseConfig = {
      apiKey: 'AIzaSyCnwcg9Y5WvGFglqDNseYwGJUMOL8SMpMg',
      authDomain: 'jumpcloud-poc.firebaseapp.com',
      // databaseURL: '<replace this>',
      // projectId: '<replace this>',
      // storageBucket: '<replace this>',
      // messagingSenderId: '<replace this>'
  }
  const firebaseApp = firebaseAdmin.initializeApp(firebaseConfig);
  // const auth = getAuth(app);

  inject('firebaseApp', firebaseApp);
}
