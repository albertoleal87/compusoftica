/*//This is for the navigation icons
$(document).ready(function(){
	$(".icond a").append("<em></em>");
	$(".icond a").hover(function() {
		$(this).find("em").animate({opacity: "show", top: "-28"}, "slow"); 
		var hoverText = $(this).attr("title");
	    $(this).find("em").text(hoverText);
	}, function() {
		$(this).find("em").animate({opacity: "hide", top: "-38"}, "fast");
	});
});
*/
// navigation menu
/*test javascript:alert(document.getElementById("banneri").style.backgroundPosition); */
$(document).ready(function(){
	$(".nav-show").click(function(){
		$('.nav-show').css("display","none");
		$('.nav-hide').css("display","block");
		$("#banneri").animate({"backgroundPosition":"50% -148px"},"slow");
		$("#panel").slideToggle("slow");
		$.cookie('navi','expanded',{path: '/'});
		return false;
	});
	$(".nav-hide").click(function(){
		$('.nav-hide').css("display","none");
		$('.nav-show').css("display","block");
		$("#banneri").animate({"backgroundPosition":"50% -120px"},"slow");/*-=41px*/
		$("#panel").slideToggle("slow");
		$.cookie('navi', 'collapsed',{path: '/'});
		return false;
	});
	$("#panel").css("display","none");
	$('#more').css("display","none");
	var nav = $.cookie('navi');
	if (nav == 'expanded'){
		$("#panel").css("display","block");
		$("#banneri").css("backgroundPosition","50% -148px");
		$('.nav-show').css("display","none");
		$('.nav-hide').css("display","block");		
	}	;
});
function showbiz(){
	$.cookie('navi','expanded',{path: '/'});
	$(document).ready(function(){
	$("#panel").css("display","block");
	$('.nav-show').css("display","none");
	$('.nav-hide').css("display","block");
});
}

//For the close button in the home page
$(document).ready(function(){
	$(".pane .close").click(function(){
		$(this).parents(".pane").animate({ opacity: 'hide' }, "slow");
	});
});

//old banner code, disabled
/*
$(document).ready(function() {			
	//Execute the slideShow
	slideShow();
});
function slideShow() {
	//Set the opacity of all images to 0
	$('#slider a').css({opacity: 0.0});
	//Get the first image and display it (set it to full opacity)
	$('#slider a:first').css({opacity: 1.0});
	//Set the caption background to semi-transparent
	$('#slider .caption').css({opacity: 0.7});
	//Call the gallery function to run the slideshow, 6000 = change to next image after 6 seconds
	setInterval('gallery()',6000);	
}
function gallery() {
	//if no IMGs have the show class, grab the first image
	var current = ($('#slider a.show')?  $('#slider a.show') : $('#slider a:first'));
	//Get next image, if it reached the end of the slideshow, rotate it back to the first image
	var next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('#slider a:first') :current.next()) : $('#slider a:first'));	
	//Get next image caption
	var caption = next.find('img').attr('alt');	
	//Set the fade in effect for the next image, show class has higher z-index
	next.css({opacity: 0.0})
	.addClass('show')
	.animate({opacity: 1.0}, 1000)
	//Hide the current image
	current.animate({opacity: 0.0}, 1000)
	.removeClass('show');
	//Set the opacity to 0 and height to 1px
	$('#slider .caption').animate({opacity: 0.0}, { queue:false, duration:0 }).animate({height: '1px'}, { queue:true, duration:300 });	
}*/

//Background position Firefox fix
/*
 * @author Alexander Farkas
 * v. 1.21
 */
(function($) {
	if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8
		var oldCurCSS = jQuery.curCSS;
		jQuery.curCSS = function(elem, name, force){
			if(name === 'background-position'){
				name = 'backgroundPosition';
			}
			if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
				return oldCurCSS.apply(this, arguments);
			}
			var style = elem.style;
			if ( !force && style && style[ name ] ){
				return style[ name ];
			}
			return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
		};
	}
	var oldAnim = $.fn.animate;
	$.fn.animate = function(prop){
		if('background-position' in prop){
			prop.backgroundPosition = prop['background-position'];
			delete prop['background-position'];
		}
		if('backgroundPosition' in prop){
			prop.backgroundPosition = '('+ prop.backgroundPosition;
		}
		return oldAnim.apply(this, arguments);
	};
	function toArray(strg){
		strg = strg.replace(/left|top/g,'0px');
		strg = strg.replace(/right|bottom/g,'100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
	}
	$.fx.step. backgroundPosition = function(fx) {
		if (!fx.bgPosReady) {
			var start = $.curCSS(fx.elem,'backgroundPosition');
			if(!start){//FF2 no inline-style fallback
				start = '0px 0px';
			}
			start = toArray(start);
			fx.start = [start[0],start[2]];
			
			var end = toArray(fx.options.curAnim.backgroundPosition);
			fx.end = [end[0],end[2]];
			
			fx.unit = [end[1],end[3]];
			fx.bgPosReady = true;
		}
		//return;
		var nowPosX = [];
		nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
		nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
		fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];
	};
})(jQuery);


/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
 jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

//form ajax
function GetXmlHttpObject(){
	var xmlHttp=null;
	try{
		xmlHttp=new XMLHttpRequest();
	}
	catch (e){
		try{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e){
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
return xmlHttp;
}

function send(){
var status = document.getElementById("mstatus");
var fin = document.forms['contact'];
query = "?Subj="+encodeURIComponent(fin.Subj.value)+"&Name="+encodeURIComponent(fin.Name.value)+"&Tel="+encodeURIComponent(fin.Tel.value)+"&Email="+encodeURIComponent(fin.Email.value)+"&Message="+encodeURIComponent(fin.Message.value)+"&recaptcha_challenge_field="+encodeURIComponent(fin.recaptcha_challenge_field.value)+"&recaptcha_response_field="+encodeURIComponent(fin.recaptcha_response_field.value);
status.innerHTML = '<img src="../images/ajax-loader.gif" alt="Refreshing..." style="display:block;margin:1px"/>';
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null){
	alert ("Browser does not support HTTP Request");
	return;
}
var url="form.php";
xmlHttp.onreadystatechange = function(){
	if (xmlHttp.readyState==4 && xmlHttp.status == 200){
	status.innerHTML=xmlHttp.responseText;
	Recaptcha.reload();
}
	}
xmlHttp.open("GET",url+query,true);
xmlHttp.send(null);
}