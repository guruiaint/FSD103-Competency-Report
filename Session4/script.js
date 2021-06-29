//character one
let characterOneName="Masterchief";
let characterOnePoints=100;

let characterTwoName="Samus";
let characterTwoPoints=100;

function displayCharacter(){
    document.getElementById("info-c2").innerHTML=` <p><b>Name:</b> ${characterTwoName}</p>
                                                <p><b>Points:</b> ${characterTwoPoints}</p>`;
}

displayCharacter();

function attack(){
    document.getElementById("console").innerHTML=`<p>Firing ... </p>`;
    //discount points from char
    var newPoints=characterTwoPoints-18;
    //conditional
    if (newPoints<=0){
        document.getElementById("console").innerHTML=`<p>G A M E  O V E R</p>`;
        document.getElementById("btn-attack2").style.display="none";
    }else
    //update variable
    characterTwoPoints=newPoints;
    
    //update display
    
    displayCharacter();
}

//character two

function displayCharacter2(){
    document.getElementById("info-c1").innerHTML=` <p><b>Name:</b> ${characterOneName}</p>
                                                <p><b>Points:</b> ${characterOnePoints}</p>`;
}

displayCharacter2();

function attack2(){
    document.getElementById("console").innerHTML=`<p>BWWWOOOOOOSSSSHHHH ... </p>`;
    //discount points from char
    var characterOneNewPoints=characterOnePoints-18;
    //conditional
    if (characterOneNewPoints<=0){
        document.getElementById("console").innerHTML=`<p>G A M E  O V E R</p>`;
        document.getElementById("btn-attack").style.display="none";
    }else
    //update variable
    characterOnePoints=characterOneNewPoints;
    //update display
    
    displayCharacter2();
}