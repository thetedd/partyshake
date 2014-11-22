#pragma strict

var cat : GameObject;
var happyMeow : AudioSource;
var sadMeow : AudioSource;

var downThreshold : float = -1f;
var upThreshold : float = -.2f;
var zAcc : Vector3;
var down : boolean = false;
var reset : boolean = false;

var score : int;

var hitSensitivity : float = 1.2;
var missSensitivity : float = .9;

var m_SamplesL : float[];
var m_SamplesR : float[];
var maxL : float;
var maxR : float;
var sample : float;
var sumL : float;
var sumR : float;
var rms : float;
var dB : float;

var volume : float = 30.0;

@script RequireComponent(AudioSource)
function Start () {
	var scale : Vector3 = cat.transform.localScale;
	audio.Play();
	
}

function Update () {
	audio.GetOutputData(m_SamplesL, 0);
	audio.getOutputData(m_SamplesR, 1);
	maxL = maxR = 0.0f;
	sumL = 0.0f;
	sumR = 0.0f;
	
	for (i = 0; i < n_NumSamples; i++) {
		sumL = m_SamplesL[i]*m_SamplesL[i];
		sumR = m_SamplesR[i]*m_SamplesR[i];
	}
	rms = Mathf.Sqrt((sumL+sumR)/m_NumSamples);
	scale = Mathf.Clamp01(rms*volume);
	
	cat.transform.localScale.x = scaleX;
	cat.transform.localScale.y = scaleY;
	cat.transform.localScale.z = scaleZ;
}