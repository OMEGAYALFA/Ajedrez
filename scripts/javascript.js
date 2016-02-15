var array=[[],[],[],[],[],[],[],[],[]];
window.onload = function(){
	iniciar();
	eveDetec();	
}
function iniciar(){
	cModo();
	turnos();
	jaqueComp(false,array,false);
	musicaJuego();
}

function resetVar(){	
	localStorage.setItem("rey_n","0");
	localStorage.setItem("rey_b","0");
	localStorage.setItem("torrb","0");
	localStorage.setItem("torrn","0");
	localStorage.setItem("turno","nadie");	
	localStorage.setItem("idum","");
	localStorage.setItem("idum2","");
	localStorage.setItem("casam","");
	localStorage.setItem("casam2","");
	localStorage.setItem("ultmfich","");
	localStorage.setItem("ultmfich2","");	
	localStorage.setItem("ante","");
	localStorage.setItem("tocar1","nada");
	localStorage.setItem("jaqueUso","");
	localStorage.setItem("jugar","");
	localStorage.setItem("colrten","0");
	localStorage.setItem("colrtebl","0");
	localStorage.setItem("jaqueMattt","si");
	localStorage.setItem("guardarColB","");
	localStorage.setItem("guardarColN","");
	localStorage.setItem("guardar","");
	localStorage.setItem("contTablas","0");
}

function musicaJuego(){
	var sonidos = localStorage.getItem("musicaj");
	if(sonidos=="si"){
		var audio1 = new Audio('../sonidos/musica-menu1.mp3');
		var audio2 = new Audio('../sonidos/musica-menu2.mp3');
		var audio3 = new Audio('../sonidos/musica-menu3.mp3');
		cont=0;
		audio1.play();
		audio1.addEventListener('ended', function(){
					cont++;
					cancion2(audio1,audio2,audio3);								
        }, false);
	}
	
}
function cancion1(audio1,audio2,audio3){
	audio1.play();
	audio1.addEventListener('ended', function(){
					cancion2(audio1,audio2,audio3);								
    }, false);

}
function cancion2(audio1,audio2,audio3){
	
	audio2.play();
	audio2.addEventListener('ended', function(){
					cancion3(audio1,audio2,audio3);								
    }, false);
}

function cancion3(audio1,audio2,audio3){
	cont++;
	audio3.play();
	audio3.addEventListener('ended', function(){
					cancion1(audio1,audio2,audio3);								
    }, false);
}

function cModo(){	
	var modo=localStorage.getItem("modo");
	document.getElementById("mm").innerHTML="Modo "+modo;
	crear();
}


function modoInt(){
	var temp = document.getElementById("modo").value;
	localStorage.setItem("modo",temp);
	cModo();
}

function reproSon(nombre){
	var sonidos = localStorage.getItem("sonidos");
	if(sonidos=="si"){
		var audio1 = new Audio('../sonidos/'+nombre);
		audio1.play();
	}
}
function eveDetec(){
	document.getElementById("bru").addEventListener("click",function(){																
																var tmp = localStorage.getItem("jugar");
																if(tmp!="no"){
																	reproSon("click.wav");
																	ultMov();	
																}									
	});
	document.getElementById("rst").addEventListener("click",function(){
																reproSon("click2.wav");					
																var op = confirm("¿Quieres resetear la partida?");
																if(op==true){	
																	document.getElementById("colneg").innerHTML="";
																	document.getElementById("colneg1").innerHTML="";
																	document.getElementById("colbla1").innerHTML="";
																	document.getElementById("colbla").innerHTML="";															
																	localStorage.setItem("guardar","");
																	iniciar();
																}
	});
	
	document.getElementById("menun").addEventListener("click",function(){
																var matador= sessionStorage.getItem("matador");
																if(matador!="si"){

																}else{
																	ultMov();
																}
																guardar();
																reproSon("click2.wav");																guardar();
																location.href="../index.html";
	});
	document.getElementById("parrt").addEventListener("click",function(){
														cheat();		
	});
}

function cheat(){
	for(var cont=1;cont!=9;cont++){
			for(var cont1=1;cont1!=9;cont1++){
				document.getElementById("c"+cont+""+cont1).setAttribute("class","cmover");
			}
		}
}

function ultMov(){
	restaurarAzul();

	var idmm21 = localStorage.getItem("idum2");
	var ultfich21 = localStorage.getItem("ultmfich2");
	var ultFichtemp21="";
	for(var cont=(ultfich21.length-5);cont<ultfich21.length;cont++){
		ultFichtemp21=ultFichtemp21+""+ultfich21.charAt(cont);
	}
	if(ultFichtemp21=="trans"){
		var ids21="";
		for(var cont=(idmm21.length-3);cont<idmm21.length;cont++){
			ids21=ids21+""+idmm21.charAt(cont);
		}
		var fil = ids21.charAt(1);
		var col = ids21.charAt(2);
		if(fil==8){
			var dd = creaFich(2,1,false);
			dd.addEventListener("click",colotoc,false);
			dd.addEventListener("click",colotoc2,false);
			dd.setAttribute("id","d"+fil+""+col);
			array[fil][col]="peonn";
			document.getElementById("c"+fil+""+col).innerHTML="";
			document.getElementById("c"+fil+""+col).appendChild(dd);
		}
		if(fil==1){
			var dd = creaFich(7,1,false);
			dd.addEventListener("click",colotoc,false);
			dd.addEventListener("click",colotoc2,false);
			dd.setAttribute("id","d"+fil+""+col);
			array[fil][col]="peonb";
			document.getElementById("c"+fil+""+col).innerHTML="";
			document.getElementById("c"+fil+""+col).appendChild(dd);
		}
		var ultmfich21="";
		for(var cont=0;cont<ultfich21.length-5;cont++){
			ultmfich21=ultmfich21+""+ultfich21.charAt(cont);
		}
		localStorage.setItem("ultmfich2",ultmfich21+"nada_");
	}


	


	var idstemp = localStorage.getItem("idum");
	var tmp1=localStorage.getItem("casam");
	var ultFichtemp = localStorage.getItem("ultmfich");
	var listaBlanctemp=localStorage.getItem("guardarColB");
	var listaNegtemp=localStorage.getItem("guardarColN");
	var ids="";
	var tmp="";
	var ultFich="";
	var listaBlanc="";
	var listaNeg="";
	if(idstemp.length > 3){
		for(var cont=(idstemp.length-3);cont<idstemp.length;cont++){
			ids=ids+""+idstemp.charAt(cont);
		}
		for(var cont=(tmp1.length-3);cont<tmp1.length;cont++){
			tmp=tmp+""+tmp1.charAt(cont);
		}
		for(var cont=(ultFichtemp.length-5);cont<ultFichtemp.length;cont++){
			ultFich=ultFich+""+ultFichtemp.charAt(cont);
		}
	}else{
		ids=idstemp;
		tmp=tmp1;
		ultFich=ultFichtemp;
	}



	if(ids!=""){
		var fils=parseInt(ids.charAt(1));
		var cols=parseInt(ids.charAt(2));		
		var fild=parseInt(tmp.charAt(1));
		var cold=parseInt(tmp.charAt(2));
		array[fild][cold]=array[fils][cols];
		if(ultFich=="nada_"){
			array[fils][cols]="nada";
	    	document.getElementById("c"+fild+""+cold).appendChild(document.getElementById(ids));
	   	 	document.getElementById("d"+fils+""+cols).setAttribute("id","d"+fild+""+cold);
		}else{			
			array[fils][cols]=ultFich;
			var ff = ultFich;
			if(ff.charAt(4)=="b"){
				if(ff=="peonb"){
					var dd = creaFich(7,1,false);
				}
				if(ff=="torrb"){
					var tpp = parseInt(localStorage.getItem("torrb"));
					tpp--;
					localStorage.setItem("torrb",tpp);
					var dd = creaFich(8,1,false);
				}
				if(ff=="cabab"){
					var dd = creaFich(8,2,false);
				}
				if(ff=="alfib"){
					var dd = creaFich(8,3,false);
				}
				if(ff=="reinb"){
					var dd = creaFich(8,4,false);
				}
				if(ff=="rey_b"){
					var tpp = parseInt(localStorage.getItem("rey_b"));
					tpp--;
					localStorage.setItem("rey_b",tpp);
					var dd = creaFich(8,5,false);
				}
				if(listaBlanctemp.length>5){
					for(var cont=0;cont<listaBlanctemp.length-5;cont++){
						listaBlanc=listaBlanc+listaBlanctemp.charAt(cont);
					}
				}else{
					listaBlanc="";
				}
				var compbl = parseInt(localStorage.getItem("colrtebl"));
				var list=document.getElementById("dddbl"+compbl);
				var parentDiv = list.parentNode;
				parentDiv.removeChild(list);
				compbl--;
				localStorage.setItem("colrtebl",compbl)
				localStorage.setItem("guardarColB",listaBlanc);
				
			}else{
				if(ff=="peonn"){
					var dd = creaFich(2,1,false);
				}
				if(ff=="torrn"){
					var tpp = parseInt(localStorage.getItem("torrn"));
					tpp--;
					localStorage.setItem("torrn",tpp);
					var dd = creaFich(1,1,false);
				}
				if(ff=="caban"){
					var dd = creaFich(1,2,false);
				}
				if(ff=="alfin"){
					var dd = creaFich(1,3,false);
				}
				if(ff=="reinn"){
					var dd = creaFich(1,4,false);
				}
				if(ff=="rey_n"){
					var tpp = parseInt(localStorage.getItem("rey_n"));
					tpp--;
					localStorage.setItem("rey_n",tpp);
					var dd = creaFich(1,5,false);
				}
				if(ultFich!="nada"){
					if(listaNegtemp.length>5){
						for(var cont=0;cont<listaNegtemp.length-5;cont++){
							listaNeg=listaNeg+listaNegtemp.charAt(cont);
						}
					}else{
						listaNeg="";
					}
					var compn = parseInt(localStorage.getItem("colrten"));
					var list=document.getElementById("dddn"+compn);
					var parentDiv = list.parentNode;
					parentDiv.removeChild(list);
					compn--;
					localStorage.setItem("colrten",compn);
					localStorage.setItem("guardarColN",listaNeg);
				}
				
			}
			dd.addEventListener("click",colotoc,false);
			dd.addEventListener("click",colotoc2,false);
			dd.setAttribute("id","d"+fils+""+cols);
			document.getElementById("c"+fild+""+cold).appendChild(document.getElementById(ids));
	   	 	document.getElementById("d"+fils+""+cols).setAttribute("id","d"+fild+""+cold);	   	 	
			document.getElementById("c"+fils+""+cols).appendChild(dd);
		}
		if(idstemp.length>3){
			ids="";
			tmp="";
			ultFich=""
			for(var cont=0;cont<idstemp.length-3;cont++){
				ids=ids+""+idstemp.charAt(cont);
			}
			for(var cont=0;cont<tmp1.length-3;cont++){
				tmp=tmp+""+tmp1.charAt(cont);
			}
			for(var cont=0;cont<ultFichtemp.length-5;cont++){
				ultFich=ultFich+""+ultFichtemp.charAt(cont);
			}
		}else{
			ids="";
			tmp="";
			ultFich=""
		}

		localStorage.setItem("idum",ids);
		localStorage.setItem("casam",tmp);
		localStorage.setItem("ultmfich",ultFich);

		//comprobador de enroque y varios
		
		var ultFichtemp2 = localStorage.getItem("ultmfich2");
		console.log("Ultfich2temp es = "+ultFichtemp2);
		var idstemp2 = localStorage.getItem("idum2");				    
		var casamm2 = localStorage.getItem("casam2");
		var ids2="";
		var tmp2="";
		var ultFich2="";

		for(var cont=(ultFichtemp2.length-5);cont<ultFichtemp2.length;cont++){
			ultFich2=ultFich2+""+ultFichtemp2.charAt(cont);
		}

		if(idstemp2.length > 3 && ultFich2!="nada_"){
			for(var cont=(idstemp2.length-3);cont<idstemp2.length;cont++){
				ids2=ids2+""+idstemp2.charAt(cont);
			}
			for(var cont=(casamm2.length-3);cont<casamm2.length;cont++){
				tmp2=tmp2+""+casamm2.charAt(cont);
			}
		}		

		if(ultFich2!="nada_"){
			var fils=parseInt(ids2.charAt(1));
			var cols=parseInt(ids2.charAt(2));		
			var fild=parseInt(tmp2.charAt(1));
			var cold=parseInt(tmp2.charAt(2));
			array[fild][cold]=array[fils][cols];
			array[fils][cols]="nada";
			var ff = ultFich2;
			if(ff.charAt(4)=="b"){
				if(ff=="peonb"){
					var dd = creaFich(7,1,false);
				}
				if(ff=="torrb"){
					var dd = creaFich(8,1,false);
				}
				if(ff=="cabab"){
					var dd = creaFich(8,2,false);
				}
				if(ff=="alfib"){
					var dd = creaFich(8,3,false);
				}
				if(ff=="reinb"){
					var dd = creaFich(8,4,false);
				}
				if(ff=="rey_b"){
					var dd = creaFich(8,5,false);
				}
				
			}else{
				if(ff=="peonn"){
					var dd = creaFich(2,1,false);
				}
				if(ff=="torrn"){
					var dd = creaFich(1,1,false);
				}
				if(ff=="caban"){
					var dd = creaFich(1,2,false);
				}
				if(ff=="alfin"){
					var dd = creaFich(1,3,false);
				}
				if(ff=="reinn"){
					var dd = creaFich(1,4,false);
				}
				if(ff=="rey_n"){
					var dd = creaFich(1,5,false);
				}
			}
			document.getElementById("c"+fild+""+cold).appendChild(document.getElementById(ids2));
	   	 	document.getElementById("d"+fils+""+cols).setAttribute("id","d"+fild+""+cold);
		}
		if(idstemp2.length < 3 && ultFich2=="nada_"){
			ids2=idstemp2;
			tmp2=casamm2;
			ultFich2=ultFichtemp2;
		}	
		if(idstemp2.length>3){
			ids2="";
			tmp2="";
			ultFich2=""
			for(var cont=0;cont<idstemp2.length-3;cont++){
				ids2=ids2+""+idstemp2.charAt(cont);
			}
			for(var cont=0;cont<casamm2.length-3;cont++){
				tmp2=tmp2+""+casamm2.charAt(cont);
			}
			for(var cont=0;cont<ultFichtemp2.length-5;cont++){
				ultFich2=ultFich2+""+ultFichtemp2.charAt(cont);
			}
		}else{
			ids2="";
			tmp2="";
			ultFich2=""
		}
		console.log("Ultfich2 es = "+ultFich2);
		localStorage.setItem("idum2",ids2);
		localStorage.setItem("casam2",tmp2);
		localStorage.setItem("ultmfich2",ultFich2);


    	turnos();
    	restaurar();
    	jaqueComp(false,array,true);
    }
}


