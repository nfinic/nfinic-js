# nfinic-js
Voici les fichiers Javascript vous permettant d'intégrer nfinic sur vos sites web

Voici un exemple 

```

<!doctype html>
	<html>
		<head>
			<title>Auth 2.0 example</title>
			<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nfinic/nfinic-js/nfinic.1.0.0.min.css"/>
		</head>
		
		<body>
			<p>
				<button id="btn-connexion-nfinic">Connexion avec nfinic</button>
			</p>
			
			<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/nfinic/nfinic-js/nfinic.1.0.0.min.js"></script>
			<script type="text/javascript">
				
				window.onload = function(){
					initNfinicAuth("29C170A05A1CC0BBED406A0962F36AF0",{icon:true,font:true},function(d){
						console.log(d);
						if(d && d.etat){
							if(d.etat == 1){
								alert(JSON.stringify(d.resultat));
							}else{
								console.log("Echec de connexion, cause " + JSON.stringify(d.cause));
							}
						}
					});
				};
			</script>
			
		</body>
	</html>
```

