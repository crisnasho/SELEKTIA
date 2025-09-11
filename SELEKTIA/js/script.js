// Captura el formulario y evita recargar la página
document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  alert("¡Registro enviado con éxito!");
});
