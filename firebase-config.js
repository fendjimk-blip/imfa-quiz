// Konfigirasyon Firebase pou IMFA QUIZ
const firebaseConfig = {
  apiKey: "AIzaSyBmctH-ew3hyMF7Qwhc8_4dkAKQdsUJrY4",
  authDomain: "imfa-quiz.firebaseapp.com",
  projectId: "imfa-quiz",
  storageBucket: "imfa-quiz.firebasestorage.app",
  messagingSenderId: "923231921590",
  appId: "1:923231921590:web:1d0633e6cadd9f29bc0d17"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
