var synth = window.speechSynthesis;

var phrases = ["que bad", "uuúhf que bad", "abstrai meu pau no seu cu", "é memo?", "eu só queria ser feliz", "tô igual o moisés tá ligado?", "tô com um caibro tão tão inacreditável enfiado no rabo", "na minha opinião de merda", "fullstack é o caralho"];

function getRandomPhrase(){
	return phrases[Math.floor(Math.random() * phrases.length)];
}

function touchWill(){
  var phrase = new SpeechSynthesisUtterance(getRandomPhrase());
  phrase.voice = getCorrectVoice(); //pt-br Google
	phrase.pitch = 0;
	phrase.rate = 1;
  synth.speak(phrase);
}

function getCorrectVoice(){
	var voices = synth.getVoices();
	for (var i = 0; i < voices.length; i++){
		if(voices[i].name === "Google português do Brasil"){
			return voices[i];
		}
	}
}
