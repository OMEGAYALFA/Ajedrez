window.onload=function(){
	sessionStorage.setItem("lista","no");
	varCarg();
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
					document.getElementById("ajustesb").setAttribute("class","animbot bort");
					document.getElementById("atras").setAttribute("class","animbot bort");
					document.getElementById("atras1").setAttribute("class","animbot bort");
					document.getElementById("atras2").setAttribute("class","animbot bort");
					document.getElementById("atras3").setAttribute("class","animbot bort");
					document.getElementById("reglasb").setAttribute("class","animbot bort");
					document.getElementById("recorrb").setAttribute("class","animbot bort");
					document.getElementById("jugar").setAttribute("class","animbot bort");
					document.getElementById("info").setAttribute("class","animbot bort");
					document.getElementById("reste").setAttribute("class","animbot bort");
					setTimeout(function(){ 
						document.getElementById("ajustesb").setAttribute("class","bort");
						document.getElementById("atras").setAttribute("class","bort");
						document.getElementById("atras1").setAttribute("class","bort");
						document.getElementById("atras2").setAttribute("class","bort");
						document.getElementById("atras3").setAttribute("class","bort");
						document.getElementById("recorrb").setAttribute("class","bort");
						document.getElementById("reglasb").setAttribute("class","bort");
						document.getElementById("jugar").setAttribute("class","bort");
						document.getElementById("info").setAttribute("class", "bort");
						document.getElementById("reste").setAttribute("class","bort");
					}, 2000);
	},4000);
	compNave();
	record();
}

function varCarg(){
	var tmp = sessionStorage.getItem("tam");
	if(tmp==null){
		sessionStorage.setItem("tam","8");
	}
	tmp = sessionStorage.getItem("mdo");
	if(tmp==null){
		sessionStorage.setItem("mdo","principiante");
	}
	tmp = sessionStorage.getItem("tamy");
	if(tmp==null){
		sessionStorage.setItem("tamy","8");
	}
	tmp = sessionStorage.getItem("tamc");
	if(tmp==null){
		sessionStorage.setItem("tamc","64");
	}
	tmp = sessionStorage.getItem("dificul");
	if(tmp==null){
		sessionStorage.setItem("dificul","10");
	}
	tmp = sessionStorage.getItem("primv");
	if(tmp==null){
		sessionStorage.setItem("primv","false");
	}
	tmp = sessionStorage.getItem("pers");
	if(tmp==null){
		sessionStorage.setItem("pers","false");
	}
	tmp = sessionStorage.getItem("perder");
	if(tmp==null){
		sessionStorage.setItem("perder","false");
	}
}

function record() {
    for(var cont = 1;cont!=4;cont++){
        for(var cont1=1;cont1!=4;cont1++){
        	var temp = "r"+cont+""+cont1;
            var temp1 = "sr"+cont+""+cont1;
            var temp2= "mr"+cont+""+cont1;            
            var temp3= "ar"+cont+""+cont1;
            var temps = localStorage.getItem(temp1);
            if(temps==null){
                localStorage.setItem(temp1,"100");
                localStorage.setItem(temp2,"100");
                localStorage.setItem(temp3,"AAAA");
            }else{

            }

            temps=localStorage.getItem(temp1);
            var tempm=localStorage.getItem(temp2);
            var tempa=localStorage.getItem(temp3);
            var rec = "["+tempm+":"+temps+"]   "+tempa;

            document.getElementById(temp).innerHTML = rec;
        }
    }
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
	//para el modo
	var mdo = sessionStorage.getItem("mdo");
	if(mdo=="principiante"){
		document.getElementById("e1").setAttribute("class","selecT e1");
		document.getElementById("e2").setAttribute("class","selecT inv");
		document.getElementById("e3").setAttribute("class","selecT inv");
		document.getElementById("e4").setAttribute("class","selecT inv");
	}
	if(mdo=="intermedio"){
		document.getElementById("e1").setAttribute("class","selecT inv");
		document.getElementById("e2").setAttribute("class","selecT e2");
		document.getElementById("e3").setAttribute("class","selecT inv");
		document.getElementById("e4").setAttribute("class","selecT inv");
	}
	if(mdo=="experto"){
		document.getElementById("e1").setAttribute("class","selecT inv");
		document.getElementById("e2").setAttribute("class","selecT inv");
		document.getElementById("e3").setAttribute("class","selecT e3");
		document.getElementById("e4").setAttribute("class","selecT inv");
	}
	if(mdo=="personalizado"){
		document.getElementById("e1").setAttribute("class","selecT inv");
		document.getElementById("e2").setAttribute("class","selecT inv");
		document.getElementById("e3").setAttribute("class","selecT inv");
		document.getElementById("e4").setAttribute("class","selecT e4");
	}
}

