#pragma strict

var playButton : GameObject;
function Start () {

}

function Update () {

}

@script RequireComponent(AudioSource)
function OnMouseDown() {
	audio.Play();
	yield WaitForSeconds (1.0);
	Application.LoadLevel("main");
}