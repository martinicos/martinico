// crea un botón
var btn = document.createElement("button");
btn.innerHTML = "Contáctame!";

// agrega un evento para abrir el correo electrónico al hacer clic en el botón
btn.addEventListener("click", function() {
  window.location.href = "mailto:hermida.martin@gmail.com";
});

// agrega el botón al documento HTML
document.body.appendChild(btn);
