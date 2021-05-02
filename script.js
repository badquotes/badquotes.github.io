randomAvatar()

var phrases = [
								"que bad", 
								"uuúhf que bad", 
								"abstrai meu pau no seu cu", 
								"é memo?", 
								"eu só queria ser feliz", 
								"tô igual o moisés tá ligado?", 
								"tô com um caibro tão tão inacreditável enfiado no rabo", 
								"na minha opinião de merda", 
								"fullstack é o caralho",
								"júst that",
								"menos converseiro e mais trampo",
								"ai ai",
								"atchiiiiiiiiiiiiiiiiiiim",
								"bando de moises",
								"rio de janeiro",
								"p j",
								"eu falo muita merda",
								"hoje eu tô numa bad",
								"tóp",
								"tá ligado?",
								"um truta meu",
								"maluuuuco",
								"bora tomar um café lá",
								"não sou back end, tá ligado?",
								"isso que dá back end fazer front end"
							];

function getRandomPhrase(){
	return phrases[Math.floor(Math.random() * phrases.length)];
}

function touchWill(){
	var quote = getRandomPhrase() 
  	randomAvatar()
	refreshQuote(quote) 
  	responsiveVoice.speak(quote, 'Brazilian Portuguese Female', {pitch: .7});
}

function randomAvatar() {
	var img = document.getElementById('avatar');
	var num = Math.floor(Math.random() * 6 + 1);
	img.src = 'img/avatar/' + num + '.png';
	img.alt = img.src;
}

function refreshQuote(quote){ 
	document.getElementById('quote').innerHTML = '"' + quote + '"'; 
	document.getElementById('quote').style.fontStyle = "italic"; 
}