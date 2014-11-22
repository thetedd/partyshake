#pragma strict

var show : GUIText;

@script RequireComponent(AudioSource)
function Start () {
	audio.Play();
}

function Update () {
    var spectrum : float[] = audio.GetSpectrumData (1024, 0, FFTWindow.BlackmanHarris);
    for (var i = 1; i < 1023; i++) {
    	show.text = spectrum[0].ToString();

	}
}