function cambiarFichas(tipo){
	
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
		document.getElementById("modoselec").setAttribute("class","modoselec");
		                                                                                                                       sessionStorage.setItem("lista","no");
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
	document.getElementById("sli").addEventListener("change",function(){
		alert("Esta función todavia no esta acabada")
		var valor = document.getElementById("sli").value;
		var conte = document.createElement("div");
		var rel = document.createElement("div");
		rel.setAttribute("class","rel");
		var parr = document.createElement("p");
		parr.setAttribute("class","parr");
		if(valor>80 && valor<=100){
			parr.innerHTML =  "Muy Grande";
			sessionStorage.setItem("tama",50);
			document.getElementById("sli").value=90;
		}
		if(valor>60 && valor<=80){
			parr.innerHTML =  "Grande";
			document.getElementById("sli").value=70;
		}
		if(valor>40 && valor<=60){
			parr.innerHTML =  "Normal";
			document.getElementById("sli").value=50;
		}
		if(valor>20 && valor<=40){
			parr.innerHTML =  "Pequeño";
			document.getElementById("sli").value=30;
		}
		if(valor>=0 && valor<=20){
			parr.innerHTML =  "Muy Pequeño";
			document.getElementById("sli").value=10;
		}
		conte.setAttribute("class","conte");
		conte.setAttribute("id","conte");
		conte.appendChild(parr);
		rel.appendChild(conte);
		document.getElementById("mod").appendChild(rel);
		setTimeout(function(){
			var rem = document.getElementsByClassName("rel");
			document.getElementById("mod").removeChild(rem[0]);
		},2000);
	});
	document.getElementById("e1").addEventListener("click",function(){
		var temp = sessionStorage.getItem("lista");
		if(temp=="no"){
			document.getElementById("modoselec").setAttribute("class","modoselec1");
			sessionStorage.setItem("lista","si");
			document.getElementById("e1").setAttribute("class","selecT e1");
			document.getElementById("e2").setAttribute("class","selecT");
			document.getElementById("e3").setAttribute("class","selecT");
			document.getElementById("e4").setAttribute("class","selecT eu");
		}else{
			document.getElementById("modoselec").setAttribute("class","modoselec");
			sessionStorage.setItem("lista","no");
			nivel(10);
			document.getElementById("e2").setAttribute("class","selecT inv");
			document.getElementById("e3").setAttribute("class","selecT inv");
			document.getElementById("e4").setAttribute("class","selecT inv");
		}
		reproSon("boton.mp3");
		sessionStorage.setItem("mdo","principiante");
	});
	document.getElementById("e2").addEventListener("click",function(){		
		var temp = sessionStorage.getItem("lista");
		if(temp=="no"){
			document.getElementById("modoselec").setAttribute("class","modoselec1");
			sessionStorage.setItem("lista","si");
			document.getElementById("e2").setAttribute("class","selecT e2");
			document.getElementById("e1").setAttribute("class","selecT");
			document.getElementById("e3").setAttribute("class","selecT");
			document.getElementById("e4").setAttribute("class","selecT eu");
		}else{
			document.getElementById("modoselec").setAttribute("class","modoselec");
			sessionStorage.setItem("lista","no");
			nivel(40);
			document.getElementById("e2").setAttribute("class","selecT e2");
			document.getElementById("e1").setAttribute("class","selecT inv");
			document.getElementById("e3").setAttribute("class","selecT inv");
			document.getElementById("e4").setAttribute("class","selecT inv");
		}
		reproSon("boton.mp3");
		sessionStorage.setItem("mdo","intermedio");
	});
	document.getElementById("e3").addEventListener("click",function(){
		var temp = sessionStorage.getItem("lista");
		if(temp=="no"){
			document.getElementById("modoselec").setAttribute("class","modoselec1");
			sessionStorage.setItem("lista","si");
			document.getElementById("e3").setAttribute("class","selecT e3");
			document.getElementById("e1").setAttribute("class","selecT");
			document.getElementById("e2").setAttribute("class","selecT");
			document.getElementById("e4").setAttribute("class","selecT eu");
		}else{
			document.getElementById("modoselec").setAttribute("class","modoselec");
			sessionStorage.setItem("lista","no");
			nivel(99);
			document.getElementById("e3").setAttribute("class","selecT e3");
			document.getElementById("e1").setAttribute("class","selecT inv");
			document.getElementById("e2").setAttribute("class","selecT inv");
			document.getElementById("e4").setAttribute("class","selecT inv");
		}
		reproSon("boton.mp3");
		sessionStorage.setItem("mdo","experto");
	});
	document.getElementById("e4").addEventListener("click",function(){
		document.getElementById("e4").setAttribute("class","selecT e4");
		document.getElementById("e1").setAttribute("class","selecT");
		document.getElementById("e2").setAttribute("class","selecT");
		document.getElementById("e3").setAttribute("class","selecT eu");
		var temp = sessionStorage.getItem("lista");
		if(temp=="no"){
			document.getElementById("modoselec").setAttribute("class","modoselec1");
			sessionStorage.setItem("lista","si");
			document.getElementById("e4").setAttribute("class","selecT e4");
			document.getElementById("e1").setAttribute("class","selecT");
			document.getElementById("e2").setAttribute("class","selecT");
			document.getElementById("e3").setAttribute("class","selecT eu");
		}else{
			document.getElementById("modoselec").setAttribute("class","modoselec");
			sessionStorage.setItem("lista","no");
			nivel(150);
			document.getElementById("e4").setAttribute("class","selecT e4");
			document.getElementById("e1").setAttribute("class","selecT inv");
			document.getElementById("e2").setAttribute("class","selecT inv");
			document.getElementById("e3").setAttribute("class","selecT inv");
		}
		reproSon("boton.mp3");
		sessionStorage.setItem("mdo","personalizado");
	});
	
	document.getElementById("bot1").addEventListener("click",function(){
		rec1();
	});
	document.getElementById("bot2").addEventListener("click",function(){
		rec2();
	});
	document.getElementById("bot3").addEventListener("click",function(){
		rec3();
	});
	document.getElementById("recorrb").addEventListener("click",function(){
		document.getElementById("recorr").setAttribute("class","pantalla");
		document.getElementById("principal").setAttribute("class","nopantalla");
		reproSon("boton.mp3");
	});
	document.getElementById("atras2").addEventListener("click",function(){
		document.getElementById("principal").setAttribute("class","pantalla");
		document.getElementById("recorr").setAttribute("class","nopantalla");
		reproSon("boton.mp3");
	});
	document.getElementById("reste").addEventListener("click",function(){
		reproSon("boton.mp3");
		resetrr();
	});
	document.getElementById("reglasb").addEventListener("click",function(){
		document.getElementById("reglas").setAttribute("class","pantalla");
		document.getElementById("principal").setAttribute("class","nopantalla");
		reproSon("boton.mp3");
	});
	document.getElementById("atras3").addEventListener("click",function(){
		document.getElementById("principal").setAttribute("class","pantalla");
		document.getElementById("reglas").setAttribute("class","nopantalla");
		reproSon("boton.mp3");
	});

}



