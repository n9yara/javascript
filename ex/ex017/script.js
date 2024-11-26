var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')

function contar(){
    res.innerHTML = ''
    for (var first = Number(inicio.value) ; first <= Number(fim.value); first+=Number(passo.value)){
        res.innerHTML += first + '<span>&#10140;</span>' 
        
    }
    res.innerHTML += '🏁'
}