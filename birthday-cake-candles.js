function createAr(size){
    let arr = [];
    for(let i=0; i<size; i++){
        arr.push(parseInt(Math.random() * (111 - 1) + 1));
    }
    return arr;
}


function maxDuplicated(ar) {
    let max = Math.max(...ar);
    return ar.filter((v) => v === max).length;
}

console.log(maxDuplicated(createAr(99999)));