function turnos(){
	var n;
	var tmp=localStorage.getItem("turno");
	if(tmp=="nadie" || tmp=="negras"){
		localStorage.setItem("turno","blancas");
		n=1;
	}else{
		if(localStorage.getItem("turno")=="blancas"){
			localStorage.setItem("turno","negras");
			n=2;
		}
	}
	document.getElementById("turno").innerHTML="Jugador "+n+" ("+localStorage.getItem("turno")+")";	
}

function crear(){
	document.getElementById("tab").innerHTML="";
	var clase1="cnegro";
	var clase2="cblanco";	
	var tmp=false;
	var modo=localStorage.getItem("modo");
	for(var fil = 1;fil != 9;fil++){
		for(var col = 1;col != 9;col++){
			array[fil][col]="nada";
			var cas = document.createElement("div");
			cas.setAttribute("id","c"+fil+""+col);
			if(col%2==0){
				cas.setAttribute("class",clase1);
			}else{
				cas.setAttribute("class",clase2);
			}
			document.getElementById("tab").appendChild(cas);
		}
		if(tmp==false){
			clase1="cblanco";
			clase2="cnegro";
			tmp=true;
		}else{
			clase1="cnegro";
			clase2="cblanco";
			tmp=false;
		}
	}
	var save = localStorage.getItem("guardar");
	if(save==""){
		resetVar();
		rell();
	}else{
		var opcion = confirm("Se ha detectado una partida guardada, ¿Quieres cargarla?");
		if(opcion==true){
			cargarSave();
		}else{
			localStorage.setItem("guardar","");
			resetVar();
			rell();
		}
	}
}

function tocar(restaurar){
	if(restaurar!=true){
		for(var fil=1;fil<9;fil++){
			for(var col = 1;col<9;col++){
				document.getElementById("d"+fil+""+col).addEventListener("click",colotoc,false);
				document.getElementById("d"+fil+""+col).addEventListener("click",colotoc2,false);
			}
			if(fil==2){
				fil=6;
			}
		}
	}
	
	for(var fil=1;fil<9;fil++){
		for(var col=1;col<9;col++){
			document.getElementById("c"+fil+""+col).addEventListener("click",colotoc2,false);			
		}
	}	
}

function arrast(restaurar){
	if(restaurar!=true){
		for(var fil=1;fil<9;fil++){
			for(var col = 1;col<9;col++){
				document.getElementById("d"+fil+""+col).addEventListener("dragstart",arrastrar,false);
			}
			if(fil==2){
				fil=6;
			}
		}
	}
	for(var fil=1;fil<9;fil++){
		for(var col=1;col<9;col++){
			document.getElementById("c"+fil+""+col).addEventListener("drop",soltar,false);
			document.getElementById("c"+fil+""+col).addEventListener("dragover",permitirSoltar,false);			
		}
	}
}

function colotoc(e){
		
	var tocar = localStorage.getItem("tocar1");
	if(tocar=="nada"){
		
		var ant=localStorage.getItem("ante");
		var tmp= e.target.id;
		var fil=parseInt(tmp.charAt(1));
		var col=parseInt(tmp.charAt(2));
		var ficha = array[fil][col];
		var turno = localStorage.getItem("turno");
		if(ficha.charAt(4)==turno.charAt(0)){
			localStorage.setItem("tocar1","h");
			mover(fil,col,ficha);
			localStorage.setItem("ante",ficha);
			localStorage.setItem("idss",tmp)
			
		}
	}else{
		localStorage.setItem("tocar1","nada")
		colotoc2(e);
		restaurar();
	}
}

function colotoc2(e){
	var ant=localStorage.getItem("idss");
	var tmp= e.target.id;
	if(tmp.charAt(0)=="d"){
		var tmp="c"+tmp.charAt(1)+""+tmp.charAt(2);
	}	
	var clase=document.getElementById(tmp).className;
	if(clase=="cmover" || clase=="cmover1"){
		restaurarAzul();
		localStorage.setItem("tocar1","nada")
		colocador(ant,tmp);
		restaurar();
	}
}


function rell(){
	for(var fil=1;fil!=9;fil++){
		for(var col=1;col!=9;col++){
			var dd = creaFich(fil,col,true);
			if(dd.innerHTML!=""){
				document.getElementById("c"+fil+""+col).appendChild(dd);
			}			
		}
	}
	var modo=localStorage.getItem("modo");
	if(modo=="tocar"){
		tocar();
	}else{
		arrast();
	}
}

function creaFich(fil,col,rell){
	var dd = document.createElement("div");
		if(rell==true){
			dd.setAttribute("id","d"+fil+""+col);
		}
		dd.setAttribute("draggable","true");

	if(fil<5){	
		var clase = localStorage.getItem("modoFichas");
		if(clase=="3D"){
			dd.setAttribute("class","lnegro");
		}else{
			dd.setAttribute("class","lnegro1");
		}
		//peones negros
		if(fil==2){					
			dd.innerHTML="o";
			if(rell==true){
				array[fil][col]="peonn";
			}
		}
		if(fil==1){
			//torres negras
			if(col==1 || col==8){
				dd.innerHTML="t";
				if(rell==true){
					array[fil][col]="torrn";
				}
			}
			//caballos negros
			if(col==2 || col==7){
				dd.innerHTML="j";
				if(rell==true){
					array[fil][col]="caban";
				}
			}
			//alfiles negros
			if(col==3 || col==6){
				dd.innerHTML="n";						
				if(rell==true){
					array[fil][col]="alfin";
				}
			}
			//reina negra
			if(col==4){
				dd.innerHTML="w";
				if(rell==true){
					array[fil][col]="reinn";
				}						
			}
			//rey blanco
			if(col==5){
				dd.innerHTML="l";
				if(rell==true){
					array[fil][col]="rey_n";
				}
			}
		}
	}else{
		var clase = localStorage.getItem("modoFichas");
		if(clase=="3D"){
			dd.setAttribute("class","lblanco");
		}else{
			dd.setAttribute("class","lblanco1");
		}
		//peones blancos
		if(fil==7){					
			dd.innerHTML="p";
			if(rell==true){
				array[fil][col]="peonb";
			}
		}
		if(fil==8){
			//torres blancas
			if(col==1 || col==8){
				dd.innerHTML="r";
				if(rell==true){
					array[fil][col]="torrb";
				}
			}
			//caballos blancos
			if(col==2 || col==7){
				dd.innerHTML="h";
				if(rell==true){
					array[fil][col]="cabab";
				}
			}
			//alfiles blancos
			if(col==3 || col==6){
				dd.innerHTML="b";
				if(rell==true){
					array[fil][col]="alfib";
				}
			}
			//reina blanca
			if(col==4){
				dd.innerHTML="q";
				if(rell==true){
					array[fil][col]="reinb";
				}					
			}
			//rey blanco
			if(col==5){
				dd.innerHTML="k";
				if(rell==true){
					array[fil][col]="rey_b";
				}
			}
		}
	}
	return dd;
}

