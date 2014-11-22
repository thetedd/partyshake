#pragma strict

var downThreshold : float = -1f;
var upThreshold : float = -.2f;
var zAcc : Vector3;
var down : boolean = false;
var reset : boolean = false;
var statusString : String = "UNTAPPED";


function Start () {

}

function Update () {
	var zee : float = Input.acceleration.z;
	zAcc.z = zee;
	
	/*You had previously reached down, now you're back up
	 *So now 
	*/
	if (zee >= upThreshold && down){
		statusString = "TAPPED";
		down = false;
	}
	
	//Reached down, set down flag to true
	if (zee <= downThreshold) {
		down = true;
	}
	
	if (reset) {
		statusString = "UNTAPPED";
		reset = false;
	}
	
}

function OnGUI () {

    GUI.Box (Rect (0,0,200,200), zAcc.ToString());
    
    GUI.Box (Rect (0,200,200,50), statusString);
    
    if (GUI.Button(Rect(0,250,200,50),"Reset")){
    	reset = true;
    }
			
    
 }