#pragma strict

//var t : GUIText;
var sum : int;
var oldSum : int;

var downThreshold : float = -1f;
var upThreshold : float = -.2f;
var zAcc : Vector3;
var down : boolean = false;
var reset : boolean = false;
var statusString : String = "UNTAPPED";
var score : int;

var totSum : float;
var totTimes : float;
var avgSum : float;

var hitSensitivity : float = 1.2;
var missSensitivity : float = .9;

var alpha : float = .1;
var first : boolean = true;
var scoreUp : int = 5;
var scoreDown : int = 1;

var happyMeow : AudioSource;
var sadMeow : AudioSource;

var cat : GameObject;

var scaleFactor : float;

var scoreText : GUIText; 

var oldAverage : float = 0;
@script RequireComponent(AudioSource)
function Start () {
	audio.Play();
}

function Update () {
	var zee : float = Input.acceleration.z;
	
    var spectrum : float[] = audio.GetSpectrumData (64, 0, FFTWindow.BlackmanHarris);
    
    var samples = audio.GetOutputData(256, 0);
    var average = 0;
    for (var sample in samples) {
    	average += sample;
    }
    average /= samples.Length;
    
    
   	sum = 0;

    for (var i = 1; i < 64; i++) {
    	sum = sum + spectrum[i]*(100);
	}
//	
//	if (sum <1 && sum<14){
//		cat.transform.localScale = Vector3(0.8f, 0.8f, 0.8f);
//	}
//	
//	if (sum < 15 && sum < 50) {
//		cat.transform.localScale = Vector3(1.5f, 1.5f, 1.5f);
//	}
//	
//	if ( sum <51 && sum < 150) {
//		cat.transform.localScale = Vector3(2.0f, 2.0f, 2.0f);
//	}
//	
	if (zee <= downThreshold) {
		if (average > 3.0*oldAverage) {
			playMeow(true);
//			cat.SetActive(true);
			
		}
		else {
			playMeow(false);
			score -= scoreDown;
//			cat.SetActive(false);
		}
	}
	
//	if (sum > 3.0*oldSum){
//		t.text = "HELLO";
//	}else {
//		t.text = "";
//	}
	
	oldAverage = average;
	
	if (!audio.isPlaying){
		PlayerPrefs.SetInt("Score", score);
		Debug.Log("Put in score" + score);
		Application.LoadLevel("end");
	}
//	if (first) {
//		avgSum = sum;
//		first = false;
//	}
//	avgSum = alpha * avgSum + (1 - alpha) * sum;
	//totSum += oldSum;
	//totTimes += 1;
	//avgSum = totSum / totTimes;
	
//	scaleFactor = sum/100;
//	Debug.Log(scaleFactor);
//	if (scaleFactor != 0){
////		cat.transform.localScale *= Vector3(scaleFactor,scaleFactor,scaleFactor);
//		cat.transform.localScale = new Vector3(scaleFactor*(cat.transform.localScale.x), scaleFactor*(cat.transform.localScale.y), scaleFactor*(cat.transform.lossyScale.z));
//	}
//	if (avgSum > hitSensitivity*oldSum) {
//			t.text = "HELLO";
//			cat.SetActive(true);
//		} else {
//			t.text = "";
//			cat.SetActive(false);
//	}
	
//	if (avgSum > hitSensitivity*oldSum){
//		t.text = "HELLO";
//		if (zee <= downThreshold) {
//			score += scoreUp;
//		}
//	}else {
//		t.text = "";
//		score -= scoreDown;
//	}
	/*
	if (avgSum < missSensitivity*oldSum){
		t.text = "WRONG";
		if (zee <= downThreshold) {
			score -= scoreDown;
		}
	}
	*/
	//Ted stuff copypaste
	
	zAcc.z = zee;
	
	/*You had previously reached down, now you're back up
	 *So now 
	*/
	/*
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
	*/
	
}
//Moar ted stuff copypaste
function OnGUI () {

    //GUI.Box (Rect (0,0,200,200), zAcc.ToString());
    
    //GUI.Box (Rect (0,200,200,50), statusString);
    
//    GUI.Box (Rect (0,250,200,50), score.ToString());
    
    scoreText.guiText.text = "Score:" + score.ToString();
    	
 }

function playMeow(bool : boolean){
	if (bool == true){
		happyMeow.Play();
	}
	else {
		sadMeow.Play();
	}
}

//var t : GUIText;
//var sum : int;
//var oldSum : int;
//
//@script RequireComponent(AudioSource)
//function Start () {
//	audio.Play();
//}
//
//function Update () {
//    var spectrum : float[] = audio.GetSpectrumData (64, 0, FFTWindow.BlackmanHarris);
//   	sum = 0;
//
//    for (var i = 1; i < 64; i++) {
//    	sum = sum + spectrum[i]*(100);
//	}
//	
//	if (sum > 3.0*oldSum){
//		t.text = "HELLO";
//	}else {
//		t.text = "";
//	}
//	
//	oldSum = sum;
//}