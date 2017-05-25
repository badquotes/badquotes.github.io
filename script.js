var synth = window.speechSynthesis;

var phrases = ["que bad", "uuúhf que bad", "abstrai meu pau no seu cu", "é memo?", "eu só queria ser feliz", "moisés, tá ligado?", "hot", "tô com um caibro tão tão inacreditável enfiado no rabo", "na minha opinião de merda"];

function getRandomPhrase(){
	return phrases[Math.floor(Math.random() * phrases.length)];
}

function touchWill(){
  var phrase = new SpeechSynthesisUtterance(getRandomPhrase());
  phrase.voice = synth.getVoices()[16]; //pt-br Google
	phrase.pitch = 0;
	phrase.rate = 0.8;
  synth.speak(phrase);
}