function mover(fil,col,ficha,jaqueMate){
	var letra = ficha.charAt(4);
	var letra1;
	var permi = localStorage.getItem("jugar");
	if(jaqueMate==null){
		jaqueMate=false;
	}
	if(permi!="no"){
		if(letra=="b"){
			letra1="n";
		}
		if(letra=="n"){
			letra1="b";
		}
		var posicionesFichass=new Array();
		//peon blanco
		if(ficha=="peonb"){
			var filcam=fil-1;
			var colcam=col-1;
			var colcam1=col+1;
			if(array[filcam][colcam]!="nada"){
				if(filcam>0 && colcam>0 && filcam<9 && colcam < 9 ){
					if(array[filcam][colcam].charAt(4)=="n"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam);
						}					
					}
				}
			}
			if(array[filcam][colcam1]!="nada"){
				if(filcam>0 && colcam1>0 && filcam<9 && colcam1 < 9 ){
					if(array[filcam][colcam1].charAt(4)=="n"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam1).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam1);
						}
					}
				}
			}
			if(fil==7 && array[filcam][col].charAt(4)!="b" && array[filcam-1][col]!="b"){
				document.getElementById("c"+filcam+""+col).setAttribute("class","cmover");
				if(array[filcam-1][col]=="nada"){
					if(jaqueMate==false){
						document.getElementById("c"+(filcam-1)+""+col).setAttribute("class","cmover");
					}else{
						posicionesFichass.push((filcam-1)+","+col);
					}					
				}
			}else{
				if(filcam>0){
					if(array[filcam][col].charAt(4)!="b" && array[filcam][col].charAt(4)!="n"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+col).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+col);
						}						
					}
				}
				
			}
		}
		//peon negro
		if(ficha=="peonn"){
			var filcam=fil+1;
			var colcam=col-1;
			var colcam1=col+1;
			if(array[filcam][colcam]!="nada"){
				if(filcam>0 && colcam>0 && filcam<9 && colcam < 9 ){
					if(array[filcam][colcam].charAt(4)=="b"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam);
						}
						
					}
				}
			}
			if(array[filcam][colcam1]!="nada"){
				if(filcam>0 && colcam1>0 && filcam<9 && colcam1 < 9 ){
					if(array[filcam][colcam1].charAt(4)=="b"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam1).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam1);
						}	
						
					}
				}
			}
			if(fil==2 && array[filcam][col].charAt(4)!="n" && array[filcam+1][col]!="n"){
				document.getElementById("c"+filcam+""+col).setAttribute("class","cmover");
				if(array[filcam+1][col]=="nada"){
					if(jaqueMate==false){
						document.getElementById("c"+(filcam+1)+""+col).setAttribute("class","cmover");
					}else{
						posicionesFichass.push((filcam+1)+","+col);
					}	
					
				}			
			}else{
				if(filcam<9){
					if(array[filcam][col].charAt(4)!="n" && array[filcam][col].charAt(4)!="b"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+col).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+col);
						}	
						
					}
				}
			}
		}
		//torre
		if(ficha=="torr"+letra){
			var salir=false;
			//vertical arriba
			var filcam=fil-1;
			if(filcam>0){
				for(var cont=filcam;cont>0 && salir==false;cont--){
					if(array[cont][col]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+cont+""+col).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(cont+","+col);
						}	
						
					}else{
						if(array[cont][col].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+cont+""+col).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(cont+","+col);
							}	
							
							salir=true;
						}else{
							salir=true;
						}
					}
				}
			}
			//vertical abajo
			filcam=fil+1;
			salir=false;
			if(filcam<9){
				for(var cont=filcam;cont<9 && salir==false;cont++){
					if(array[cont][col]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+cont+""+col).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(cont+","+col);
						}	
						
					}else{
						if(array[cont][col].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+cont+""+col).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(cont+","+col);
							}	
							
							salir=true;
						}else{
							salir=true;
						}
					}
				}
			}
			//horizontal izq
			colcam=col-1;
			salir=false;
			if(colcam>0){
				for(var cont=colcam;cont>0 && salir==false;cont--){
					if(array[fil][cont]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+fil+""+cont).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(fil+","+cont);
						}	
						
					}else{
						if(array[fil][cont].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+fil+""+cont).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(fil+","+cont);
							}	
							
							salir=true;
						}else{
							salir=true;
						}
					}
				}
			}
			//horizontal derecha
			colcam=col+1;
			salir=false;
			if(colcam<9){
				for(var cont=colcam;cont<9 && salir==false;cont++){
					if(array[fil][cont]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+fil+""+cont).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(fil+","+cont);
						}	
						
					}else{
						if(array[fil][cont].charAt(4)==letra1){
							document.getElementById("c"+fil+""+cont).setAttribute("class","cmover");
							salir=true;
						}else{
							salir=true;
						}
					}
				}
			}
		}
		
		//caballo 
		if(ficha=="caba"+letra){
			//vertical arriba
			var filcam=fil-2;
			var colcam=col+1;
			var colcam1=col-1;
			if(filcam>0){
				//derecha
				if(colcam<9){
					if(array[filcam][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam);
						}	
						
					}else{
						if(array[filcam][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(filcam+","+colcam);
							}	
							
						}
					}
				}
				//izquierda
				if(colcam1>0){
					if(array[filcam][colcam1]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam1).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam1);
						}	
						
					}else{
						if(array[filcam][colcam1].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+filcam+""+colcam1).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(filcam+","+colcam1);
							}	
							
						}
					}
				}
			}
		
			//vertical abajo
			var filcam=fil+2;
			var colcam=col+1;
			var colcam1=col-1;
			if(filcam<9){
				//derecha
				if(colcam<9){
					if(array[filcam][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam);
						}	
						
					}else{
						if(array[filcam][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(filcam+","+colcam);
							}	
							
						}
					}
				}
				//izquierda
				if(colcam1>0){
					if(array[filcam][colcam1]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam1).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam1);
						}	
						
					}else{
						if(array[filcam][colcam1].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+filcam+""+colcam1).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(filcam+","+colcam1);
							}	
							
						}
					}
				}
			}
			//horizontal derecha
			var colcam=col+2;
			var filcam=fil+1;
			var filcam1=fil-1;
			if(colcam<9){
				//abajo
				if(filcam<9){
					if(array[filcam][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam);
						}	
						
					}else{
						if(array[filcam][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(filcam+","+colcam);
							}	
							
						}
					}
				}
				//arriba
				if(filcam1>0){
					if(array[filcam1][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam1+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam1+","+colcam);
						}	
						
					}else{
						if(array[filcam1][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+filcam1+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(filcam1+","+colcam);
							}	
							
						}
					}
				}
			}
			//horizontal izq
			var colcam=col-2;
			var filcam=fil+1;
			var filcam1=fil-1;
			if(colcam>0){
				//abajo
				if(filcam<9){
					if(array[filcam][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam);
						}	
						
					}else{
						if(array[filcam][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(filcam+","+colcam);
							}	
							
						}
					}
				}
				//arriba
				if(filcam1>0){
					if(array[filcam1][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+filcam1+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam1+","+colcam);
						}	
						
					}else{
						if(array[filcam1][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+filcam1+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(filcam1+","+colcam);
							}	
							
						}
					}
				}
			}
		}
		
		//alfil
		if(ficha=="alfi"+letra){
			//arriba derecha
			var salir=false;
			var filcam=fil-1;
			var colcam=col+1;
			for(var cont=filcam;cont>0 && colcam<9 && salir==false;cont--){
				if(array[cont][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(cont+","+colcam);
						}	
						
					}else{
						if(array[cont][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(cont+","+colcam);
							}	
							
							salir=true;
						}else{
							salir=true;
						}
				}			
				colcam++;
			}
			//arriba izq
			salir=false;
			filcam=fil-1;
			colcam=col-1;
			for(var cont=filcam;cont>0 && colcam>0 && salir==false;cont--){
				if(array[cont][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(cont+","+colcam);
						}	
						
					}else{
						if(array[cont][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(cont+","+colcam);
							}
							
							salir=true;
						}else{
							salir=true;
						}
				}			
				colcam--;
			}
			//abajo derecha
			salir=false;
			filcam=fil+1;
			colcam=col+1;
			for(var cont=filcam;cont<9 && colcam<9 && salir==false;cont++){
				if(array[cont][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(cont+","+colcam);
						}
						
					}else{
						if(array[cont][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(cont+","+colcam);
							}
							
							salir=true;
						}else{
							salir=true;
						}
				}			
				colcam++;
			}
			//abajo izq
			salir=false;
			filcam=fil+1;
			colcam=col-1;
			for(var cont=filcam;cont<9 && colcam>0 && salir==false;cont++){
				if(array[cont][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(cont+","+colcam);
						}
						
					}else{
						if(array[cont][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(cont+","+colcam);
							}
							
							salir=true;
						}else{
							salir=true;
						}
				}			
				colcam--;
			}
		}
		
		//reina
		if(ficha=="rein"+letra){
			//diagonales
			//arriba derecha
			var salir=false;
			var filcam=fil-1;
			var colcam=col+1;
			for(var cont=filcam;cont>0 && colcam<9 && salir==false;cont--){
				if(array[cont][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(cont+","+colcam);
						}
						
					}else{
						if(array[cont][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(cont+","+colcam);
							}
							
							salir=true;
						}else{
							salir=true;
						}
				}			
				colcam++;
			}
			//arriba izq
			salir=false;
			filcam=fil-1;
			colcam=col-1;
			for(var cont=filcam;cont>0 && colcam>0 && salir==false;cont--){
				if(array[cont][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(cont+","+colcam);
						}
						
					}else{
						if(array[cont][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(cont+","+colcam);
							}
							
							salir=true;
						}else{
							salir=true;
						}
				}			
				colcam--;
			}
			//abajo derecha
			salir=false;
			filcam=fil+1;
			colcam=col+1;
			for(var cont=filcam;cont<9 && colcam<9 && salir==false;cont++){
				if(array[cont][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(cont+","+colcam);
						}
						
					}else{
						if(array[cont][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(cont+","+colcam);
							}
							
							salir=true;
						}else{
							salir=true;
						}
				}			
				colcam++;
			}
			//abajo izq
			salir=false;
			filcam=fil+1;
			colcam=col-1;
			for(var cont=filcam;cont<9 && colcam>0 && salir==false;cont++){
				if(array[cont][colcam]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(cont+","+colcam);
						}
						
					}else{
						if(array[cont][colcam].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+cont+""+colcam).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(cont+","+colcam);
							}
							
							salir=true;
						}else{
							salir=true;
						}
				}			
				colcam--;
			}
			//rectas
			//vertical arriba
			salir=false;
			filcam=fil-1;
			if(filcam>0){
				for(var cont=filcam;cont>0 && salir==false;cont--){
					if(array[cont][col]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+cont+""+col).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(cont+","+col);
						}
						
					}else{
						if(array[cont][col].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+cont+""+col).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(cont+","+col);
							}
							
							salir=true;
						}else{
							salir=true;
						}
					}
				}
			}
			//vertical abajo
			filcam=fil+1;
			salir=false;
			if(filcam<9){
				for(var cont=filcam;cont<9 && salir==false;cont++){
					if(array[cont][col]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+cont+""+col).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(cont+","+col);
						}
						
					}else{
						if(array[cont][col].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+cont+""+col).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(cont+","+col);
							}
							
							salir=true;
						}else{
							salir=true;
						}
					}
				}
			}
			//horizontal izq
			colcam=col-1;
			salir=false;
			if(colcam>0){
				for(var cont=colcam;cont>0 && salir==false;cont--){
					if(array[fil][cont]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+fil+""+cont).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(fil+","+cont);
						}
						
					}else{
						if(array[fil][cont].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+fil+""+cont).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(fil+","+cont);
							}
							
							salir=true;
						}else{
							salir=true;
						}
					}
				}
			}
			//horizontal derecha
			colcam=col+1;
			salir=false;
			if(colcam<9){
				for(var cont=colcam;cont<9 && salir==false;cont++){
					if(array[fil][cont]=="nada"){
						if(jaqueMate==false){
							document.getElementById("c"+fil+""+cont).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(fil+","+cont);
						}
					}else{
						if(array[fil][cont].charAt(4)==letra1){
							if(jaqueMate==false){
								document.getElementById("c"+fil+""+cont).setAttribute("class","cmover");
							}else{
								posicionesFichass.push(fil+","+cont);
							}
							salir=true;
						}else{
							salir=true;
						}
					}
				}
			}
		}
		
		//rey 
		if(ficha=="rey_"+letra){
			var salir=false;
			//vertical arriba
			var filcam=fil-1;
			if(filcam>0){
				if(array[filcam][col]=="nada"){
					if(jaqueMate==false){
						document.getElementById("c"+filcam+""+col).setAttribute("class","cmover");
					}else{
						posicionesFichass.push(filcam+","+col);
					}
					
				}else{
					if(array[filcam][col].charAt(4)==letra1){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+col).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+col);
						}
						
						salir=true;
					}else{
						salir=true;
					}
				}
			}
			//vertical abajo
			filcam=fil+1;
			if(filcam<9){
				if(array[filcam][col]=="nada"){
					if(jaqueMate==false){
						document.getElementById("c"+filcam+""+col).setAttribute("class","cmover");
					}else{
						posicionesFichass.push(filcam+","+col);
					}
					
				}else{
					if(array[filcam][col].charAt(4)==letra1){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+col).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+col);
						}
						
						salir=true;
					}else{
						salir=true;
					}
				}

			}
			//horizontal izq
			colcam=col-1;
			if(colcam>0){
				if(array[fil][colcam]=="nada"){
					if(jaqueMate==false){
						document.getElementById("c"+fil+""+colcam).setAttribute("class","cmover");
					}else{
						posicionesFichass.push(fil+","+colcam);
					}
					
				}else{
					if(array[fil][colcam].charAt(4)==letra1){
						if(jaqueMate==false){
							document.getElementById("c"+fil+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(fil+","+colcam);
						}
						
						salir=true;
					}else{
						salir=true;
					}
				}

			}
			//horizontal derecha
			colcam=col+1;
			if(colcam<9){
				if(array[fil][colcam]=="nada"){
					if(jaqueMate==false){
						document.getElementById("c"+fil+""+colcam).setAttribute("class","cmover");
					}else{
						posicionesFichass.push(fil+","+colcam);
					}

					
				}else{
					if(array[fil][colcam].charAt(4)==letra1){
						if(jaqueMate==false){
							document.getElementById("c"+fil+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(fil+","+colcam);
						}

						salir=true;
					}else{
						salir=true;
					}
				}
			}
			//diagonal arriba izq
			colcam=col-1;
			filcam=fil-1;
			if(colcam>0 && filcam>0){
				if(array[filcam][colcam]=="nada"){
					if(jaqueMate==false){
						document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
					}else{
						posicionesFichass.push(filcam+","+colcam);
					}
					
				}else{
					if(array[filcam][colcam].charAt(4)==letra1){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam);
						}
						
						salir=true;
					}else{
						salir=true;
					}
				}
			}
			//diagonal arriba derecha
			colcam=col+1;
			filcam=fil-1;
			if(colcam<9 && filcam>0){
				if(array[filcam][colcam]=="nada"){
					if(jaqueMate==false){
						document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
					}else{
						posicionesFichass.push(filcam+","+colcam);
					}

					
				}else{
					if(array[filcam][colcam].charAt(4)==letra1){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam);
						}

						salir=true;
					}else{
						salir=true;
					}
				}
			}
			//diagonal abajo izquierda
			colcam=col-1;
			filcam=fil+1;
			if(colcam>0 && filcam<9){
				if(array[filcam][colcam]=="nada"){
					if(jaqueMate==false){
						document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
					}else{
						posicionesFichass.push(filcam+","+colcam);
					}
					
				}else{
					if(array[filcam][colcam].charAt(4)==letra1){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam);
						}
						
						salir=true;
					}else{
						salir=true;
					}
				}
			}
			//diagonal abajo derecha
			colcam=col+1;
			filcam=fil+1;
			if(colcam<9 && filcam<9){
				if(array[filcam][colcam]=="nada"){
					if(jaqueMate==false){
						document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
					}else{
						posicionesFichass.push(filcam+","+colcam);
					}
					
				}else{
					if(array[filcam][colcam].charAt(4)==letra1){
						if(jaqueMate==false){
							document.getElementById("c"+filcam+""+colcam).setAttribute("class","cmover");
						}else{
							posicionesFichass.push(filcam+","+colcam);
						}
						
						salir=true;
					}else{
						salir=true;
					}
				}
			}
			enroque(letra);
		}

		if(jaqueMate==true){
			return posicionesFichass;
		}
	}
}

