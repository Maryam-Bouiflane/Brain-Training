
valeur = ["nom","type_act","descr","pub_cible","duree","niv","date","info"];
valform=["","","","","","","",""];

function alerte(type,t,msg){
	
	var erreur = document.createElement('div');
	var gras = document.createElement('strong');
	gras.textContent = t;
	var msg1 = document.createTextNode(msg);
	var croi = document.createElement('button');
	croi.textContent = 'X';
	croi.classList.add("close");
	croi.setAttribute("data-dismiss", "alert")
	erreur.classList.add("alert");
	erreur.classList.add("alert-dismissible");
	
	if(type=="w"){
		erreur.classList.add("alert-warning");
	}
	
	if(type=="x"){
		erreur.classList.add("alert-danger");
	}
	
	if(type=="v"){
		erreur.classList.add("alert-success");
	}
	
	erreur.appendChild(gras);
	erreur.appendChild(msg1);
	erreur.appendChild(croi);
	form = document.getElementById('form');
	form.before(erreur);
}

function supprimer(i){
	
	if ( confirm( "Êtes-vous sûr de vouloir supprimer cet exercice?" ) ) {
		var tab = document.getElementById(i);
		var tabl = document.getElementById('table');
		tabl.removeChild(tab);
		alerte('w','Exercice supprimer :','votre exercice a bien été supprimé.');
    } 
}

function fajouter(){
	
	var bool = true;
	
	for(var i=0;i<8;i++){
		if(document.getElementById(valeur[i]).value==""){
			bool=false;
			alerte("x","Atention : ","toutes les cases doivent-être remplies. Veuillez réessayer s'il vous plaît.")
			i=8
		}
	 }
	
	if(bool){
		var tabl = document.getElementById("table");
		var numligne=document.getElementById("table").childElementCount;
		var lign = document.createElement('div');
		lign.classList.add("ligne");
		lign.setAttribute('id',numligne)
		
		for(var i=0;i<8;i++){
			
			var ca = document.createElement('div');
			ca.setAttribute('class',"case");
			ca.setAttribute('id',valeur[i]+numligne)
			ca.textContent = document.getElementById(valeur[i]).value;
			lign.appendChild(ca);
		}
		
		var cab = document.createElement('div');
		cab.setAttribute('class',"case");
		cab.setAttribute('id',"case bouton"+numligne);
		lign.appendChild(cab);
		
		var bouton = document.createElement('button');
		bouton.title="Supprimer";
		bouton.textContent = 'Supprimer';
		bouton.setAttribute('class',"btn btn-danger btn-sm");
		bouton.setAttribute('id',"suppr"+numligne);
		bouton.setAttribute('style',"margin:5px");
		bouton.setAttribute('onclick',"supprimer(".concat(numligne,');'));
		cab.appendChild(bouton);
		
		var img = document.createElement("img");
		img.src= "img/a.png";
		var bouton2 = document.createElement('button');
		bouton2.title="Modifier";
		bouton2.textContent = 'Modifier ';
		bouton2.appendChild(img);
		bouton2.setAttribute('class',"btn btn-secondary btn-sm ");
		bouton2.setAttribute('id',"mod"+numligne);
		bouton2.setAttribute('style',"margin:5px");
		bouton2.setAttribute('onclick',"modifier(".concat(numligne,');'));
		cab.appendChild(bouton2);
		
		tabl.appendChild(lign);
		
		alerte("v","Exercice ajouté ! ","votre exercice a bien été ajouté")
	}
}

