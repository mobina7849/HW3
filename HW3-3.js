//fisaghors
//c**2=a**2+b**2 => c=vatar=bozorgtarin zel
//let a=3;
//let b=4;
//let c=6;
//let vatar=Math.max(a,b,c);
function createTriangle(a,b,c){
    let resault=((a**2===b**2+c**2)||(b**2===a**2+c**2)||(c**2===a**2+b**2))?console.log("yes"):console.log("no");
}
createTriangle(3,4,5);