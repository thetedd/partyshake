#pragma strict

var score : GameObject;
function Start () {
	score.guiText.text = getScore().ToString();
}

function getScore(){
	return PlayerPrefs.GetInt("Score");
}

function Update () {

}