function compReyes(){

	for(var fil=1;fil<9;fil++){
		for(var col=1;col<9;col++){
			if(array[fil][col]=="rey_n"){
					//vertical arriba
				var filcam=fil-1;
				var atras=false;
				if(filcam>0){
					if(array[filcam][col]=="nada"){
						
					}else{
						if(array[filcam][col]=="rey_b"){
							var atras=true;
						}else{

						}
					}
				}
				//vertical abajo
				filcam=fil+1;
				if(filcam<9){
					if(array[filcam][col]=="nada"){
						
					}else{
						if(array[filcam][col]=="rey_b"){
							var atras=true;
						}else{
							
						}
					}

				}
				//horizontal izq
				colcam=col-1;
				if(colcam>0){
					if(array[fil][colcam]=="nada"){
						
					}else{
						if(array[fil][colcam]=="rey_b"){
							var atras=true;
						}else{
							
						}
					}

				}
				//horizontal derecha
				colcam=col+1;
				if(colcam<9){
					if(array[fil][colcam]=="nada"){
						
					}else{
						if(array[fil][colcam]=="rey_b"){
							var atras=true;
						}else{
							
						}
					}
				}
				//diagonal arriba izq
				colcam=col-1;
				filcam=fil-1;
				if(colcam>0 && filcam>0){
					if(array[filcam][colcam]=="nada"){
						
					}else{
						if(array[filcam][colcam]=="rey_b"){
							var atras=true;
						}else{
							
						}
					}
				}
				//diagonal arriba derecha
				colcam=col+1;
				filcam=fil-1;
				if(colcam<9 && filcam>0){
					if(array[filcam][colcam]=="nada"){
						
					}else{
						if(array[filcam][colcam]=="rey_b"){
							var atras=true;
						}else{
							
						}
					}
				}
				//diagonal abajo izquierda
				colcam=col-1;
				filcam=fil+1;
				if(colcam>0 && filcam<9){
					if(array[filcam][colcam]=="nada"){
						
					}else{
						if(array[filcam][colcam]=="rey_b"){
							var atras=true;
						}else{
							
						}
					}
				}
				//diagonal abajo derecha
				colcam=col+1;
				filcam=fil+1;
				if(colcam<9 && filcam<9){
					if(array[filcam][colcam]=="nada"){
						
					}else{
						if(array[filcam][colcam]=="rey_b"){
							var atras=true;
						}else{
							
						}
					}
				}
				if(atras==true){
					ultMov();
				}
				
			}
		}
	}

}

function enroque(color){
	if(color=="b"){
		var tpp = parseInt(localStorage.getItem("rey_b"));
		var tpp1 = 0;
		var acu=0;
		if(tpp==0 && tpp1==0){
			if(array[8][1]=="torrb"){
				for(var cont=2;cont<5;cont++){
					if(array[8][cont]!="nada"){
						acu++;
					}
				}
				if(acu==0){
					document.getElementById("c83").setAttribute("class","cmover1");
				}
			}
			acu=0;
			if(array[8][8]=="torrb"){
				for(var cont=6;cont<8;cont++){
					if(array[8][cont]!="nada"){
						acu++;
					}
				}
				if(acu==0){
					document.getElementById("c87").setAttribute("class","cmover1");
				}
			}
		}
	}
	if(color=="n"){
		var tpp = parseInt(localStorage.getItem("rey_n"));
		var tpp1 = 0;
		var acu=0;
		if(tpp==0 && tpp1==0){
			if(array[1][1]=="torrn"){
				for(var cont=2;cont<5;cont++){
					if(array[1][cont]!="nada"){
						acu++;
					}
				}
				if(acu==0){
					document.getElementById("c13").setAttribute("class","cmover1");
				}
			}
			acu=0;
			if(array[1][8]=="torrn"){
				for(var cont=6;cont<8;cont++){
					if(array[1][cont]!="nada"){
						acu++;
					}
				}
				if(acu==0){
					document.getElementById("c17").setAttribute("class","cmover1");
				}
			}
		}
	}
}

function restaurar(){
	for(var fil=1;fil!=9;fil++){
		for(var col=1;col!=9;col++){
			var claseName= document.getElementById("c"+fil+""+col).className;
			if(claseName=="cmover" || claseName=="cmover1"){
				if(fil%2==0){
					if(col%2==0){
						document.getElementById("c"+fil+""+col).setAttribute("class","cblanco");
					}else{
						document.getElementById("c"+fil+""+col).setAttribute("class","cnegro");
					}
				}else{
					if(col%2==0){
						document.getElementById("c"+fil+""+col).setAttribute("class","cnegro");
					}else{
						document.getElementById("c"+fil+""+col).setAttribute("class","cblanco");
					}
				}
			}
		}
	}
}

function restaurarAzul(){
	for(var fil=1;fil!=9;fil++){
		for(var col=1;col!=9;col++){
			var claseName= document.getElementById("c"+fil+""+col).className;
			if(claseName=="cmover2"){
				if(fil%2==0){
					if(col%2==0){
						document.getElementById("c"+fil+""+col).setAttribute("class","cblanco");
					}else{
						document.getElementById("c"+fil+""+col).setAttribute("class","cnegro");
					}
				}else{
					if(col%2==0){
						document.getElementById("c"+fil+""+col).setAttribute("class","cnegro");
					}else{
						document.getElementById("c"+fil+""+col).setAttribute("class","cblanco");
					}
				}
			}
		}
	}
}


function permitirSoltar(ev) {
    ev.preventDefault();
}

function arrastrar(ev) {
	restaurarAzul();
	var tmp=ev.target.id;
	var fil=parseInt(tmp.charAt(1));
	var col=parseInt(tmp.charAt(2));
	var ficha = array[fil][col];
	var turno=localStorage.getItem("turno");
	var t=turno.charAt(0);
	var p=ficha.charAt(4);
	if(turno.charAt(0)==ficha.charAt(4)){
		mover(fil,col,ficha);		
    	ev.dataTransfer.setData("text", ev.target.id);
	}
}

function soltar(ev) {
    ev.preventDefault();
    var ids = ev.dataTransfer.getData("text");
	var tmp=ev.target.id;
	colocador(ids,tmp);
	restaurar();
	peonComp();
	compReyes();
}



