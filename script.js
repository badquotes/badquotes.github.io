var synth = window.speechSynthesis;

function getRandomWillPhrase(){
	return "que bad";
}

function touchWill(){
  var utterThis = new SpeechSynthesisUtterance(getRandomWillPhrase());
  utterThis.voice = synth.getVoices()[16]; //pt-br Google
  utterThis.pitch = 0;
  utterThis.rate = 0.8;
  synth.speak(utterThis);
}