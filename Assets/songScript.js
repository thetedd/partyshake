#pragma strict

var t : GUIText;
var sum : int;
var oldSum : int;

@script RequireComponent(AudioSource)
function Start () {
	audio.Play();
}

function Update () {
    var spectrum : float[] = audio.GetSpectrumData (64, 0, FFTWindow.BlackmanHarris);
   	sum = 0;

    for (var i = 1; i < 64; i++) {
    	sum = sum + spectrum[i]*(100);
	}
	
	if (sum > 3.0*oldSum){
		t.text = "HELLO";
	}else {
		t.text = "";
	}
	
	oldSum = sum;
}