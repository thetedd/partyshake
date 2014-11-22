#pragma strict

var zAcc : Vector3;

function Start () {

}

function Update () {

}

function OnGUI () {

    GUI.Box (Rect (0,0,200,200), zAcc.ToString());
    
    GUI.Box (Rect (200,200,200,200), "ClassificationString here");
    
 }