function resetrr(){
	var pre = confirm("¿Quieres borrar el record?");
    if(pre==true){

    	var num1 = Math.floor((Math.random() * 10) + 1);
		var num2 = Math.floor((Math.random() * 10) + 1);
    	var pre1 = parseInt(prompt("¿Cuanto es "+num1+"*"+num2+"?"));
       	if(pre1==(num1*num2)){
	    	borrar();
    	}else{
    		alert("Récord no borrado");
    	}      
    }else{
        alert("Récord no borrado");
    }
}


function borrar() {
    for(var cont = 1;cont!=4;cont++){
        for(var cont1=1;cont1!=4;cont1++){            
            localStorage.setItem("sr"+cont+""+cont1,"100");
            localStorage.setItem("mr"+cont+""+cont1,"100");
            localStorage.setItem("ar"+cont+""+cont1,"AAAA");         
        }
    }
    alert("Record borrado");
}


function nivel(dificul){
	var tam = parseInt(sessionStorage.getItem("tam"));
	var tamy = parseInt(sessionStorage.getItem("tamy"));
	var tamc = parseInt(sessionStorage.getItem("tamc"));
	var pers = sessionStorage.getItem("pers");
	if(dificul==10){
		tam=8;
		tamy=8;
		tamc=64;
		pers=false;
	}
	if(dificul==40){
		tam=16;
		tamy=16;
		tamc=256;
		pers=false;
	}
	if(dificul==99){
		tam=16;
		tamy=32;
		tamc=(tam*tamy);
		pers=false;
	}
	sessionStorage.setItem("tam",tam);
	sessionStorage.setItem("tamy",tamy);
	sessionStorage.setItem("tamc",tamc);
	sessionStorage.setItem("dificul",dificul);
	if(dificul==150){
		pers=true;
		form();
	}
	
	sessionStorage.setItem("pers",pers);
}

