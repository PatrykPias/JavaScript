window.onload = iniciar;

function iniciar(){
    document.f1.boton.onclick = comprobar;
}
function comprobar(){
    let cod = document.f1.codigo.value.toUpperCase();

    
    let mensaje = all(cod);
    document.f1.mensaje.value = mensaje;


}
function all(cod) {
    debugger
    let codarr = Array.from(cod);
    //comprobamos longitud
    if (codarr.length < 20 || codarr.length > 26) {
        mensaje = "Longitud incorrecta";
    }
    //comprobamos si empieza desde 3 hasta 6 digitos 
    else {
        let ind=0;

        while (ind < codarr.length && codarr[ind]>="0" && codarr[ind]<="9"){
            ind+=1;
        }
        if (ind<3 || ind > 6){
            mensaje = "Valor incorrecto";
        } else {
            //comprobamos si despues de los digitos contiene las siguientes siglas 
            let valor=codarr[ind]+codarr[ind+1];
            ind+=2;
            if (valor != "AN" && valor != "ES" && valor != "DL" && valor != "US") {
                mensaje = "Valor incorrecto";
            }
            else {
                  //comprobamos si despues de las siglas contiene las siguientes caracteres
                let carac = codarr[ind];
                ind+=1;
                if (carac != "#" && carac != "@" && carac != "$" && carac != "&") {
                    mensaje = "Valor incorrecto";
                }
                else {
                    //combrobamos la longitud despues de los caracteres
                    let long = ind;
                    while (ind < codarr.length && codarr[ind]>="A" && codarr[ind]<="Z"){
                        ind+=1;
                    }
                    let longi = (ind-long);
                    if (longi<4 || longi > 7){
                        mensaje = "Valor incorrecto";
                    } else {
                        let long1 = ind;
                    while (ind < codarr.length && codarr[ind]>="0" && codarr[ind]<="9"){
                        ind+=1;
                    }
                    let longi1 = (ind-long1);
                    if (longi1!=2){
                        mensaje = "Valor incorrecto";
                    } else {
                        //combrobamos si tienen las siguienets letras
                        let long2 = ind;
                    while (ind < codarr.length && codarr[ind]>="A" && codarr[ind]<="Z"){
                        ind+=1;
                    }
                    let longi2 = (ind-long2);
                    alert(longi2);
                    if (longi2 != 3){
                        mensaje = "Valor incorrecto";
                    } else {
                        //comprobamos el final si tiene letras ,digitos y caracteres  
                            let Indice = 0;
                            let correcto = true;
                            let masAdicionales = "%/?!";
                                while(correcto && ind < cod.length){
                                if((cod.charAt(ind) <"A" || cod.charAt(ind) > "Z") && (cod.charAt(ind) < "0" || cod.charAt(ind) > "9") && !masAdicionales.includes(cod.charAt(ind))){
                                correcto = false;
                                
                        }   
                                Indice+=1;
                                ind+=1;
                    if (correcto == false) {
                        mensaje = "caracter no indentificado";
                    }
                    else{
                        if (Indice != 5) {
                            mensaje = "letras menos o mas de 5";
                        }
                        else {
                            mensaje = "Validacion correcta";
                        }
                    }
                    }

                    }

                }
            }
        }
    }
        }
            
    }


    return mensaje;
    }

