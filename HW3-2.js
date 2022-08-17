//let nuember=27;
//let number=6;
let sum=0;
function sumMaghsomelayh(number){
    for (let i = 0; i < number; i++) {
        if(number%i==0){
            sum+=i;
        }
    }
    let resault=(sum===number)? console.log("yes"):console.log("no");
}
sumMaghsomelayh(6);
