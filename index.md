---
layout: home
---

# Hola, soy Martinico

Bienvenido a mi sitio web, donde te contaré algunas de mis aventuras como duende y también te enseñaré cosas interesantes sobre la mitología, la historia y la cultura de España.

![Martinico](/assets/images/martinico.jpg)

Aquí puedes ver algunas de mis últimas entradas de blog:

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}

Si quieres saber más sobre mí, puedes visitar la página [Sobre mí](/about/).

Espero que te diviertas y aprendas conmigo. ¡Hasta pronto!
Para crear el código css, puedes usar el lenguaje de estilos sass, que es más potente y se compila automáticamente a css cuando se publica la página. Por ejemplo, el archivo _sass/minimal-mistakes/_variables.scss podría tener estas modificaciones:
// Colors
$primary-color: #ff0000; // rojo
$secondary-color: #00ff00; // verde
$tertiary-color: #0000ff; // azul

// Fonts
$base-font-family: "Comic Sans MS", cursive, sans-serif;
$heading-font-family: "Comic Sans MS", cursive, sans-serif;
Para crear el código javascript, puedes usar el lenguaje de programación jquery, que es más fácil y se ejecuta automáticamente en el navegador cuando se carga la página. Por ejemplo, el archivo assets/js/main.min.js podría tener esta función añadida:
$(document).ready(function(){
  // Mostrar un mensaje al hacer clic en el logo
  $(".logo").click(function(){
    alert("Hola, soy Martinico. Gracias por visitar mi sitio web.");
  });
});
