 function funcionagregarTarea() 
 
 
 
 {


 // obtenemos el valor del campoo de la tarea
let nuevaTareaTexto = document.getElementById(" nuevaTarea").value;

//Validamos que el valor no sea vacio
if (nuevaTareaTexto === "") {
    alert ("Por favor,Escriba una tarea");
    return;
}


// crear elemento en la lista

let nuevaTarea= document.createElement("li");
nuevaTarea.textContent = nuevaTareaTexto + " ";

// crear boton eliminar
let botonEliminar= document.createElement("button");
botonEliminar.textContent ="ELIMINAR"; 
botonEliminar.onclick = function() {nuevaTarea.remove();}


//agregar boton de eliminar al  elemento de la lista
nuevaTarea.appendChild(botonEliminar);

// agregar el elemento a la lista de tareas
document.getElementById("listaTareas").appendChild(nuevaTarea);
 
}





