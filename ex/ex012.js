var idade = 80
if (idade < 16){
    console.log('nao vota')
}else{
    if (idade < 18 || idade > 66){
        console.log('voto opcional')
    }else if (idade > 18){
        console.log('OBRIGATORIO')
    }
}