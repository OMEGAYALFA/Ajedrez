window.onload=function(){
	var audio = new Audio('./sonidos/menu.mp3');
	musicaRepro(audio);
	cargarAjustes();
	iniciarEvent(audio);
	var save = localStorage.getItem("guardar");
	if(save==null){
		localStorage.setItem("guardar","");
	}
	var guardarColB=localStorage.getItem("guardarColB");
	if(guardarColB==null){
		localStorage.setItem("guardarColB","");
	}
	var guardarColN=localStorage.getItem("guardarColN");
	if(guardarColN==null){
		localStorage.setItem("guardarColN","");
	}
	var clase = localStorage.getItem("modoFichas");
	if(clase==null){
		var clase = localStorage.setItem("modoFichas","3D");
	}

	setInterval(function(){
					var num = Math.floor((Math.random() * 7)); 
					document.getElementById("titulo").setAttribute("class","animTitulo"+num);
					setTimeout(function(){ 
						document.getElementById("titulo").setAttribute("class","");
					}, 3000);
	},9000);
	setInterval(function(){
					document.getElementById("ajustesb").setAttribute("class","animbot");
					document.getElementById("atras").setAttribute("class","animbot");
					document.getElementById("atras1").setAttribute("class","animbot");
					document.getElementById("jugar").setAttribute("class","animbot");
					document.getElementById("info").setAttribute("class","animbot");
					setTimeout(function(){ 
						document.getElementById("ajustesb").setAttribute("class","");
						document.getElementById("atras").setAttribute("class","");
						document.getElementById("atras1").setAttribute("class","");
						document.getElementById("jugar").setAttribute("class","");
						document.getElementById("info").setAttribute("class","");
					}, 2000);
	},4000);
	compNave();
}

function compNave(){
	var comp = navigator.userAgent.toLowerCase().indexOf('chrome');
	if(comp>-1){
		document.getElementById("torren").setAttribute("class","inv");
	}
	if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/Windows Phone/i)){
	    document.getElementById("arrrst").setAttribute("class","inv");
	}
}

function reproSon(nombre){
	var sonidos = localStorage.getItem("sonidos");
	if(sonidos=="si"){
		var audio1 = new Audio('./sonidos/'+nombre);
		audio1.play();
	}
}

function cargarAjustes(){
	//para la música juego
	var musicaj = localStorage.getItem("musicaj");
	if(musicaj==null){
		localStorage.setItem("musicaj","si");
	}
	musicaj = localStorage.getItem("musicaj");
	if(musicaj=="si"){
		document.getElementById("bb-11").setAttribute("class","on");
	}else{
		document.getElementById("bb-11").setAttribute("class","off");
	}
	//para la música menu
	var musica = localStorage.getItem("musica");
	if(musica==null){
		localStorage.setItem("musica","si");
	}
	musica = localStorage.getItem("musica");
	if(musica=="si"){
		document.getElementById("bb01").setAttribute("class","on");
	}else{
		document.getElementById("bb01").setAttribute("class","off");
	}
	//para los sonidos
	var sonidos = localStorage.getItem("sonidos");
	if(sonidos==null){
		localStorage.setItem("sonidos","si");
	}
	sonidos = localStorage.getItem("sonidos");
	if(sonidos=="si"){
		document.getElementById("bb11").setAttribute("class","on");
	}else{
		document.getElementById("bb11").setAttribute("class","off");
	}
	//para el ultimo movimiento
	var movimiento = localStorage.getItem("movimientoAzul");
	if(movimiento==null){
		localStorage.setItem("movimientoAzul","si");
	}
	movimiento = localStorage.getItem("movimientoAzul");
	if(movimiento=="si"){
		document.getElementById("bb21").setAttribute("class","on");
	}else{
		document.getElementById("bb21").setAttribute("class","off");
	}
	//para el modo
	var modo = localStorage.getItem("modo");
	if(modo==null){
		localStorage.setItem("modo","tocar");
	}
	modo = localStorage.getItem("modo");
	if(modo=="tocar"){
		document.getElementById("bb31").setAttribute("class","off");
	}else{
		document.getElementById("bb31").setAttribute("class","on");
	}
	//para las fichas
	var clase = localStorage.getItem("modoFichas");
	if(clase=="3D"){
		cambiarFichas("3D");
		document.getElementById("bb41").setAttribute("class","on");
	}else{
		document.getElementById("bb41").setAttribute("class","off");
		cambiarFichas("2D");
	}
}

