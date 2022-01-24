function encriptar (texto){

    var textoAEncriptar = texto.value;
    
    textoAEncriptar = textoAEncriptar.toLowerCase();
      
    textoAEncriptar = textoAEncriptar.replaceAll("e", "enter");    
    textoAEncriptar = textoAEncriptar.replaceAll("i", "imes");    
    textoAEncriptar = textoAEncriptar.replaceAll("a", "ai");    
    textoAEncriptar = textoAEncriptar.replaceAll("o", "ober");    
    textoAEncriptar = textoAEncriptar.replaceAll("u", "ufar");
    
    document.querySelector("#msg").value = textoAEncriptar;  
};

function desEncriptar (texto){

    var textoADesencriptar = texto.value;

    textoADesencriptar = textoADesencriptar.toLowerCase();

    textoADesencriptar = textoADesencriptar.replaceAll("enter", "e");    
    textoADesencriptar = textoADesencriptar.replaceAll("imes", "i");    
    textoADesencriptar = textoADesencriptar.replaceAll("ai", "a");    
    textoADesencriptar = textoADesencriptar.replaceAll("ober", "o");    
    textoADesencriptar = textoADesencriptar.replaceAll("ufar", "u");
    
    document.querySelector("#msg").value = textoADesencriptar;   
};
    
function copiar (input){

    input.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");

};