function colocador(ids,tmp){
	var fils=parseInt(ids.charAt(1));
	var cols=parseInt(ids.charAt(2));
	var fild=parseInt(tmp.charAt(1));
	var cold=parseInt(tmp.charAt(2));
	if(document.getElementById("c"+fild+""+cold).className=="cmover" || document.getElementById("c"+fild+""+cold).className=="cmover1"){
		if(document.getElementById("c"+fild+""+cold).className=="cmover"){
			reproSon("ficha.wav");
			var ultFichtemp = localStorage.getItem("ultmfich");
			var UltmFichTemp;
			if(array[fild][cold]=="nada"){
				localStorage.setItem("ultmfich",ultFichtemp+"nada_");
				var contTablas = parseInt(localStorage.getItem("contTablas"));
				contTablas++;
				localStorage.setItem("contTablas",contTablas);
			}else{
				localStorage.setItem("ultmfich",ultFichtemp+array[fild][cold]);
				localStorage.setItem("contTablas","0");
			}
			
			array[fild][cold]=array[fils][cols];
			//comprobador enroque torres
			if(array[fild][cold]=="torrb"){
				var tpp = parseInt(localStorage.getItem("torrb"));
				tpp++;
				localStorage.setItem("torrb",tpp);
			}		
			if(array[fild][cold]=="torrn"){
				var tpp = parseInt(localStorage.getItem("torrn"));
				tpp++;
				localStorage.setItem("torrn",tpp);
			}
			//comprobador enroques reyes
			if(array[fild][cold]=="rey_b"){
				var tpp = parseInt(localStorage.getItem("rey_b"));
				tpp++;
				localStorage.setItem("rey_b",tpp);
			}		
			if(array[fild][cold]=="rey_n"){
				var tpp = parseInt(localStorage.getItem("rey_n"));
				tpp++;
				localStorage.setItem("rey_n",tpp);
			}
			var fichi = array[fils][cols];
			array[fils][cols]="nada";
			var abo=document.getElementById("d"+fild+""+cold);
			if(abo!=null){			
				document.getElementById("c"+fild+""+cold).removeChild(abo);
			}
		    document.getElementById("c"+fild+""+cold).appendChild(document.getElementById(ids));
		    document.getElementById("d"+fils+""+cols).setAttribute("id","d"+fild+""+cold);
		    var idmm = localStorage.getItem("idum");
		    localStorage.setItem("idum",idmm+"d"+fild+""+cold);
		    var casamm = localStorage.getItem("casam");
		    localStorage.setItem("casam",casamm+"c"+fils+""+cols);
		    if((fild==1 && fichi=="peonb") || (fild==8 && fichi=="peonn")){

		    }else{
		    	var idmm2 = localStorage.getItem("idum2");
				localStorage.setItem("idum2",idmm2+"ccc");
				var casamm2 = localStorage.getItem("casam2");
				localStorage.setItem("casam2",casamm2+"ccc");
				var ultFichtemp2 = localStorage.getItem("ultmfich2");
				localStorage.setItem("ultmfich2",ultFichtemp2+"nada_");
		    }
		    
		}else{
			if(fild==8){
				if(cold==3){
					var idmm = localStorage.getItem("idum");
				    localStorage.setItem("idum",idmm+"d"+fild+""+cold);
				    var casamm = localStorage.getItem("casam");
				    localStorage.setItem("casam",casamm+"c"+fils+""+cols);
				    var ultFichtemp = localStorage.getItem("ultmfich");
					localStorage.setItem("ultmfich",ultFichtemp+"nada_");

					var idmm2 = localStorage.getItem("idum2");
				    localStorage.setItem("idum2",idmm2+"d84");
				    var casamm2 = localStorage.getItem("casam2");
				    localStorage.setItem("casam2",casamm2+"c81");
				    var ultFichtemp2 = localStorage.getItem("ultmfich2");
					localStorage.setItem("ultmfich2",ultFichtemp2+"torrb");

					array[fild][cold]=array[fils][cols];
					array[fils][cols]="nada";
					document.getElementById("c"+fild+""+cold).appendChild(document.getElementById(ids));
		    		document.getElementById("d"+fils+""+cols).setAttribute("id","d"+fild+""+cold);
		    		array[8][4]=array[8][1];
		    		array[8][1]="nada";
		    		var ids1 = document.getElementById("d81");
		    		ids1.setAttribute("id","d84")
		    		document.getElementById("c84").appendChild(ids1);
				}
				if(cold==7){
					var idmm = localStorage.getItem("idum");
				    localStorage.setItem("idum",idmm+"d"+fild+""+cold);
				    var casamm = localStorage.getItem("casam");
				    localStorage.setItem("casam",casamm+"c"+fils+""+cols);
				    var ultFichtemp = localStorage.getItem("ultmfich");
					localStorage.setItem("ultmfich",ultFichtemp+"nada_");

					var idmm2 = localStorage.getItem("idum2");
				    localStorage.setItem("idum2",idmm2+"d86");
				    var casamm2 = localStorage.getItem("casam2");
				    localStorage.setItem("casam2",casamm2+"c88");
				    var ultFichtemp2 = localStorage.getItem("ultmfich2");
					localStorage.setItem("ultmfich2",ultFichtemp2+"torrb");

					array[fild][cold]=array[fils][cols];
					array[fils][cols]="nada";
					document.getElementById("c"+fild+""+cold).appendChild(document.getElementById(ids));
		    		document.getElementById("d"+fils+""+cols).setAttribute("id","d"+fild+""+cold);
		    		array[8][6]=array[8][8];
		    		array[8][8]="nada";
		    		var ids1 = document.getElementById("d88");
		    		ids1.setAttribute("id","d86")
		    		document.getElementById("c86").appendChild(ids1);
				}
			}
			if(fild==1){
				if(cold==3){
					var idmm = localStorage.getItem("idum");
				    localStorage.setItem("idum",idmm+"d"+fild+""+cold);
				    var casamm = localStorage.getItem("casam");
				    localStorage.setItem("casam",casamm+"c"+fils+""+cols);
				    var ultFichtemp = localStorage.getItem("ultmfich");
					localStorage.setItem("ultmfich",ultFichtemp+"nada_");

					var idmm2 = localStorage.getItem("idum2");
				    localStorage.setItem("idum2",idmm2+"d14");
				    var casamm2 = localStorage.getItem("casam2");
				    localStorage.setItem("casam2",casamm2+"c11");
				    var ultFichtemp2 = localStorage.getItem("ultmfich2");
					localStorage.setItem("ultmfich2",ultFichtemp2+"torrn");

					array[fild][cold]=array[fils][cols];
					array[fils][cols]="nada";
					document.getElementById("c"+fild+""+cold).appendChild(document.getElementById(ids));
		    		document.getElementById("d"+fils+""+cols).setAttribute("id","d"+fild+""+cold);
		    		array[1][4]=array[1][1];
		    		array[1][1]="nada";
		    		var ids1 = document.getElementById("d11");
		    		ids1.setAttribute("id","d14")
		    		document.getElementById("c14").appendChild(ids1);
				}
				if(cold==7){
					var idmm = localStorage.getItem("idum");
				    localStorage.setItem("idum",idmm+"d"+fild+""+cold);
				    var casamm = localStorage.getItem("casam");
				    localStorage.setItem("casam",casamm+"c"+fils+""+cols);
				    var ultFichtemp = localStorage.getItem("ultmfich");
					localStorage.setItem("ultmfich",ultFichtemp+"nada_");

					var idmm2 = localStorage.getItem("idum2");
				    localStorage.setItem("idum2",idmm2+"d16");
				    var casamm2 = localStorage.getItem("casam2");
				    localStorage.setItem("casam2",casamm2+"c18");
				    var ultFichtemp2 = localStorage.getItem("ultmfich2");
					localStorage.setItem("ultmfich2",ultFichtemp2+"torrn");

					array[fild][cold]=array[fils][cols];
					array[fils][cols]="nada";
					document.getElementById("c"+fild+""+cold).appendChild(document.getElementById(ids));
		    		document.getElementById("d"+fils+""+cols).setAttribute("id","d"+fild+""+cold);
		    		array[1][6]=array[1][8];
		    		array[1][8]="nada";
		    		var ids1 = document.getElementById("d18");
		    		ids1.setAttribute("id","d16")
		    		document.getElementById("c16").appendChild(ids1);
				}
			}
		}
		var movimiento = localStorage.getItem("movimientoAzul");
		if(movimiento=="si"){
			document.getElementById("c"+fils+""+cols).setAttribute("class","cmover2");
			document.getElementById("c"+fild+""+cold).setAttribute("class","cmover2");
		}
		
				
		peonComp();
		compReyes();
		filasCol();
		jaqueComp();
		turnos();
		guardar();
	}  
}

function filasCol(){
	var ultFichtemp = localStorage.getItem("ultmfich");
	var ultFich="";
	if(ultFichtemp.length > 5){
		for(var cont=(ultFichtemp.length-5);cont<ultFichtemp.length;cont++){
			ultFich=ultFich+""+ultFichtemp.charAt(cont);
		}
	}else{
		ultFich=ultFichtemp;
	}
	var ff = ultFich;
	var compn = parseInt(localStorage.getItem("colrten"));
	var compbl = parseInt(localStorage.getItem("colrtebl"));
	if(ff!="nada_"){
		if(ff.charAt(4)=="b"){
			var guardarColB=localStorage.getItem("guardarColB");
			localStorage.setItem("guardarColB",guardarColB+ff);
			if(ff=="peonb"){
				var dd = creaFich(7,1,false);
				compbl++;
			}
			if(ff=="torrb"){
				var dd = creaFich(8,1,false);
				compbl++;
			}
			if(ff=="cabab"){
				var dd = creaFich(8,2,false);
				compbl++;
			}
			if(ff=="alfib"){
				var dd = creaFich(8,3,false);
				compbl++;
			}
			if(ff=="reinb"){
				var dd = creaFich(8,4,false);
				compbl++;
			}
			if(ff=="rey_b"){
				var dd = creaFich(8,5,false);
				compbl++;
			}
			localStorage.setItem("colrtebl",""+compbl);
			dd.setAttribute("id","dddbl"+compbl);
			if(compbl>8){
				document.getElementById("colbla").appendChild(dd);
			}else{
				document.getElementById("colbla1").appendChild(dd);
			}

		}else{
			if(ff!=""){
				var guardarColN=localStorage.getItem("guardarColN");
				localStorage.setItem("guardarColN",guardarColN+ff);
				if(ff=="peonn"){
					var dd = creaFich(2,1,false);
					compn++;
				}
				if(ff=="torrn"){
					var dd = creaFich(1,1,false);
					compn++;
				}
				if(ff=="caban"){
					var dd = creaFich(1,2,false);
					compn++;
				}
				if(ff=="alfin"){
					var dd = creaFich(1,3,false);
					compn++;
				}
				if(ff=="reinn"){
					var dd = creaFich(1,4,false);
					compn++;
				}
				if(ff=="rey_n"){
					var dd = creaFich(1,5,false);
					compn++;
				}
				localStorage.setItem("colrten",""+compn);
				dd.setAttribute("id","dddn"+compn);
				if(compn>8){
					document.getElementById("colneg1").appendChild(dd);
				}else{
					document.getElementById("colneg").appendChild(dd);
				}
			}else{

			}
		}
	}
	compTablas();
}

function peonComp(){
	for(var col=1;col<9;col++){
		if(array[1][col]=="peonb"){
			localStorage.setItem("jugar","no");
			document.getElementById("ppbl").setAttribute("class","");
			document.getElementById("elegirbl").setAttribute("class","");
			for(var cont=1;cont!=5;cont++){
				document.getElementById("bb"+cont).addEventListener("click",convBlanco);
			}			
		}
		if(array[8][col]=="peonn"){
			localStorage.setItem("jugar","no");
			document.getElementById("ppn").setAttribute("class","");
			document.getElementById("elegirn").setAttribute("class","");
			for(var cont=1;cont!=5;cont++){
				document.getElementById("bn"+cont).addEventListener("click",convNegro);
			}
		}
	}
}

function convNegro(ev){
	turnos();
	document.getElementById("ppn").setAttribute("class","inv");
	document.getElementById("elegirn").setAttribute("class","inv");
	var id = ev.target.id;
	var num = parseInt(id.charAt(2));
	var fich;
	var nomficha;
	if(num==1){
		fich=creaFich(1,1,false);
		nomficha="torrn";
	}
	if(num==2){
		fich=creaFich(1,2,false);
		nomficha="caban";
	}
	if(num==3){
		fich=creaFich(1,3,false);
		nomficha="alfin";
	}
	if(num==4){
		fich=creaFich(1,4,false);
		nomficha="reinn";
	}
	for(var col=1;col<9;col++){
		if(array[8][col]=="peonn"){
			array[8][col]=nomficha;
			document.getElementById("c8"+col).innerHTML="";
			fich.setAttribute("id","d8"+col);
			if(modo=="tocar"){
				fich.addEventListener("click",colotoc,false);
				fich.addEventListener("click",colotoc2,false);
			}else{
				fich.addEventListener("dragstart",arrastrar,false);
			}
			document.getElementById("c8"+col).appendChild(fich);
			var idmm2 = localStorage.getItem("idum2");
			localStorage.setItem("idum2",idmm2+"c"+8+""+col);
		}
	}
	
	var casamm2 = localStorage.getItem("casam2");
	localStorage.setItem("casam2",casamm2+"ccc");
	var ultFichtemp2 = localStorage.getItem("ultmfich2");
	localStorage.setItem("ultmfich2",ultFichtemp2+"trans");

	localStorage.setItem("jugar","");
	jaqueComp();
	turnos();
}

function convBlanco(ev){
	turnos();
	document.getElementById("ppbl").setAttribute("class","inv");
	document.getElementById("elegirbl").setAttribute("class","inv");
	var id = ev.target.id;
	var num = parseInt(id.charAt(2));
	var fich;
	var nomficha;
	if(num==1){
		fich=creaFich(8,1,false);
		nomficha="torrb";
	}
	if(num==2){
		fich=creaFich(8,2,false);
		nomficha="cabab";
	}
	if(num==3){
		fich=creaFich(8,3,false);
		nomficha="alfib";
	}
	if(num==4){
		fich=creaFich(8,4,false);
		nomficha="reinb";
	}
	for(var col=1;col<9;col++){
		if(array[1][col]=="peonb"){
			array[1][col]=nomficha;
			document.getElementById("c1"+col).innerHTML="";
			fich.setAttribute("id","d1"+col);
			if(modo=="tocar"){
				fich.addEventListener("click",colotoc,false);
				fich.addEventListener("click",colotoc2,false);
			}else{
				fich.addEventListener("dragstart",arrastrar,false);
			}
			document.getElementById("c1"+col).appendChild(fich);
			var idmm2 = localStorage.getItem("idum2");
			localStorage.setItem("idum2",idmm2+"c"+1+""+col);
		}
	}
	var casamm2 = localStorage.getItem("casam2");
	localStorage.setItem("casam2",casamm2+"ccc");
	var ultFichtemp2 = localStorage.getItem("ultmfich2");
	localStorage.setItem("ultmfich2",ultFichtemp2+"trans");
	localStorage.setItem("jugar","");
	jaqueComp();
	turnos();
}

