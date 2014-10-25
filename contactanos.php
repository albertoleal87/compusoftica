<?php

$title = 'contactanos';

include('head.php');

include('header.php');

include('panel.php');



?>
<div id="main">
 <div class="wrapper">
  <div id="maincont">
   <div id="maint">
    <div id="maintl"><a href="index.html">Contacto</a></div>
    <div id="maintm"></div>
    <div id="maintr"></div>
   </div>
   <div id="mainm">
    <div id="mainml">
     <div id="lnav">
      <ul>
      </ul>
     </div>
     <div id="mainmr">
      <h1>Contacto</h1>
      <div style="text-align:center;">
       <p><a href="http://maps.google.com/maps?f=q&source=s_q&hl=es&geocode=&q=Rio+Orinoco+383,+Oriente+Colonia+del+Valle+66220,+San+Pedro+Garza+Garcia,+Nuevo+Leon,+Mexico&sll=25.66349,-100.377452&sspn=0.012088,0.026157&ie=UTF8&hq=&hnear=Rio+Orinoco+383,+Del+Valle,+San+Pedro+Garza+Garcia,+Nuevo+Leon,+Mexico&t=h&z=16">Dirección: Monterrey, Nuevo Le&oacute;n, M&eacute;xico.</a></p>
       <p>Teléfono:+52(811)50-85-803</p>
       <div id="formlayout">
        <form method="post" name="contact">
         <label for="Subj">Asunto:</label>
         <input type="text" name="Subj" placeholder="El asunto del mensaje" />
         <label for="Name">Nombre:</label>
         <input type="text" name="Name" placeholder="Su nombre" />
         <label for="Tel">Tel&eacute;fono:</label>
         <input type="text" name="Tel" placeholder="Teléfono para contactarlo" />
         <label for="Email">Email:</label>
         <input type="text" name="Email" placeholder="Su correo electrónico" />
         <label for="Message">Mensaje:</label>
         <textarea name="Message" rows="5" ></textarea>
         <div class="clear"></div>
         

<!--
         <div id="recaptcha">
          <div id="recaptcha_image"></div>
          <div class="recaptcha_only_if_incorrect_sol" style="color:red">Incorrecto, intente de nuevo.</div>
          <span class="recaptcha_only_if_image">Escriba las dos palabras:</span><span class="recaptcha_only_if_audio">Escriba los números que escuche:</span>
          <input type="text" id="recaptcha_response_field" name="recaptcha_response_field" />
          <div id="recaptcha_btns"><a href="javascript:Recaptcha.reload()" class="recaptcha_reload" title="Probar otro reto">Probar otro reto</a><a href="javascript:Recaptcha.switch_type('audio')" class="recaptcha_only_if_image" title="Reto audible">Reto audible</a><a href="javascript:Recaptcha.switch_type('image')" class="recaptcha_only_if_audio" title="Reto visual">Reto visual</a><a href="javascript:Recaptcha.showhelp()" class="recaptchashowhelp" title="Ayuda">Ayuda</a> </div>
          <script type="text/javascript">var RecaptchaOptions={lang:'es',theme:'custom'};</script>
          <script type="text/javascript" src="http://api.recaptcha.net/challenge?k=6LfkfcMSAAAAADajc3yuxDbK1UmFLCOCFehSqUkz"></script>

	<noscript>
  		<iframe src="http://api.recaptcha.net/noscript?k=6LfkfcMSAAAAADajc3yuxDbK1UmFLCOCFehSqUkz" height="300" width="500" frameborder="0"></iframe><br>
  		<textarea name="recaptcha_challenge_field" rows="3" cols="40"></textarea>
  		<input type="hidden" name="recaptcha_response_field" value="manual_challenge">
	</noscript>         </div>
-->


         <div id="mstatus"></div>
         <input type="button" name="submit" value="Enviar" class="submit" onclick="send()" />
        </form>
       </div>
     <!--  <iframe width="350" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?source=s_q&f=q&hl=es&geocode=&q=Rio+Orinoco+383,+Oriente+Colonia+del+Valle+66220,+San+Pedro+Garza+Garcia,+Nuevo+Leon,+Mexico&sll=25.66349,-100.377452&sspn=0.012088,0.026157&ie=UTF8&hq=&hnear=R%C3%ADo+Orinoco+383,+Monterrey,+Nuevo+Le%C3%B3n,+M%C3%A9xico&ll=25.663036,-100.358219&spn=0.030946,0.029955&z=14&iwloc=A&output=embed" style="float:right"></iframe>-->
       <br />
       <br />
      </div>
     </div>
    </div>
   </div>
   <div id="mainb">
    <div id="mainbl"></div>
    <div id="mainbm"></div>
    <div id="mainbr"></div>
   </div>
  </div>
 </div>
 <div class="clear"></div>
<?php

include ('footer.php')

?>
</div>
</body>
</html>

<!-- Localized -->