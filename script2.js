
valeur = ["nomUI","nom","prenom","adr","mdpI"];
valeur2 = ["nomUC","mdpC"];


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
	form = document.getElementById('titre');
	titre.after(erreur);
}

function connexion(){
	
	var bool = true;
	
	for(var i=0;i<2;i++){
		if(document.getElementById(valeur2[i]).value==""){
			bool=false;
			alerte("x","Atention : ","toutes les cases doivent-être remplies. Veuillez réessayer s'il vous plaît.")
			i=2
		}
	 }
	 if(bool){
		 /* Merci de bien vouloir compléter le chemin */
		 document.location.href="file:///home/mon chemin vers l'archive/11704898_BOUIFLANE%20Maryam_ANGE%20NIRINA%20Michaela_11716941/index2.html"
		 var profil=document.getElementById("monprofil");
		 profil.textContent=valeur2[0];
	}
}

function inscription(){
	
	var bool = true;
	
	for(var i=0;i<5;i++){
		if(document.getElementById(valeur[i]).value==""){
			bool=false;
			alerte("x","Atention : ","toutes les cases doivent-être remplies. Veuillez réessayer s'il vous plaît.")
			i=5
		}
	 }
	var nomuser=document.getElementById(valeur[0]).value;
	 if(bool){
		 /* Merci de bien vouloir compléter le chemin */
		 document.location.href="file:///home/mon chemin vers l'archive/11704898_BOUIFLANE%20Maryam_ANGE%20NIRINA%20Michaela_11716941/index2.html"
	 }
}


