//let ghad = 1.71;
//let vazn = 93;
//let bmi = 0;
function tanasob(ghad,vazn){
    let bmi = vazn / (ghad ** 2);
    if(bmi<18.5){
        console.log("Underweight");
    }else if(18.5<=bmi&& bmi<25){
        console.log("Normal");
    }else if(25<=bmi && bmi<30){
        console.log("Overweight");
    }else if(30<=bmi){
        console.log("Obese");
    }
    console.log(`bmi=${bmi}`);
}
tanasob(1.71,93);
