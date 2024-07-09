
/* export function calculateAngle(angleOne, angleTwo) { */
export function calculate(array1) { 
    let sumatotal = 0;
    let sum1=array1.reduce((sum1, item1) =>  sum1 + item1, 0);
    let mensaje = "";

    sumatotal = (sum1);
    mensaje = sumatotal;

    if (sumatotal != 0){
        mensaje="There are " + sumatotal + " sheep in total";
    } else{
        mensaje="UPS!!! Wolfs eaten Sheeps";
    }
    
    return mensaje;
}