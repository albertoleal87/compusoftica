<div id="header">
 <div class="wrapper">
  <div id="logo"><a href="index.html"><img src="images/logo.png" alt="Fluentum" /></a></div>
  <!--
  <ul id="icond">
   <li id="facebook"><a href="http://www.facebook.com/pages/Fluentum/110417372338582" title="S&iacute;guenos en Facebook">S&iacute;guenos en Facebook</a></li>
   <li id="twitter"><a href="http://www.twitter.com/fluentum" title="S&iacute;guenos en Twitter">S&iacute;guenos en Twitter</a></li>
  </ul>
-->  
  <div class="clear"></div>
  
  <ul class="nav">
<li 
<?php 
if (@$title == "index")
{
echo<<<formulario
class="current"
formulario;
}
 ?>
 ><a href="index.php" class="vcenter">Inicio</a></li>
   
   <li <?php 
if (@$title == "dispagweb")
{
echo<<<formulario
class="current"
formulario;
}
 ?>><a href="dispagweb.php">Diseño de<br />Paginas WEB</a></li>
   
   <li <?php 
if (@$title == "desarrollo")
{
echo<<<formulario
class="current"
formulario;
}
 ?>><a href="desarrollo.php">Desarrollo de<br/>SoftWare</a></li>
    
   <li <?php 
if (@$title == "soporte")
{
echo<<<formulario
class="current"
formulario;
}
 ?>><a href="soporte.php">Soporte<br/>Tecnico</a></li>

 <!--  <li <?php 
if (@$title == "nuestra")
{
echo<<<formulario
class="current"
formulario;
}
 ?>><a href="#" class="nav-show">Nuestra<br/>Empresa</a> <a href="#" class="nav-hide" style="display:none">Nuestra<br/>Empresa</a></li>
  --> 
   <li <?php 
if (@$title == "contactanos")
{
echo<<<formulario
class="current"
formulario;
}
 ?>><a href="contactanos.php" class="vcenter">Contactanos</a></li>
  </ul>
  
  <div style="clear:both"></div>
 </div>
</div>
