let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnum(n){
if (Number(n) >= 1 && Number(n) <= 100){
    return true
} else {
    return false
}

}   

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isnum(num.value) && !inlista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `valor ${num.value} adicionado`
    lista.appendChild(item)
        
    }else{
        window.alert('ja foi add')
    }
}