let array1 =["monday","tuesday","wednesday"]
array1[3]="thursday";
// array1.pop();
console.log(array1[1])
//
let array2 =[5,4,11,16,7]
// array1.pop();
array2[3]=17
let addn=array2[0]+array2[1]+array2[2]+array2[3]+array2[4];
let sumn=array2[0]+array2[1]+array2[2]+array2[3]+array2[4];
let ave=sumn/5;
let modu=sumn%10;
let R=60;
let T=10;
console.log(array2[3])
console.log(addn)
console.log("Average= " +ave)
console.log("Modulus= " +modu)
console.log(R==T)
console.log(R>T)
console.log(R<T)
console.log(R!=T)
console.log(R>=T)
console.log(R>>T)
console.log(R||T)
console.log(R<<T)
////

let month1=[]
month1[0]="jan"
month1[1]="february"
month1[2]="march"
month1[3]="april"
month1[4]="may"
month1[5]="june"
month1[6]="july"
month1.push("august")
console.log(month1)