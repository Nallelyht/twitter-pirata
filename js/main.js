function mostrarTweet(){
    var tweet = document.getElementById("textarea");
    var autor = document.getElementById("autor");
    var ponerTweet = document.getElementById("nuevoTweet");
    var nTweet = document.createElement("div");
    var linea = document.createElement("hr");
    
    nTweet.innerHTML = tweet.value +" Por "+ autor.value;
    ponerTweet.appendChild(nTweet);
    ponerTweet.appendChild(linea);
    }
    
function contadorLetras(){
    var tweet = document.getElementById("textarea").value
    
    document.getElementById("contador").innerHTML="Tienes " + tweet.length+" de 140.";
    if (tweet.length >=140){
        alert("No mas caracteres");
    }
}

function contadorClick (){
    var contador = 0;
    var mostrarC = document.getElementById("contadorClick");
    contador++;
    mostrarC.innerHTML="Contador de clicks: "+ contador;
}