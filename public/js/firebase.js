let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyDGsMGqv7EsjaSIq68cfYcgkJXZNWmfC5c",
    authDomain: "programming-blog-9aaac.firebaseapp.com",
    projectId: "programming-blog-9aaac",
    storageBucket: "programming-blog-9aaac.appspot.com",
    messagingSenderId: "379707289578",
    appId: "1:379707289578:web:be9f32fa5f6216c753cc93"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();