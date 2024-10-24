function fakePush(arr, val){
    let temparr = new Array(arr.length + 1);
    for (let i in arr) temparr[i] = arr[i];
    temparr[temparr.length-1] = val;
    return temparr;
}

function fakePop(arr){
    let temparr = new Array(arr.length-1);
    for(let i=0; i < arr.length-1; i++) temparr[i] = arr[i];
    return temparr;
}

function fakeShift(arr){
    let temparr = new Array(arr.length-1);
    for(let i=0; i < arr.length-1; i++) temparr[i] = arr[i+1];
    return temparr;
}

function fakeUnshift(arr, val){
    let temparr = new Array(arr.length + 1);
    temparr[0] = val;
    for (let i in arr) temparr[parseInt(i)+1] = arr[i];
    return temparr;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(fakePop(arr));
console.log(fakePush(arr, 11));
console.log(fakeShift(arr));
console.log(fakeUnshift(arr, -1));
