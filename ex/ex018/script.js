function tabuada(){
       var num = parseInt(document.getElementById('num').value)
       var res = document.getElementById('res')
       var tabuada = ''
       
       for (var c = 1; c <=10; c++)
        tabuada += num+ ' X ' +c+ '=' +
                    num*c+'<br />';
        
    res.innerHTML = tabuada
}