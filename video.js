

<HTML>
<HEAD>
<TITLE>Ejemplo de links con audio</TITLE>
</HEAD>
<BODY>




<BODY bgcolor="#00FFFF" >
<CENTER>
<h2>Enlaces con ficheros de audio</h2></center>

Con links:
<p>
<img src="altavoz.gif" BORDER=0>
<A HREF="javascript:void window.open('mozart.htm','popup','width=320,height=105,toolbar=no,scrollbars=no');">
&nbsp;Sinf. N&uacute;mero 40</A>
&nbsp; &nbsp; &nbsp;
<img src="altavoz.gif" BORDER=0>
<A HREF="javascript:void window.open('minueto.htm','popup','width=320,height=105,toolbar=no,scrollbars=no');">
&nbsp;Minueto</A>
<p>
Con listas de formularios:
<p>
<form>
<!-- <input type="button" value="ejecutar" onClick="top.location.href=this.form.servicio.options[this.form.servicio.selectedIndex].value;"> -->
<select name="servicio" size="2" onchange="top.location.href=this.form.servicio.options[this.form.servicio.selectedIndex].value">
<option value="javascript:void window.open('mozart.htm','popup','width=320,height=105,toolbar=no,scrollbars=no');">Mozart</option>
<option value="javascript:void window.open('minueto.htm','popup','width=320,height=105,toolbar=no,scrollbars=no');">Minueto</option>
</select>
</form>
<p>

Tambi&eacute;n con botones radio:
<p>
<form name="servicio" method="get">
 
Mozart <input type="radio" name="musica" onClick="javascript:void window.open('mozart.htm','popup','width=320,height=105,toolbar=no,scrollbars=no');" >

Minueto <input type="radio" name="musica" onClick="javascript:void window.open('minueto.htm','popup','width=320,height=105,toolbar=no,scrollbars=no');">

</form>

O con casillas de verificaci&oacute;n:
<p>
<form name="servicio" method="get">
 
Mozart <input type="checkbox" name="musica" onClick="javascript:void window.open('mozart.htm','popup','width=320,height=105,toolbar=no,scrollbars=no');" >

Minueto <input type="checkbox" name="musica" onClick="javascript:void window.open('minueto.htm','popup','width=320,height=105,toolbar=no,scrollbars=no');">

</form>




<p>&nbsp;
<hr>
<center>
<h3>
[<a href="javascr.htm">Volver</a>]
</h3>
</center>
</BODY>
</HTML>
