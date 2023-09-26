function Sikerult(){
    const gomb=document.getElementById("gomb");
    gomb.innerHTML="Sikerült";
}

function Eger(){
    const gomb=document.getElementById("gomb");
    gomb.innerHTML="Húzd ide az egeret";

}

function ZoldFocus(mezo){
    mezo.style.color="green";
    
    
    
}

function Normal(input){
    input.style.color="";
  
    

}

function Bekezdes(){
    const bekezdes=document.getElementById("cim");
    bekezdes.innerHTML="Betöltődött";
}

function Katint(){
    const cim = document.getElementById("cim");
    // cim.setAttribute("p","Rákattintott");
    cim.innerHTML="Rákattintott";
}

function Tartalom(){
    const szoveg=document.getElementById("szoveg");
    const ertek=szoveg.value;
    uzenet.innerHTML=(ertek);

}

function Vissza(){
    const uzenet=document.getElementById("uzenet");
    const szoveg=document.getElementById("szoveg");
    uzenet.innerHTML="Robot cica";
    szoveg.innerHTML=szoveg.value="";
}

