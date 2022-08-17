//let x=13;
//let off=9;
function nomre(x,off){
    if(off===0){
        x=20;
    }else if(off===7){
        x=17;
    }else{
        x=x-off;
        if(x<0){
            x=0
        }
    }
console.log(x);
}
nomre(13,9);
