1. Agregar al coleccion de orders campos: 
-starTime
-orderStatus

2. Importar el Star Time

3. Condicional 
if(starTime === 00:00){
    starTime = Date.now ();
    orderStatus = 'Nuevo'

}else {
    starTime // starTime de Firebase
    orderStatus = "Aceptado"
}


-----------------------

if(orderStatus = 'Nuevo'){
    starTime === 00:00

}else if (orderStatus = "Aceptado" ) {
    starTime // starTime de Firebase
    starTime = Date.now (); //capturar la hora que aceptas
    
} else{

}