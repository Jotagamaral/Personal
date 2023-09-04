async function clicar() {

    fetch('pasta/piadas.json')
    .then(resposta => resposta.json())
    .then(piadas => {
        let idx = Math.floor((Math.random() * 10))
        let piada = piadas[idx]
        
        document.getElementById('piada').innerHTML = piada.piada
        document.getElementById('resposta').innerHTML = piada.resposta
    })
   
}






