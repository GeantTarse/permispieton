#pragma strict

function Start () {

}

function OnColliderEnter (col : Collision) {

if(col.gameObject.tag == "Player"){

Perdu();

}

}

function Perdu(){
yield WaitForSeconds(1.5f)

Application.LoadLevel("perdusvoiture");

}