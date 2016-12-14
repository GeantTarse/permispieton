#pragma strict

function Start () {

}

function OnCollisionEnter (col : Collision) {

if(col.gameObject.tag == "Player"){

Debug.Log("perdu");
Perdu();

}

}

function Perdu(){
yield WaitForSeconds(1.5f);

Application.LoadLevel("perduvoiture");

}