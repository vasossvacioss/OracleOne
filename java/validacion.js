function validarTexto(texto){
    var reglaValidacion = new RegExp("[áéíóúÁÉÍÓÚ]","g");
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
            alert("No se pueden ingresar letras con acentos");
            return false;
        }
    }

}