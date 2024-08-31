


// Función para mostrar/ocultar la contraseña
function togglePassword() {
    const passwordField = document.getElementById('contrasena_reg');
    const passwordFieldType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', passwordFieldType);
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.querySelector('#SaveUser'); // Selecciona el botón por su ID
    
    saveButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el envío real del formulario

        // Obtener los valores de los campos de contraseña
        const password1 = document.querySelector('input[name="contrasena_reg"]').value;
        const password2 = document.querySelector('input[name="Concontrasena2_reg"]').value;
        
        // Verificar si las contraseñas son iguales
        if (password1 === password2) {
            Swal.fire({
                title: "¡Buen trabajo!",
                text: "¡Las contraseñas coinciden!",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Oops...",
                text: "Las contraseñas no coinciden",
                icon: "error"
            });
        }
    });
});