function jaqueComp(modoMate,arrayMate,retroceso){

	if(modoMate==null){
		modoMate=false;
	}

	//en fichas estan las fichas que hacen jaque en posiciones sus posiciones en el tablero en fichasPosi estan
	//todos las fichas que tiene movimientos a nada posibles, en posicionesPosi las posiciones de esas fichas y luego dentro
	//de los fores esta posicionesFich para meterlo dentro de posicionesPosi
	var fichas = new Array();
	var posiciones = new Array();
	var fichasPosi = new Array();
	var posicionesPosi = new Array();
	var reynjaque=false;
	var contArr=0;
	var letraRey;
	var top=false;
	localStorage.setItem("jaqueMattt","si");

	if(modoMate==true){
		arrayTemp= arrayMate.slice(0);
	}else{
		arrayTemp= array.slice(0);
	}

	var posicionesFichasInter=new Array();
	for(var fil=1;fil<9;fil++){
		for(var col=1;col<9;col++){
			var ficha=arrayTemp[fil][col];
			var letra=arrayTemp[fil][col].charAt(4);
			var letra1;
			var posicionesFich = new Array();
			var turn=localStorage.getItem("turno").charAt(0);
			if(ficha!="nada"){
				fichasPosi.push(ficha);

				posicionesFichasInter.push(fil+","+col);
				if(letra=="b"){
					letra1="n";
				}
				if(letra=="n"){
					letra1="b";
				}
				//peon blanco
				if(ficha=="peonb"){
					var filcam=fil-1;
					var colcam=col-1;
					var colcam1=col+1;
					
					if(filcam>0 && colcam>0 && filcam<9 && colcam < 9 ){
						if(arrayTemp[filcam][colcam]!="nada"){
							if(arrayTemp[filcam][colcam]=="rey_"+letra1){
								reynjaque=true;
								fichas.push(ficha);
								posiciones.push(filcam+","+colcam);
							}
						}
					}
					
					
					if(filcam>0 && colcam1>0 && filcam<9 && colcam1 < 9 ){
						if(arrayTemp[filcam][colcam1]!="nada"){
							if(arrayTemp[filcam][colcam1]=="rey_"+letra1){
								reynjaque=true;
								fichas.push(ficha);
								posiciones.push(fil+","+col);
							}
						}
					}
					if(filcam>0){
						if(fil==7 && arrayTemp[filcam][col].charAt(4)!="b" && arrayTemp[filcam-1][col]!="b"){
							posicionesFich.push(filcam+","+col);
							if((filcam-1)>0){
								if(arrayTemp[filcam-1][col]=="nada"){
									posicionesFich.push((filcam-1)+","+col);					
								}
							}
							
						}else{
							if(arrayTemp[filcam][col].charAt(4)!="b" && arrayTemp[filcam][col].charAt(4)!="n"){
								posicionesFich.push(filcam+","+col);					
							}
						}

					}

					
				}
				//peon negro
				if(ficha=="peonn"){
					var filcam=fil+1;
					var colcam=col-1;
					var colcam1=col+1;
					if(filcam>0 && colcam>0 && filcam<9 && colcam < 9 ){
						if(arrayTemp[filcam][colcam]!="nada"){
							if(arrayTemp[filcam][colcam]=="rey_"+letra1){
								reynjaque=true;
								fichas.push(ficha);
								posiciones.push(fil+","+col);
							}
						}
					}
					if(filcam>0 && colcam1>0 && filcam<9 && colcam1 < 9 ){
						if(arrayTemp[filcam][colcam1]!="nada"){
							if(arrayTemp[filcam][colcam1]=="rey_"+letra1){
								reynjaque=true;
								fichas.push(ficha);
								posiciones.push(fil+","+col);
							}
						}
					}

					if(filcam<9){
						if(fil==7 && arrayTemp[filcam][col].charAt(4)!="n" && arrayTemp[filcam-1][col]!="n"){
							posicionesFich.push(filcam+","+col);
							if((filcam+1)<9){
								if(arrayTemp[filcam+1][col]=="nada"){
									posicionesFich.push((filcam+1)+","+col);					
								}
							}							
						}else{
							if(arrayTemp[filcam][col].charAt(4)!="n" && arrayTemp[filcam][col].charAt(4)!="b"){
								posicionesFich.push(filcam+","+col);					
							}
						}

					}
					
				}
				//torre
				if(ficha=="torr"+letra){
					var salir=false;
					//vertical arriba
					var filcam=fil-1;
					if(filcam>0){
						for(var cont=filcam;cont>0 && salir==false;cont--){
							if(arrayTemp[cont][col]=="nada"){
								posicionesFich.push(cont+","+col);
							}else{
								if(arrayTemp[cont][col]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[cont][col].charAt(4)==letra1){
										posicionesFich.push(cont+","+col);
									}
									salir=true;
								}
							}
						}
					}
					//vertical abajo
					filcam=fil+1;
					salir=false;
					if(filcam<9){
						for(var cont=filcam;cont<9 && salir==false;cont++){
							if(arrayTemp[cont][col]=="nada"){
								posicionesFich.push(cont+","+col);
							}else{
								if(arrayTemp[cont][col]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[cont][col].charAt(4)==letra1){
										posicionesFich.push(cont+","+col);
									}
									salir=true;
								}
							}
						}
					}
					//horizontal izq
					colcam=col-1;
					salir=false;
					if(colcam>0){
						for(var cont=colcam;cont>0 && salir==false;cont--){
							if(arrayTemp[fil][cont]=="nada"){
								posicionesFich.push(fil+","+cont);
							}else{
								if(arrayTemp[fil][cont]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[fil][cont].charAt(4)==letra1){
										posicionesFich.push(fil+","+cont);
									}
									salir=true;
								}
							}
						}
					}
					//horizontal derecha
					colcam=col+1;
					salir=false;
					if(colcam<9){
						for(var cont=colcam;cont<9 && salir==false;cont++){
							if(arrayTemp[fil][cont]=="nada"){
								posicionesFich.push(fil+","+cont);
							}else{
								if(arrayTemp[fil][cont]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[fil][cont].charAt(4)==letra1){
										posicionesFich.push(fil+","+cont);
									}
									salir=true;
								}
							}
						}
					}
				}
				//caballo 
				if(ficha=="caba"+letra){
					//vertical arriba
					var filcam=fil-2;
					var colcam=col+1;
					var colcam1=col-1;
					if(filcam>0){
						//derecha
						if(colcam<9){
							if(arrayTemp[filcam][colcam]=="nada"){
								posicionesFich.push(filcam+","+colcam);
							}else{
								if(arrayTemp[filcam][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
								}
								if(array[filcam][colcam].charAt(4)==letra1){
									posicionesFich.push(filcam+","+colcam);
								}
							}
						}
						//izquierda
						if(colcam1>0){
							if(arrayTemp[filcam][colcam1]=="nada"){
								posicionesFich.push(filcam+","+colcam1);
							}else{
								if(arrayTemp[filcam][colcam1]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
								}
								if(array[filcam][colcam1].charAt(4)==letra1){
									posicionesFich.push(filcam+","+colcam1);
								}
							}
						}
					}
				
					//vertical abajo
					var filcam=fil+2;
					var colcam=col+1;
					var colcam1=col-1;
					if(filcam<9){
						//derecha
						if(colcam<9){
							if(arrayTemp[filcam][colcam]=="nada"){
								posicionesFich.push(filcam+","+colcam);								
							}else{
								if(arrayTemp[filcam][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
								}
								if(array[filcam][colcam].charAt(4)==letra1){
									posicionesFich.push(filcam+","+colcam);
								}
							}
						}
						//izquierda
						if(colcam1>0){
							if(arrayTemp[filcam][colcam1]=="nada"){								
								posicionesFich.push(filcam+","+colcam1);
							}else{
								if(arrayTemp[filcam][colcam1]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
								}
								if(array[filcam][colcam1].charAt(4)==letra1){
									posicionesFich.push(filcam+","+colcam1);
								}
							}
						}
					}
					//horizontal derecha
					var colcam=col+2;
					var filcam=fil+1;
					var filcam1=fil-1;
					if(colcam<9){
						//abajo
						if(filcam<9){
							if(arrayTemp[filcam][colcam]=="nada"){
								posicionesFich.push(filcam+","+colcam);
							}else{
								if(arrayTemp[filcam][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
								}
								if(array[filcam][colcam].charAt(4)==letra1){
									posicionesFich.push(filcam+","+colcam);
								}
							}
						}
						//arriba
						if(filcam1>0){
							if(arrayTemp[filcam1][colcam]=="nada"){
								posicionesFich.push(filcam1+","+colcam);
							}else{
								if(arrayTemp[filcam1][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
								}
								if(array[filcam1][colcam].charAt(4)==letra1){
									posicionesFich.push(filcam1+","+colcam);
								}
							}
						}
					}
					//horizontal izq
					var colcam=col-2;
					var filcam=fil+1;
					var filcam1=fil-1;
					if(colcam>0){
						//abajo
						if(filcam<9){
							if(arrayTemp[filcam][colcam]=="nada"){
								posicionesFich.push(filcam+","+colcam);
							}else{
								if(arrayTemp[filcam][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
								}
								if(array[filcam][colcam].charAt(4)==letra1){
									posicionesFich.push(filcam+","+colcam);
								}
							}
						}
						//arriba
						if(filcam1>0){
							if(arrayTemp[filcam1][colcam]=="nada"){
								posicionesFich.push(filcam1+","+colcam);
							}else{
								if(arrayTemp[filcam1][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
								}
								if(array[filcam1][colcam].charAt(4)==letra1){
									posicionesFich.push(filcam+","+colcam);
								}
							}
						}
					}
				}
				//alfil blanco
				if(ficha=="alfi"+letra){
					//arriba derecha
					var salir=false;
					var filcam=fil-1;
					var colcam=col+1;
					for(var cont=filcam;cont>0 && colcam<9 && salir==false;cont--){
						if(arrayTemp[cont][colcam]=="nada"){
								posicionesFich.push(cont+","+colcam);
							}else{
								if(arrayTemp[cont][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[cont][colcam].charAt(4)==letra1){
										posicionesFich.push(cont+","+colcam);
									}
									salir=true;
								}
						}			
						colcam++;
					}
					//arriba izq
					salir=false;
					filcam=fil-1;
					colcam=col-1;
					for(var cont=filcam;cont>0 && colcam>0 && salir==false;cont--){
						if(arrayTemp[cont][colcam]=="nada"){
								posicionesFich.push(cont+","+colcam);
							}else{
								if(arrayTemp[cont][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[cont][colcam].charAt(4)==letra1){
										posicionesFich.push(cont+","+colcam);
									}
									salir=true;
								}
						}			
						colcam--;
					}
					//abajo derecha
					salir=false;
					filcam=fil+1;
					colcam=col+1;
					for(var cont=filcam;cont<9 && colcam<9 && salir==false;cont++){
						if(arrayTemp[cont][colcam]=="nada"){
								posicionesFich.push(cont+","+colcam);
							}else{
								if(arrayTemp[cont][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[cont][colcam].charAt(4)==letra1){
										posicionesFich.push(cont+","+colcam);
									}
									salir=true;
								}
							}
									
						colcam++;
					}
					//abajo izq
					salir=false;
					filcam=fil+1;
					colcam=col-1;
					for(var cont=filcam;cont<9 && colcam>0 && salir==false;cont++){
						if(arrayTemp[cont][colcam]=="nada"){
								posicionesFich.push(cont+","+colcam);
							}else{
								if(arrayTemp[cont][colcam]=="nada"){
									posicionesFich.push(cont+","+colcam);
							}else{
								if(arrayTemp[cont][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[cont][colcam].charAt(4)==letra1){
										posicionesFich.push(cont+","+colcam);
									}
									salir=true;
								}
							}
					}			
						colcam--;
					}
				}
				//reina
				if(ficha=="rein"+letra){
					
					//rectas
					var salir=false;
					//vertical arriba
					var filcam=fil-1;
					if(filcam>0){
						for(var cont=filcam;cont>0 && salir==false;cont--){
							if(arrayTemp[cont][col]=="nada"){
								posicionesFich.push(cont+","+col);
							}else{
								if(arrayTemp[cont][col]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[cont][col].charAt(4)==letra1){
										posicionesFich.push(cont+","+col);
									}
									salir=true;
								}
							}
						}
					}
					//vertical abajo
					filcam=fil+1;
					salir=false;
					if(filcam<9){
						for(var cont=filcam;cont<9 && salir==false;cont++){
							if(arrayTemp[cont][col]=="nada"){
								posicionesFich.push(cont+","+col);
							}else{
								if(arrayTemp[cont][col]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[cont][col].charAt(4)==letra1){
										posicionesFich.push(cont+","+col);
									}
									salir=true;
								}
							}
						}
					}
					//horizontal izq
					colcam=col-1;
					salir=false;
					if(colcam>0){
						for(var cont=colcam;cont>0 && salir==false;cont--){
							if(arrayTemp[fil][cont]=="nada"){
								posicionesFich.push(fil+","+cont);
							}else{
								if(arrayTemp[fil][cont]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[fil][cont].charAt(4)==letra1){
										posicionesFich.push(fil+","+cont);
									}
									salir=true;
								}
							}
						}
					}
					//horizontal derecha
					colcam=col+1;
					salir=false;
					if(colcam<9){
						for(var cont=colcam;cont<9 && salir==false;cont++){
							if(arrayTemp[fil][cont]=="nada"){
								posicionesFich.push(fil+","+cont);
							}else{
								if(arrayTemp[fil][cont]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[fil][cont].charAt(4)==letra1){
										posicionesFich.push(fil+","+cont);
									}
									salir=true;
								}
							}
						}
					}
					//diagonales
					//arriba derecha
					salir=false;
					filcam=fil-1;
					colcam=col+1;
					for(var cont=filcam;cont>0 && colcam<9 && salir==false;cont--){
						if(arrayTemp[cont][colcam]=="nada"){
								posicionesFich.push(cont+","+colcam);
							}else{
								if(arrayTemp[cont][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[cont][colcam].charAt(4)==letra1){
										posicionesFich.push(cont+","+colcam);
									}
									salir=true;
								}
						}			
						colcam++;
					}
					//arriba izq
					salir=false;
					filcam=fil-1;
					colcam=col-1;
					for(var cont=filcam;cont>0 && colcam>0 && salir==false;cont--){
						if(arrayTemp[cont][colcam]=="nada"){
								posicionesFich.push(cont+","+colcam);
							}else{
								if(arrayTemp[cont][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[cont][colcam].charAt(4)==letra1){
										posicionesFich.push(cont+","+colcam);
									}
									salir=true;
								}
						}			
						colcam--;
					}
					//abajo derecha
					salir=false;
					filcam=fil+1;
					colcam=col+1;
					for(var cont=filcam;cont<9 && colcam<9 && salir==false;cont++){
						if(arrayTemp[cont][colcam]=="nada"){
								posicionesFich.push(cont+","+colcam);
							}else{
								if(arrayTemp[cont][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[cont][colcam].charAt(4)==letra1){
										posicionesFich.push(cont+","+colcam);
									}
									salir=true;
								}
							}
									
						colcam++;
					}
					//abajo izq
					salir=false;
					filcam=fil+1;
					colcam=col-1;
					for(var cont=filcam;cont<9 && colcam>0 && salir==false;cont++){
						if(arrayTemp[cont][colcam]=="nada"){
								posicionesFich.push(cont+","+colcam);
						}else{
							if(arrayTemp[cont][colcam]=="nada"){
								posicionesFich.push(cont+","+colcam);
							}else{
								if(arrayTemp[cont][colcam]=="rey_"+letra1){
									reynjaque=true;
									fichas.push(ficha);
									posiciones.push(fil+","+col);
									salir=true;
								}else{
									if(array[cont][colcam].charAt(4)==letra1){
										posicionesFich.push(cont+","+colcam);
									}
									salir=true;
								}
							}
						}			
						colcam--;
					}
				}
				//rey 
				if(ficha=="rey_"+letra){
					var salir=false;
					//vertical arriba
					var filcam=fil-1;
					if(filcam>0){
						if(arrayTemp[filcam][col]=="nada"){
							
							posicionesFich.push(filcam+","+col);
							
						}else{
							if(arrayTemp[filcam][col].charAt(4)==letra1){						
								posicionesFich.push(filcam+","+col);
								if(arrayTemp[filcam][col]=="rey_"+letra1){
									reynjaque=true;
								}					
								salir=true;
							}else{
								salir=true;
							}
						}
					}
					//vertical abajo
					filcam=fil+1;
					if(filcam<9){
						if(arrayTemp[filcam][col]=="nada"){					
							posicionesFich.push(filcam+","+col);			
						
						}else{
							if(arrayTemp[filcam][col].charAt(4)==letra1){						
								posicionesFich.push(filcam+","+col);					
								if(arrayTemp[filcam][col]=="rey_"+letra1){
									reynjaque=true;
								}
								salir=true;
							}else{
								salir=true;
							}
						}

					}
					//horizontal izq
					colcam=col-1;
					if(colcam>0){
						if(arrayTemp[fil][colcam]=="nada"){
							posicionesFich.push(fil+","+colcam);
						
							
						}else{
							if(arrayTemp[fil][colcam].charAt(4)==letra1){						
								posicionesFich.push(fil+","+colcam);					
								if(arrayTemp[fil][colcam]=="rey_"+letra1){
									reynjaque=true;
								}
								salir=true;
							}else{
								salir=true;
							}
						}

					}
					//horizontal derecha
					colcam=col+1;
					if(colcam<9){
						if(arrayTemp[fil][colcam]=="nada"){					
							posicionesFich.push(fil+","+colcam);				

							
						}else{
							if(arrayTemp[fil][colcam].charAt(4)==letra1){						
								posicionesFich.push(fil+","+colcam);					
								if(arrayTemp[fil][colcam]=="rey_"+letra1){
									reynjaque=true;
								}
								salir=true;
							}else{
								salir=true;
							}
						}
					}
					//diagonal arriba izq
					colcam=col-1;
					filcam=fil-1;
					if(colcam>0 && filcam>0){
						if(arrayTemp[filcam][colcam]=="nada"){
							posicionesFich.push(filcam+","+colcam);
							
							
						}else{
							if(arrayTemp[filcam][colcam].charAt(4)==letra1){
								
								posicionesFich.push(filcam+","+colcam);
								if(arrayTemp[filcam][colcam]=="rey_"+letra1){
									reynjaque=true;
								}
								
								salir=true;
							}else{
								salir=true;
							}
						}
					}
					//diagonal arriba derecha
					colcam=col+1;
					filcam=fil-1;
					if(colcam<9 && filcam>0){
						if(arrayTemp[filcam][colcam]=="nada"){					
							posicionesFich.push(filcam+","+colcam);				
						
						}else{
							if(arrayTemp[filcam][colcam].charAt(4)==letra1){						
								posicionesFich.push(filcam+","+colcam);
								if(arrayTemp[filcam][colcam]=="rey_"+letra1){
									reynjaque=true;
								}
								salir=true;
							}else{
								salir=true;
							}
						}
					}
					//diagonal abajo izquierda
					colcam=col-1;
					filcam=fil+1;
					if(colcam>0 && filcam<9){
						if(arrayTemp[filcam][colcam]=="nada"){
							posicionesFich.push(filcam+","+colcam);				
							
						}else{
							if(arrayTemp[filcam][colcam].charAt(4)==letra1){						
								posicionesFich.push(filcam+","+colcam);					
								if(arrayTemp[filcam][colcam]=="rey_"+letra1){
									reynjaque=true;
								}
								salir=true;
							}else{
								salir=true;
							}
						}
					}
					//diagonal abajo derecha
					colcam=col+1;
					filcam=fil+1;
					if(colcam<9 && filcam<9){
						if(arrayTemp[filcam][colcam]=="nada"){				
							posicionesFich.push(filcam+","+colcam);				
							
						}else{
							if(arrayTemp[filcam][colcam].charAt(4)==letra1){						
								posicionesFich.push(filcam+","+colcam);					
								if(arrayTemp[filcam][colcam]=="rey_"+letra1){
									reynjaque=true;								}
								salir=true;
							}else{
								salir=true;
							}
						}
					}
				}
				posicionesPosi[contArr]= posicionesFich.slice(0);
				contArr++;
				if(reynjaque==true && top==false){
					letraRey=letra1;
					top=true;
					console.log("Ficha que hace mate "+ficha);
				}
			}
		}
		
	}
	if(modoMate==false){
		if(reynjaque==true){
			var colorySon=false;
			document.getElementById("bod").setAttribute("class","roj");
			var jaqueUso = localStorage.getItem("jaqueUso");
			if(jaqueUso=="Act" && retroceso!=true){
				colorySon=false;
				ultMov();
			}else{
				colorySon=true;
				localStorage.setItem("jaqueUso","Act");
			}

			var turn=localStorage.getItem("turno").charAt(0);

			if((letraRey==null || letraRey==turn) && retroceso!=true){
				colorySon=false;
				ultMov();
				localStorage.setItem("jaqueMattt","no");
				localStorage.setItem("jaqueUso","");
			}else{
				if(retroceso!=true && colorySon!=false){
					jaqueMateComp(fichas,posiciones,fichasPosi,posicionesPosi,letraRey,posicionesFichasInter);
				}
				
			}
			if(colorySon==true){
				sessionStorage.setItem("matador","si");
				restaurarAzul();
				reproSon("mate.mp3");
			}
			
		}else{
			sessionStorage.setItem("matador","no");
			document.getElementById("bod").setAttribute("class","");
			localStorage.setItem("jaqueUso","");
			compAhogado();
		}
	}
	if(reynjaque==true && modoMate==true){
		return true;
	}
	if(reynjaque==false && modoMate==true){
		return false;
	}
}

