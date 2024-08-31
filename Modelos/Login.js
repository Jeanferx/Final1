// Función para mostrar/ocultar la contraseña
function togglePassword() {
  const passwordField = document.getElementById('contrasena_reg');
  const passwordFieldType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', passwordFieldType);
}

// Agregar evento para mostrar un mensaje con SweetAlert cuando se envía el formulario
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío real del formulario
      Swal.fire({
          title: "¡Buen trabajo!",
          text: "¡Hiciste clic en el botón!",
          icon: "success"
      });
  });
});