function annuler(numligne){
	
	for(var i=0;i<8;i++){
		
		var ca = document.getElementById(valeur[i]+numligne);
		var val = document.getElementById("fomod"+valeur[i]+numligne);
		var cont=val.value;
		ca.removeChild(val);
		ca.textContent=valform[i];
	}
	
	var cab = document.getElementById("case bouton"+numligne);
	
	var bouton3= document.getElementById("annul"+numligne);
	cab.removeChild(bouton3);
	var bouton4= document.getElementById("save"+numligne);
	cab.removeChild(bouton4);
	
	var bouton = document.createElement('button');
	bouton.title="Supprimer";
	bouton.textContent = 'Supprimer';
	bouton.setAttribute('class',"btn btn-danger btn-sm");
	bouton.setAttribute('id',"suppr"+numligne);
	bouton.setAttribute('style',"margin:5px");
	bouton.setAttribute('onclick',"supprimer(".concat(numligne,');'));
	cab.appendChild(bouton);
	
	var img = document.createElement("img");
	img.src= "img/a.png";
	var bouton2 = document.createElement('button');
	bouton2.title="Modifier";
	bouton2.textContent = 'Modifier ';
	bouton2.appendChild(img);
	bouton2.setAttribute('class',"btn btn-secondary btn-sm ");
	bouton2.setAttribute('id',"mod"+numligne);
	bouton2.setAttribute('style',"margin:5px");
	bouton2.setAttribute('onclick',"modifier(".concat(numligne,');'));
	cab.appendChild(bouton2);
}

function sauvegarder(numligne){
	
	for(var i=0;i<8;i++){
		
		var ca = document.getElementById(valeur[i]+numligne);
		var caseform = document.getElementById("fomod"+valeur[i]+numligne).value;
		ca.textContent=caseform;
	}
	
	var cab = document.getElementById("case bouton"+numligne);
	
	var bouton3= document.getElementById("annul"+numligne);
	cab.removeChild(bouton3);
	var bouton4= document.getElementById("save"+numligne);
	cab.removeChild(bouton4);
	
	var bouton = document.createElement('button');
	bouton.title="Supprimer";
	bouton.textContent = 'Supprimer';
	bouton.setAttribute('class',"btn btn-danger btn-sm");
	bouton.setAttribute('id',"suppr"+numligne);
	bouton.setAttribute('style',"margin:5px");
	bouton.setAttribute('onclick',"supprimer(".concat(numligne,');'));
	cab.appendChild(bouton);
	
	var img = document.createElement("img");
	img.src= "img/a.png";
	var bouton2 = document.createElement('button');
	bouton2.title="Modifier";
	bouton2.textContent = 'Modifier ';
	bouton2.appendChild(img);
	bouton2.setAttribute('class',"btn btn-secondary btn-sm ");
	bouton2.setAttribute('id',"mod"+numligne);
	bouton2.setAttribute('style',"margin:5px");
	bouton2.setAttribute('onclick',"modifier(".concat(numligne,');'));
	cab.appendChild(bouton2);
}

function modifier(numligne){
		
	for(var i=0;i<8;i++){
		
		var ca = document.getElementById(valeur[i]+numligne);
		var contenu_case=ca.innerText;
		valform[i]=contenu_case;
		ca.innerHTML="<textarea id='fomod"+valeur[i]+numligne+"' class='bg-dark text-white form-control' > "+contenu_case+" </textarea>";
	}
	
	var cab = document.getElementById("case bouton"+numligne);
	
	var bouton= document.getElementById("suppr"+numligne);
	cab.removeChild(bouton);
	var bouton2= document.getElementById("mod"+numligne);
	cab.removeChild(bouton2);
	
	var bouton3 = document.createElement('button');
	bouton3.title="Annuler";
	bouton3.textContent = 'Annuler';
	bouton3.setAttribute('class',"btn btn-danger btn-sm");
	bouton3.setAttribute('style',"margin:5px");
	bouton3.setAttribute('id',"annul"+numligne);
	bouton3.setAttribute('onclick',"annuler(".concat(numligne,');'));
	cab.appendChild(bouton3);
	
	var bouton4 = document.createElement('button');
	bouton4.title="Sauvegarder";
	bouton4.textContent = 'Sauvegarder';
	bouton4.setAttribute('class',"btn btn-success btn-sm");
	bouton4.setAttribute('id',"save"+numligne);
	bouton4.setAttribute('style',"margin-left:36px");
	bouton4.setAttribute('onclick',"sauvegarder(".concat(numligne,');'));
	bouton4.style.display = "block";
	cab.appendChild(bouton4);
}