function cambiarFichas(tipo){
	if(tipo=="3D"){
		document.getElementById("bb41").setAttribute("class","on");
		document.getElementById("torren").setAttribute("class","animn");
		document.getElementById("alfiln").setAttribute("class","animn");
		document.getElementById("reinan").setAttribute("class","animn");
		document.getElementById("caballob").setAttribute("class","animn");
		document.getElementById("caballob1").setAttribute("class","animn");
		document.getElementById("reinab").setAttribute("class","animb");
		document.getElementById("peonb").setAttribute("class","animb");
		document.getElementById("reyb").setAttribute("class","animb");
		document.getElementById("torreb").setAttribute("class","animb");
		document.getElementById("alfilb").setAttribute("class","animb");
	}else{
		document.getElementById("bb41").setAttribute("class","off");
		document.getElementById("torren").setAttribute("class","animn1");
		document.getElementById("alfiln").setAttribute("class","animn1");
		document.getElementById("reinan").setAttribute("class","animn1");
		document.getElementById("caballob").setAttribute("class","animn1");
		document.getElementById("caballob1").setAttribute("class","animn1");
		document.getElementById("reinab").setAttribute("class","animb1");
		document.getElementById("peonb").setAttribute("class","animb1");
		document.getElementById("reyb").setAttribute("class","animb1");
		document.getElementById("torreb").setAttribute("class","animb1");
		document.getElementById("alfilb").setAttribute("class","animb1");
	}
}

function iniciarEvent(audio){
	document.getElementById("jugar").addEventListener("click",function(){
		reproSon("boton.mp3");
		location.href="./html/juego.html"	
	});
	document.getElementById("ajustesb").addEventListener("click",function(){
		document.getElementById("ajustes").setAttribute("class","pantalla");
		document.getElementById("principal").setAttribute("class","nopantalla");
		reproSon("boton.mp3");
	});
	document.getElementById("atras").addEventListener("click",function(){
		document.getElementById("principal").setAttribute("class","pantalla");
		document.getElementById("ajustes").setAttribute("class","nopantalla");
		reproSon("boton.mp3");
	});
	for(var cont=-1;cont<5;cont++){
		var tmp="bb"+cont;
		var prueba=document.getElementById("bb"+cont+"1").className;
		if(document.getElementById("bb"+cont+"1").className == "off"){
			document.getElementById("bb"+cont+"").addEventListener("click",function(){
				var temp = this.id;
				on(audio,temp);
			});
		}else{
			document.getElementById("bb"+cont).addEventListener("click",function(){
				var temp = this.id;
				off(audio,temp);
			});
		}
		
	}
	document.getElementById("info").addEventListener("click",function(){
		document.getElementById("info1").setAttribute("class","pantalla");
		document.getElementById("principal").setAttribute("class","nopantalla");
		reproSon("boton.mp3");
	});
	document.getElementById("atras1").addEventListener("click",function(){
		document.getElementById("principal").setAttribute("class","pantalla");
		document.getElementById("info1").setAttribute("class","nopantalla");
		reproSon("boton.mp3");
	});
}

function on(audio,id){
	var tempId = id;
	document.getElementById(tempId).removeEventListener("click",on);
	document.getElementById(tempId).addEventListener("click",function(){
									var temp = this.id;
									off(audio,temp);
	});
	document.getElementById(tempId+1).setAttribute("class","on");
	if(tempId=="bb-1"){
		localStorage.setItem("musicaj","si");
		reproSon("boton.mp3");
	}
	if(tempId=="bb0"){
		localStorage.setItem("musica","si");
		musicaRepro(audio);
	}
	if(tempId=="bb1"){
		localStorage.setItem("sonidos","si");
	}
	if(tempId=="bb2"){
		localStorage.setItem("movimientoAzul","si");
	}
	if(tempId=="bb3"){
		localStorage.setItem("modo","arrastrar");
	}
	if(tempId=="bb4"){
		cambiarFichas("3D");
		localStorage.setItem("modoFichas","3D");
	}
}
function off(audio,id){

	var tempId = id;
	document.getElementById(tempId).removeEventListener("click",off);
	document.getElementById(tempId).addEventListener("click",function(){
									var temp = this.id;
									on(audio,temp);
	});
	document.getElementById(tempId+1).setAttribute("class","off");
	if(tempId=="bb-1"){
		localStorage.setItem("musicaj","no");
		reproSon("boton.mp3");
	}
	if(tempId=="bb0"){
		localStorage.setItem("musica","no");
		audio.pause();
	}
	if(tempId=="bb1"){
		localStorage.setItem("sonidos","no");
	}
	if(tempId=="bb2"){
		localStorage.setItem("movimientoAzul","no");
	}
	if(tempId=="bb3"){
		localStorage.setItem("modo","tocar");
	}
	if(tempId=="bb4"){
		cambiarFichas("2D");
		localStorage.setItem("modoFichas","2D");
	}
}


function musicaRepro(audio){
	audio.setAttribute("id","aud");
	audio.loop=true;
	var comp = localStorage.getItem("musica");
	if(comp=="si"){
		audio.play();
	}
}
	




