// const array = ["Anjing","Kucing"];

// const mapArray = array.map( ()=>{
//     return  "Sapi";
// })

// const mapArray1 = array.map((penampungBaru) =>{
//     return  penampungBaru == "Anjing";
// })

// console.log(mapArray);
// console.log(mapArray1);
// console.log(...array);
// console.log(array.includes("Kucing",0))

// const angka = [4,8,5,3,10];

// console.log(angka.sort((a,b) => {
//     return a>b ? 0:-1;
// }));

// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// }
 
// let firstName = "Dimas";
// let age = 20;
 
// // menginisialisasi nilai baru melalui object destruction
// ({firstName, age} = profile);
 
// console.log(firstName + age);
// console.log(age);

// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// }
 
// const {firstName = "Jouzu", lastName, age} = profile;
 
// console.log(firstName, lastName, age);
 
// /* output:
// John Doe 18
// */

// const nama = ["Jouzu","Ridzky"];
// const x = nama;
// console.log(x.map(data => {
//     return data.toUpperCase();
// }));
//  console.log(...x);

// const nilai = [75,80,90,100]

// const avg = ((...data) =>{
//     let hasil=0;
//     for(let item of data){
//         hasil += item;
//     }
//     return hasil/data.length;
// })

// console.log(avg(...nilai))