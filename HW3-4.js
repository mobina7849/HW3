//let value1="ali";
//let value2="abbasi";
//let value3="18";
//let value4="09190008888";
//let value5="lkjbvfcdfg@gmail.com";

const person={};
function getData(key,value){
    person[key]=value;
}
getData("firstName","ali");
getData("lastName","abbasi");
getData("age","18");
getData("phoneNumber","09190008888");
getData("email","mnbvdrtyj@gmail.com");
console.log(person);
