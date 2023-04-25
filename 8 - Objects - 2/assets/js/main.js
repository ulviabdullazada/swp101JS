// function funk() {
//     var test = "Salam";
//     return test;
// }

// console.log(funk());
// console.log(test);

// let ifTrue = "Salam";
// if (true) {
    //     console.log(ifTrue);
    //     let ifTrue = "Sert duzdur"
// }
// console.log(ifTrue);

// var eded = 77;
// //some codes...
// let eded = 52;
// console.log(eded);

//hoisting
// eded = 28;
// console.log(eded);
// let eded;



// const text = "Salam";
// text = "Aleykum";
// console.log(text);

// const asd = ()=>{
//     console.log("Salam");
// }
// asd();

// const text = "Salam";

// text = "Salam";

// console.log(text);

// let sagird = {
//     name: "Yunis",
//     surname: "Garayev",
//     age:21,
//     getInfo : function () {
//         return this.name + " " + this.surname + " " + this.age
//     }
// };

// var arr1 = [];

// var arr = MyArray();
// arr.add(12);
// console.log(arr);

var arr = [];


function Student(ad, soyad, yas){
    this.name = ad; 
    this.surname = soyad;
    this.age = yas;
    this.getInfo = function () {
        return this.name + " " + this.surname + " " + this.age + " "
    }
}
Student.prototype.toString = function () {
    return this.getInfo();
}
Student.prototype.yeniMethod = function(){
    alert("Ishleyir")
}

let laman = new Student("Laman", "Ahadova",22);
let ramin = new Student("Ramin", "Atazada",21);

// console.log(sagird.getInfo());
console.log(laman);
// console.log([1,2,3]);
// const person = {
//     name : "Yusif",
//     surname: "Osmanov",
//     age: 21
// }
// person.age = 22;

// console.log(person.toString());
document.write(ramin)
document.write(laman)
document.write(new Student("Yunis", "Garayev", 21))





