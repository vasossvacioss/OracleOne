var botonEncriptar = document.querySelector("#btn-encriptar");
var textoIngresado = document.querySelector("#input-texto");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");
var copiarTexto = document.querySelector("#msg");


botonEncriptar.addEventListener("click",function(event){
 
        event.preventDefault();         //impido que actualice
 
        validarTexto(textoIngresado);   //intento validar llamando a la funcion
        encriptar(textoIngresado);      //envio el texto a la funcion para ser encriptado
        textoIngresado.value ="";       //pongo en blanco el cuadro de texto donde se ingresa
});

botonDesencriptar.addEventListener("click",function(event){

        event.preventDefault();         //impido q actualice

        validarTexto(textoIngresado);   //intento validar llamando a la funcion
        desEncriptar(textoIngresado);   //envio el texto a la funcion para desencriptar
        textoIngresado.value ="";       //pongo en blanco el cuadro de texto donde se ingresa
});

botonCopiar.addEventListener("click",function(event){

    event.preventDefault();
    copiar(copiarTexto)
})

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

function validarTexto(texto){
    var reglaValidacion = new RegExp("[°!$%&/()=?¡'¿áéíóú]|[0-9]","g");
    var ingresado = texto.value;

    if (ingresado==""){
        alert("debe ingresar el texto a encriptar");
        return false;
    }
    else{
        if (!reglaValidacion.test(ingresado)){
            return true;
        }
        else{
            alert("No se pueden ingresar letras con acentos, números ni caracteres especiales");
            return false;
        }
    }

}