#pragma strict

var guiCountDown : GUIText;
var countMax : int; 
private var countDown : int;

function Start () {
	guiCountDown.enabled = true;
//	gameStart();
}

function Update () {

}

//function GameStart(){
//	var song = gameObject.Find("Song");
//	
//	for (countDown = countMax; countDown > 0; countDown --){
//		guiCountDown.text = countDown.ToString();
//		yield WaitForSeconds(1);
//	}
//	
//	guiCountDown.enabled = false;
//}

