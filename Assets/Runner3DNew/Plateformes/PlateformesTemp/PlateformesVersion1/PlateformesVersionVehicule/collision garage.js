#pragma strict

function Start () {

}

function OnColliderEnter (col : Collision) {

if(col.gameObject.tag == "Player"){

Debug.Log("perdu");
Perdu();

}

}

function Perdu(){
yield WaitForSeconds(1.5f);

Application.LoadLevel("perdusvoiture");

}