function jaqueMateComp(fichas,posiciones,fichasPosi,posicionesPosi,letraRey,posicionesFichasInter){
	var array1= JSON.parse( JSON.stringify( array ) );
	var rey= "rey_"+letraRey;
	var letra1;
	if(rey=="rey_n"){
		letra1="b";
	}else{
		letra1="n";
	}
	var ahogado=false;
	var fil;
	var col;
	var salir=false;
	var comp=0;
	var comp1=8;
	var x;
	var y;
	var jaqueMate;
	for(fil=1;fil<9 && salir==false;fil++){
		for(col=1;col<9 && salir==false;col++){
			if(array[fil][col]==rey){
				salir=true;
				x= fil;
				y=col;
			}
		}
	}
	fil=x;
	col=y;
	//mover el rey (ahogado)
	//vertica arriba
	var filcam = fil-1;
	if(filcam>0){
		if(array1[filcam][col]=="nada" || (array1[filcam][col].charAt(4)==letra1 && array1[filcam][col]!="rey_"+letra1)){
			array1[filcam][col]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//vertical arriba izquierda
	filcam = fil-1;
	var colcam=col-1;
	if(filcam>0 && colcam>0){
		if(array1[filcam][colcam]=="nada" || (array1[filcam][colcam].charAt(4)==letra1 && array1[filcam][colcam]!="rey_"+letra1)){
			array1[filcam][colcam]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//vertical arriba derecha
	filcam = fil-1;
	colcam=col+1;
	if(filcam>0 && colcam<9){
		if(array1[filcam][colcam]=="nada" || (array1[filcam][colcam].charAt(4)==letra1 && array1[filcam][colcam]!="rey_"+letra1)){
			array1[filcam][colcam]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//horizontal izquierda
	colcam=col-1;
	if(colcam>0){
		if(array1[fil][colcam]=="nada" || (array1[fil][colcam].charAt(4)==letra1 && array1[fil][colcam]!="rey_"+letra1)){
			array1[fil][colcam]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//Horizontal derecha
	colcam=col+1;
	if(colcam<9){
		if(array1[fil][colcam]=="nada" || (array1[fil][colcam].charAt(4)==letra1 && array1[fil][colcam]!="rey_"+letra1)){
			array1[fil][colcam]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//Vertical abajo
	filcam = fil+1;
	if(filcam<9){
		if(array1[filcam][col]=="nada" || (array1[filcam][col].charAt(4)==letra1 && array1[filcam][col]!="rey_"+letra1)){
			array1[filcam][col]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//vertical abajo izquierda
	filcam = fil+1;
	colcam=col-1;
	if(filcam<9 && colcam>0){
		if(array1[filcam][colcam]=="nada" || (array1[filcam][colcam].charAt(4)==letra1 && array1[filcam][colcam]!="rey_"+letra1)){
			array1[filcam][colcam]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//vertical abajo derecha
	filcam = fil+1;
	colcam=col+1;
	if(filcam<9 && colcam<9){
		if(array1[filcam][colcam]=="nada" || (array1[filcam][colcam].charAt(4)==letra1 && array1[filcam][colcam]!="rey_"+letra1)){
			array1[filcam][colcam]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );

	//comprobador de comida de la ficha que hace jaque
	var comprobadorComi= new Array();
	var ttjaque=true;
	for(var cont1=0;cont1<fichas.length && ttjaque==true;cont1++){
		var filja = parseInt(posiciones[cont1].charAt(0));
		var colja = parseInt(posiciones[cont1].charAt(2));
		var movimientosJaqueadora = mover(filja,colja,fichas[cont1],true);
		for(var cont=0;cont<fichasPosi.length && ttjaque==true;cont++){
			if(fichasPosi[cont].charAt(4)==letraRey){
				var holi = posicionesPosi[cont].length;
				for(var cont13=0;cont13<posicionesPosi[cont].length && ttjaque==true;cont13++){
					var filtemp = parseInt(posicionesPosi[cont][cont13].charAt(0));
					var coltemp = parseInt(posicionesPosi[cont][cont13].charAt(2));
					for(var cont12=0;cont12<movimientosJaqueadora.length && ttjaque==true;cont12++){
						var filtemp1 = parseInt(movimientosJaqueadora[cont12].charAt(0));
						var coltemp1 = parseInt(movimientosJaqueadora[cont12].charAt(2));
						if((filtemp==filtemp1 && coltemp==coltemp1) || (filtemp==filja && coltemp==colja)){
							var filinter = parseInt(posicionesFichasInter[cont].charAt(0));
							var colinter = parseInt(posicionesFichasInter[cont].charAt(2))
							array1[filtemp][coltemp]=fichasPosi[cont];
							array1[filinter][colinter]="nada";
							var tmp = jaqueComp(true,array1);
							
							if(tmp==true){
								ttjaque=true;
							}else{
								ttjaque=false;
							}
							array1.length=0;
							array1= JSON.parse( JSON.stringify( array ) );
						}
					}
				}
			}
		}
	}
	
	var mattt = localStorage.getItem("jaqueMattt");
	if(comp==comp1 && ttjaque==true && mattt=="si"){
		restaurarAzul();
		alert("Jaque Mate");
		localStorage.setItem("jaqueMattt","si");
		localStorage.setItem("jugar","no");
		var tmp=localStorage.getItem("turno");
		var ganador;
		if(tmp=="negras"){
			ganador="blancas";
		}else{
			ganador="negras";
		}
		document.getElementById("turno").innerHTML="Han ganado las fichas "+ganador;
	}



	if(jaqueMate==false){
		localStorage.setItem("jaqueUso","Act");
	}
}


function guardar(){
	localStorage.setItem("guardar","");
	var save = localStorage.getItem("guardar");
	for(var fil=1;fil<9;fil++){
		for(var col=1;col<9;col++){
			if(array[fil][col]!="nada"){
				save=save+array[fil][col];
			}else{
				save=save+"nada_"
			}
		}		
	}
	localStorage.setItem("guardar",save);
}

function cargarSave(){
	var save = localStorage.getItem("guardar");
	var acu=0;
	var temp="";
	var fil=1;
	var col=1;
	for(var cont=1;cont<321;cont++){
		temp=temp+save.charAt(cont-1)
		acu++;		
		if(acu==5 && temp!="nada_"){
			array[fil][col]=temp;
			var ff = temp;
			if(ff.charAt(4)=="b"){
				if(ff=="peonb"){
					var dd = creaFich(7,1,false);
				}
				if(ff=="torrb"){
					var tpp = parseInt(localStorage.getItem("torrb"));
					tpp--;
					localStorage.setItem("torrb",tpp);
					var dd = creaFich(8,1,false);
				}
				if(ff=="cabab"){
					var dd = creaFich(8,2,false);
				}
				if(ff=="alfib"){
					var dd = creaFich(8,3,false);
				}
				if(ff=="reinb"){
					var dd = creaFich(8,4,false);
				}
				if(ff=="rey_b"){
					var tpp = parseInt(localStorage.getItem("rey_b"));
					tpp--;
					localStorage.setItem("rey_b",tpp);
					var dd = creaFich(8,5,false);
				}
				
				
			}else{
				if(ff=="peonn"){
					var dd = creaFich(2,1,false);
				}
				if(ff=="torrn"){
					var tpp = parseInt(localStorage.getItem("torrn"));
					tpp--;
					localStorage.setItem("torrn",tpp);
					var dd = creaFich(1,1,false);
				}
				if(ff=="caban"){
					var dd = creaFich(1,2,false);
				}
				if(ff=="alfin"){
					var dd = creaFich(1,3,false);
				}
				if(ff=="reinn"){
					var dd = creaFich(1,4,false);
				}
				if(ff=="rey_n"){
					var tpp = parseInt(localStorage.getItem("rey_n"));
					tpp--;
					localStorage.setItem("rey_n",tpp);
					var dd = creaFich(1,5,false);
				}
				/*
				var compn = parseInt(localStorage.getItem("colrten"));
				var list=document.getElementById("dddn"+compn);
				var parentDiv = list.parentNode;
				parentDiv.removeChild(list);
				compn--;
				localStorage.setItem("colrten",compn);
				*/
			}
			var modo=localStorage.getItem("modo");
			if(modo=="tocar"){
				dd.addEventListener("click",colotoc,false);
				dd.addEventListener("click",colotoc2,false);
			}else{
				dd.addEventListener("dragstart",arrastrar,false);
			}
			dd.setAttribute("id","d"+fil+""+col);
			document.getElementById("c"+fil+""+col).appendChild(dd);
		}else{
			array[fil][col]="nada"
		}
	

		if(acu==5){
			if(col==8){
				col=0;
				fil++;
			}
			col++;
			acu=0;
			temp="";
		}		
	}
	var fichListaB=localStorage.getItem("guardarColB");
	var fichListaN=localStorage.getItem("guardarColN");
	for(var cont1=0;cont1<2;cont1++){
		var letra1;
		var letra;
		if(cont1==0){
			letra1="bla";
			letra="bl";
		}else{
			letra1="neg";
			letra="n";
			fichListaB=fichListaN;
		}
		if(fichListaB!=""){
			var temp="";
			var acu=0;
			var pos=0;
			for(var cont=0;cont<fichListaB.length;cont++){
				temp=temp+fichListaB.charAt(cont);
				acu++;

				if(acu==5){
					pos++;
					var ff = temp;
					if(ff.charAt(4)=="b"){
						if(ff=="peonb"){
							var dd = creaFich(7,1,false);
						}
						if(ff=="torrb"){
							var dd = creaFich(8,1,false);
						}
						if(ff=="cabab"){
							var dd = creaFich(8,2,false);
						}
						if(ff=="alfib"){
							var dd = creaFich(8,3,false);
						}
						if(ff=="reinb"){
							var dd = creaFich(8,4,false);
						}
						if(ff=="rey_b"){
							var dd = creaFich(8,5,false);
						}
						
						
					}else{
						if(ff=="peonn"){
							var dd = creaFich(2,1,false);
						}
						if(ff=="torrn"){
							var dd = creaFich(1,1,false);
						}
						if(ff=="caban"){
							var dd = creaFich(1,2,false);
						}
						if(ff=="alfin"){
							var dd = creaFich(1,3,false);
						}
						if(ff=="reinn"){
							var dd = creaFich(1,4,false);
						}
						if(ff=="rey_n"){
							var dd = creaFich(1,5,false);
						}
					}

					
					dd.setAttribute("id","ddd"+letra+""+pos);
					if(pos<=8 && letra=="bl"){
						document.getElementById("col"+letra1+"1").appendChild(dd);
					}else{
						if(letra=="bl"){
							document.getElementById("col"+letra1).appendChild(dd);
						}
					}
					if(pos<=8 && letra=="n"){
						document.getElementById("col"+letra1).appendChild(dd);
					}else{
						if(letra=="n"){
							document.getElementById("col"+letra1+"1").appendChild(dd);
						}
					}


					if(acu==5){
						acu=0;
						temp="";
					}
				}
			}
		}
	}
	var modo=localStorage.getItem("modo");
	if(modo=="tocar"){
		tocar(true);
	}else{
		arrast(true);
	}
	turnos();
}


function compAhogado(){
	var turn = localStorage.getItem("turno");
	var letra=turn.charAt(0);
	var letra1;
	if(turn=="blancas"){
		letra1="n";
	}else{
		letra1="b";
	}

	var array1= JSON.parse( JSON.stringify( array ) );
	var rey = "rey_"+letra1;
	var x;
	var y;
	var fil;
	var col;
	var comp=0;
	var comp1=8;
	var salir=false;

	for(fil=1;fil<9 && salir==false;fil++){
		for(col=1;col<9 && salir==false;col++){
			if(array[fil][col]==rey){
				salir=true;
				x= fil;
				y=col;
			}
		}
	}
	fil=x;
	col=y;

	//mover el rey 
	//vertica arriba
	var filcam = fil-1;
	if(filcam>0){
		if(array1[filcam][col]=="nada" || (array1[filcam][col].charAt(4)==letra1 && array1[filcam][col]!="rey_"+letra1)){
			array1[filcam][col]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//vertical arriba izquierda
	filcam = fil-1;
	var colcam=col-1;
	if(filcam>0 && colcam>0){
		if(array1[filcam][colcam]=="nada" || (array1[filcam][colcam].charAt(4)==letra1 && array1[filcam][colcam]!="rey_"+letra1)){
			array1[filcam][colcam]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//vertical arriba derecha
	filcam = fil-1;
	colcam=col+1;
	if(filcam>0 && colcam<9){
		if(array1[filcam][colcam]=="nada" || (array1[filcam][colcam].charAt(4)==letra1 && array1[filcam][colcam]!="rey_"+letra1)){
			array1[filcam][colcam]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//horizontal izquierda
	colcam=col-1;
	if(colcam>0){
		if(array1[fil][colcam]=="nada" || (array1[fil][colcam].charAt(4)==letra1 && array1[fil][colcam]!="rey_"+letra1)){
			array1[fil][colcam]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//Horizontal derecha
	colcam=col+1;
	if(colcam<9){
		if(array1[fil][colcam]=="nada" || (array1[fil][colcam].charAt(4)==letra1 && array1[fil][colcam]!="rey_"+letra1)){
			array1[fil][colcam]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//Vertical abajo
	filcam = fil+1;
	if(filcam<9){
		if(array1[filcam][col]=="nada" || (array1[filcam][col].charAt(4)==letra1 && array1[filcam][col]!="rey_"+letra1)){
			array1[filcam][col]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//vertical abajo izquierda
	filcam = fil+1;
	colcam=col-1;
	if(filcam<9 && colcam>0){
		if(array1[filcam][colcam]=="nada" || (array1[filcam][colcam].charAt(4)==letra1 && array1[filcam][colcam]!="rey_"+letra1)){
			array1[filcam][colcam]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	//vertical abajo derecha
	filcam = fil+1;
	colcam=col+1;
	if(filcam<9 && colcam<9){
		if(array1[filcam][colcam]=="nada" || (array1[filcam][colcam].charAt(4)==letra1 && array1[filcam][colcam]!="rey_"+letra1)){
			array1[filcam][colcam]=array[fil][col];
			array1[fil][col]="nada";
			var tmp = jaqueComp(true,array1);
			if(tmp==true){
				comp++;
			}
		}else{
			comp1--;
		}
	}else{
		comp1--;
	}
	array1.length=0;
	array1= JSON.parse( JSON.stringify( array ) );
	if(comp1==comp){
		alert("Tablas");
		localStorage.setItem("jugar","no");
	}
}

function compTablas(){
	var cont = parseInt(localStorage.getItem("contTablas"));
	if(cont==50){
		restaurarAzul();
		alert("Tablas");
		localStorage.setItem("jaqueMattt","si");
		localStorage.setItem("jugar","no");
	}

}



