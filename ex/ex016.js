let num  = [4,5,6,3,1]
num[3] = 'Nayara'
num.push('MAOW')
num.length
num.sort()
num.indexOf(4)

/*for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}*/

for(let pos in num){
    console.log(`a posição ${pos} tem os valores ${num[pos]}`)
}
