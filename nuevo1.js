// Importar Firebase y los servicios necesarios
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCv66O2T_O4IQhrqEyEmHDxwJR7oaZfdmg",
    authDomain: "prueba3-2cced.firebaseapp.com",
    projectId: "prueba3-2cced",
    storageBucket: "prueba3-2cced.appspot.com",
    messagingSenderId: "550233075071",
    appId: "1:550233075071:web:f9e4dbf5d56fd2dec6be4a",
    measurementId: "G-W2N0JX0XKE"
  };

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener referencias a los servicios que necesitas
const auth = firebase.auth();
const db = firebase.firestore();

// Manejar el envío del formulario
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Añadir un nuevo documento con un ID generado automáticamente
  db.collection('users').add({
    name: name,
    email: email
  })
  .then((docRef) => {
    console.log("Documento escrito con ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error añadiendo documento: ", error);
  });
});
