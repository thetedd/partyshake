#pragma strict

var playButton : GameObject;
function Start () {

}

function Update () {

}

@script RequireComponent(AudioSource)
function OnMouseDown() {
	Debug.Log("SKJFKLSDJ");
	Application.LoadLevel("main");
	audio.Play();
}