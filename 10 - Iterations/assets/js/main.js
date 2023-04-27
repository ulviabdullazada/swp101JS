// let stds = ["Aytekin", "Anar","Nilufer","Zehra","Leman","Elnare", "Eli","Memmedeli","Zehra"]
// let nums = [123,11,50,23,9,12]

// console.log(stds.reverse().find(x=> x.includes("a")));










// console.log(nums.some(val=>val % 2 == 0));

// console.log(stds.filter(val => val.toLowerCase().includes("el")).length);

// console.log(stds.filter(val => val.toLowerCase().includes("eli")));
// let res = nums.filter(val => val % 3 == 0);

// // console.log(nums.reduce((total, value)=>total+value));

// console.log(nums.filter(val => val % 3 == 0).map(val=>val / 3))
// console.log(res.map(val=>val / 3))
// console.log(nums.filter(val => val % 5 == 0))

// console.log(stds.map((val)=> val.slice(0,3)));

// console.log(nums);
// console.log(nums.map((val, ind) => {
//     return val%2==0?"cutdur":"tekdir"
// }));

// console.log(stds);

// stds.forEach((value, index) => {
//     console.log(value + " " + index)
// });

// for (let i = 0; i < stds.length; i++) {
//     console.log(stds[i]);
// }

// function writeConsole(text) {
//     console.log(text);
// }

// let writeCon = function (value){
//     console.log(value);
// }

// value => console.log(value)

// for (let j = 0; j < stds[i].length; j++) {
//     console.log(stds[i][j]);
// }
// let mat = [[1,2],[10,20]];
// console.log(mat[1][0]);

var stu = {
    name: "Yunis",
    surname: "Qarayev",
    age:21
}

var stu1 = {
    name: " Anar",
    surname: "Balizade",
    age:21
}

var stu2 = {
    name: "Zehra",
    surname: "Mehdizade",
    age:21
}



// console.log(array1)
for (const i in stu) {
 console.log(i)
}

const array1 = [stu];
for (const i of array1) {
    console.log(i)
}

// console.log(stu)

// const array1 = ['a', 'b', 'c'];

// for (const i of stu) {
//     console.log(i)
// }