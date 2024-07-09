# JS_15th_Exercise_Array_Plus_Array
Javascript - Contar Ovejas

# Solucion:
1.- Para sumar los valores de una array podriamos utilizar la funcion javascript
array.reduce((suma, item)=>suma,item,0)
donde suma es la variable donde se va acumular los valores
y la variebla item es el valor de cada item del array, el 
ultimo parametro en el valor inicial del acumulador.

=============================================================================================
Instrucciones: 

Los "true" son ovejas, los "false" son lobos ... Cuantas ovejas hay? La función recibirá una lista de valores booleans.

Ejemplo de función:
function countSheeps(list) { }

Requisitos:- Se deberán testear los siguientes casos de uso:

Input:
1) list = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]
2) list = [ false, false, false ]

Output:
1) There are 17 sheep in total
2) UPS!!! Wolfs eaten Sheeps

Entregable:
- Repositorio de Github