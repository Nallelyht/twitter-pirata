// variable para el contador de clicks
var contador = 0;
//variable para guardar el id de la textarea
var tweet = document.getElementById("textarea");
//variable para guardar el id de la entrada llamada autor
var autor = document.getElementById("autor");

//eventos para el contador de clicks, cuando se da click en la textarea o el input no cuenta el click
document.addEventListener("click", contadorClick);
tweet.addEventListener("click", sinClick);
autor.addEventListener("click", sinClick);

/*funcion para mostrar los tweets, se declara la variable ponerTweet para guardar el id donde se va a enviar los nuevos tweets, las variables nTweet, linea,salto crean nuevos elementos, div, hr y br respectivamente, en el div se guarda el valor de la text area y el autor, todo se agrega al nodo ponerTweet*/
function mostrarTweet(){
    
    var ponerTweet = document.getElementById("nuevoTweet");
    var nTweet = document.createElement("div");
    var linea = document.createElement("hr");
    var salto = document.createElement("br");
    
    nTweet.innerHTML = tweet.value +"<br> Por "+ autor.value;

    ponerTweet.appendChild(nTweet);
    ponerTweet.appendChild(linea);
    }
    
/*funcion para contar las letras, se declara la valiable tweet que va a guardar el valor de la text area, se envia al id contador la cantidad de letras que entrar en la textarea, se crea una condicional si los caracteres pasan de 140*/
function contadorLetras(){
    var tweet = document.getElementById("textarea").value
    
    document.getElementById("contador").innerHTML="Tienes " + tweet.length+" de 140.";
    if (tweet.length >=140){
        alert("No mas caracteres");
    }
}

/*funcion contador de clicks se incrementa el contador cadavez que se da click y se manda al contadorClicks */
function contadorClick(){
    contador++;
    document.getElementById("contadorClicks").innerHTML=contador;
}
/*funcion que detiene el evento contador de click */
function sinClick(){
    event.stopPropagation();
}
/*funcion para limpiar la textarea y el input, tambien reinicia el contador de letras */
function borrar(){
    document.getElementById("textarea").value = "";
    document.getElementById('autor').value="";
    contadorLetras();
}