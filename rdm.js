// Obtiene la referencia a la imagen y al elemento donde se mostrará la información
var imagen = document.getElementById("mi-imagen");
var informacion = document.getElementById("informacion");

// Escucha el evento "clic" en la imagen y muestra la información
imagen.addEventListener("click", function() {
  informacion.innerHTML = "mail: hermida.martin@gmail.com";
});
