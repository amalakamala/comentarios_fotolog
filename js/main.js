function init(){ //Function inicializadora
	var button = document.getElementById("boton");
	button.addEventListener("click", losItem);
	guardar();

}

function losItem(){
	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;
	localStorage.setItem(clave,valor);
	guardar();
	document.getElementById("clave").value = "";
	document.getElementById("valor").value = "";
}

function guardar(){
	var contenedor = document.getElementById("ale"); //FUERA DEL FOR Y ANTES
	contenedor.innerHTML = "";

	for(var i = 0; i < localStorage.length; i++){
		var kei = localStorage.key(i); // devuelve el numero 
		var elValor = localStorage.getItem(kei); //devuelve el valor

		var caja = document.createElement("div"); 
		caja.classList.add("lacaja");

		var titulo = document.createElement("h4");
		var tituloV = document.createTextNode(kei);
		titulo.classList.add("eltitulo");
		titulo.appendChild(tituloV);

		var textoCaja = document.createElement("p"); 
		var texto = document.createTextNode(elValor);
		textoCaja.classList.add("eltexto");
		textoCaja.appendChild(texto);

		/*
		Boton por caja para borrar post uno por uno
		var borrar = document.createElement("a");
		borrar.classList.add("boton-borrar");
		var textborrar = document.createElement("i");
		textborrar.setAttribute("class","fa fa-trash");
		textborrar.setAttribute("aria-hidden","true");
		borrar.appendChild(textborrar);

		*/

		caja.appendChild(titulo); 
    	caja.appendChild(textoCaja); 
    	//caja.appendChild(borrar);  
    	contenedor.appendChild(caja); 

    	/*
    	borrar.addEventListener("click", function(){
			localStorage.clear(caja);
		})
		*/
	}
}

init();


var borrarTodo = document.getElementById("boton-borrar");	
borrarTodo.addEventListener("click",borrar)


function borrar(){

	window.localStorage.clear(); 
	guardar();
}





