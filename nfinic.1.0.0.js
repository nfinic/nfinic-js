window.addEventListener("message", receiveMessage, false);
var usercallback = null;

function initNfinicAuth(appId,props,callback){
	var imgcontent = "data:image/png;base64,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";
	var btn = document.getElementById("btn-connexion-nfinic");
	usercallback = callback;
	if(btn){
		if(appId){
			if(btn.tagName == "BUTTON"){
				var img="",img2="",font="",fontText="";
				if(props){
					if(props.icon && props.icon === true){
						img = "<img style='width:25px;' src='"+imgcontent+"'/>";img2="| ";
					}
					if(props.font && props.font === true){
						font = "class='nfinic-font'";
						if(props.icon && props.icon === true) fontText="style='position:relative;top:-7px;'";
					}
				}
				btn.innerHTML = img +"<span "+font+fontText+" >"+img2+" Connexion avec nfinic</span>";
			}else console.err("Votre bouton nfinic n'est pas un vrai bouton");
			
			btn.onclick = function(){
				getRefreshToken(appId,callback);
			};
		}else{
			console.error("Vous devez entrer l'ID de votre application en appelant initNfinicAuth(appID);");
		}
	}else{
		console.error("Vous devez avoir un bouton ayant pour ID HTML btn-connexion-nfinic");
	}
	
}

function getRefreshToken(appId,callback){
	var myWindow = window.open("about:blank");
	try{
		var xmlhttp = new XMLHttpRequest();
		var verifurl = "https://nf-nc.com/identify/";
		var authapiurl = "https://nf-nc.com/login/";
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var data = this.responseText;
				data = JSON.parse(data);
				myWindow.location.href = authapiurl + "?nn="+appId+"&k="+data.tk, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=10,left=20,width=400,height=600";
			}
		};
		xmlhttp.open("GET", verifurl + "?tk="+appId, true);
		xmlhttp.onerror = function(e){
			myWindow.close();
			if(typeof callback == "function") callback({etat:-2,cause:e});
		};
		xmlhttp.send();
	}catch(ex){
		myWindow.close();
		if(typeof callback == "function") callback({etat:-2,cause:ex});
	}
}

function receiveMessage(event) {
	var data = JSON.parse(atob(event.data));
	if(typeof usercallback == "function") usercallback({etat:1,resultat:data});
}