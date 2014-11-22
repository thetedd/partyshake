#pragma strict
//
////public var audioL : AudioListener;
//public var cat : GameObject;
//public var happyMeow : AudioSource;
//public var sadMeow : AudioSource;
//public var song : AudioSource;
//
//var n_NumSamples : int = 1024;
//var m_SamplesL : float[];
//var m_SamplesR : float[];
//
//var scale : float = 1;
//
//var sumL : float;
//var sumR : float;
//
//var rms : float;
//
//var volume:float = 30;
//
////@script RequireComponent(AudioListener)
//function Start () {
//	song.Play();
//}
//
//function Update () {
//	audio.GetOutputData(m_SamplesL, 0);
////	audio.getOutputData(m_SamplesR, 1);
//	
//	for (var i = 0; i < n_NumSamples; i++) {
//		sumL = m_SamplesL[i]*m_SamplesL[i];
//		sumR = m_SamplesR[i]*m_SamplesR[i];
//	}
//	rms = Mathf.Sqrt((sumL+sumR)/n_NumSamples);
//	scale = Mathf.Clamp01(rms*volume);
//	
//	cat.transform.localScale.x = cat.transform.localScale.x*scale;
//	cat.transform.localScale.y = cat.transform.localScale.y*scale;
//}