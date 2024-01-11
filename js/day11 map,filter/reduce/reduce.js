let arr =[10,20,4,7,9,11,21];

let r = arr.reduce((a,b)=>{
    if(a>b){
        return a;
    }
    else{
        return b
    }
});
console.log(r);