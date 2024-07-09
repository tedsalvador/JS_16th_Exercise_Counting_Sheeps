import PromptSync from "prompt-sync";

export function enterNumbers (){
    let anadir_valor = "";
    let salir_validacion;
    let arrayA = [];
    let cantItems = 0;
    const prompt = PromptSync();
    
    salir_validacion = "NOK"; 
    do{
        cantItems = Number(prompt("¿Cantidad de items/valores a Ingresar para la funcion?"));
        if (isNaN(cantItems)) 
            {
            console.error("POR FAVOR NO TEXTO - Ingrese solo numeros, mayor a CERO");
            } else {
                    if ((Number.isInteger(cantItems) == false) || (cantItems <= 0) )
                   {
                     console.info("Ingrese solo numero Entero, mayor a CERO");
                   }else {
                    salir_validacion = "OK";
                   }
                }
    }while(salir_validacion != "OK")  

    for (let index = 1; index <= cantItems; index++) {
        salir_validacion = "NOK";        
        do{     
            anadir_valor = prompt("Ingrese en valor " + index + " (Valores esperados : 0 , 1, true, false) ==> ");
            salir_validacion = "OK";
            if ((anadir_valor == "0")|| (anadir_valor === 0)){
                arrayA.push(0);
               }else if ((anadir_valor == "1")|| (anadir_valor === 1)) {
                      arrayA.push(1);
                     }else if ((anadir_valor.toLowerCase() == "true")) {
                           arrayA.push(true);
                           }else if ((anadir_valor.toLowerCase() == "false")) {
                                 arrayA.push(false);
                                 }else{
                                       console.warn("Unknown Value");
                                       salir_validacion = "NOK";
                                      }        
           }while(salir_validacion != "OK") 
    }
    console.info("Array_A : [" + arrayA + "]");
    return [arrayA];
    }