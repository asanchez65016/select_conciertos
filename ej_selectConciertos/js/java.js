var opciones_conciertos=[{nombre:"AC/DC", valor:"acdc", precio:100},
{nombre:"Barón Rojo", valor:"baron", precio:80},
{nombre:"Iron Butterfly", valor:"iron", precio:120}
]

function Creardesplegable(){
    var obj_select=document.createElement("select");
    obj_select.addEventListener("change", cambiarConcierto);
    obj_select.id="opciones_concierto";

    for (var i=0; i<opciones_conciertos.length; i++){
        var obj_option=document.createElement("option");
        obj_option.innerText=opciones_conciertos[i].nombre;
        obj_option.value=opciones_conciertos[i].valor;
        obj_select.appendChild(obj_option);
    }
    document.getElementById("select").appendChild(obj_select);
}

function cambiarConcierto(){
    var obj_parrafo=document.createElement("p");
    obj_parrafo.id="precio";
    var concierto=document.getElementById("opciones_concierto").value;
    for(i=0; i<opciones_conciertos.length; i++){
        if(concierto==opciones_conciertos[i].valor){
            var nombre=opciones_conciertos[i].nombre;
            var precio=opciones_conciertos[i].precio;
            alert("El concierto de "+nombre+" cuesta: "+precio+"€");
        }
    }


}