function form(){
	var tam = parseInt(sessionStorage.getItem("tam"));
	var tamy = parseInt(sessionStorage.getItem("tamy"));
	var tamc = parseInt(sessionStorage.getItem("tamc"));
	var dificul = parseInt(sessionStorage.getItem("dificul"));
	while(true){
		tam=parseInt(prompt("¿Cuantas filas quieres?"));
		tamy=parseInt(prompt("¿Cuantas columnas quieres?"));
		dificul=parseInt(prompt("¿Cuantas bombas quieres?"));
		if(dificul>(tamy*tam)){
			alert("Demasiadas bombas");
		}else{
			if(tam==NaN || tamy==NaN){
				alert("Número de filas o columnas no aceptado. Por favor repita.");
			}else{
				tamc=tamy*tam;
				break;
			}
		}
	}
	sessionStorage.setItem("tam",tam);
	sessionStorage.setItem("tamy",tamy);
	sessionStorage.setItem("tamc",tamc);
	sessionStorage.setItem("dificul",dificul);
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
		document.getElementById("sli").value=50;

		document.getElementById("e1").setAttribute("class","selecT e1");
		document.getElementById("e2").setAttribute("class","selecT inv");
		document.getElementById("e3").setAttribute("class","selecT inv");
		document.getElementById("e4").setAttribute("class","selecT inv");
		nivel(10);
		var tmp = localStorage.getItem("musica");
		if(tmp == "no"){
			on(audio,"bb0");
		}
		on(audio,"bb1");
		setTimeout(function(){
			off(audio,"bb-1");
		},500);
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
	
function rec1() {
	document.getElementById("bot1").setAttribute("class","bttod");
	document.getElementById("bot2").setAttribute("class","btto");
	document.getElementById("bot3").setAttribute("class","btto");
    document.getElementById("ol1").setAttribute("class","ull");
    document.getElementById("ol2").setAttribute("class","inv");
    document.getElementById("ol3").setAttribute("class","inv");
}

function rec2() {

	document.getElementById("bot1").setAttribute("class","btto");
	document.getElementById("bot2").setAttribute("class","bttod");
	document.getElementById("bot3").setAttribute("class","btto");
    document.getElementById("ol2").setAttribute("class","ull");
    document.getElementById("ol1").setAttribute("class","inv");
    document.getElementById("ol3").setAttribute("class","inv");
}

function rec3() {

	document.getElementById("bot1").setAttribute("class","btto");
	document.getElementById("bot2").setAttribute("class","btto");
	document.getElementById("bot3").setAttribute("class","bttod");
    document.getElementById("ol3").setAttribute("class","ull");
    document.getElementById("ol1").setAttribute("class","inv");
    document.getElementById("ol2").setAttribute("class","inv");
}



