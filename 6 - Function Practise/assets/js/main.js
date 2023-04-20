// function areaOfCircle(radius) {
//     return 3*radius*radius
// }

//var a = areaOfCircle(4)

// var areaOfCircle = r => 3 * r * r;

// function areaOfTriangle(a,b,c,r) {
//     var p = (Number(a)+Number(b)+Number(c))/2;
//     return p*r;
// }

// console.log(areaOfTriangle(prompt("Ilk terefi daxil et"),prompt("Ikinci terefi daxil et"),prompt("Ucuncu terefi daxil et"),prompt("Radiusu daxil et")))


// function countOfNumbers(num) {              
//     if (num >= 0) {
//         say = 1;
//         while(num > 9){
//             var teklik = num % 10;
//             num = (num-teklik) / 10;
//             say++;
//         }
//         console.log(say);
//     }
//     else{
//         console.log("Wrong input");
//     }
// }

// countOfNumbers(24);

// 182
// t = 182%10 = 2
// num = (182-t)/10 = 18
// say++ = 1

// 18
// t = 18 % 10 = 8
// num = (18 - t) / 10 = 1
// say++ = 2

// 1
// t = 1 % 10 = 1
// num = (1-t)/10 = 0
// say++ = 3

// function findMin(arr) {
//     var min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// var nums = [1,7,-3,0,9,-8,22,193,88]
// console.log("Arrayin en kichik elementi : " + findMin(nums));

// function sumMinAndMax(arr){
//     var min = arr[1];
//     var max = arr[0];
//     for (let i = 2; i < arr.length; i++) {
//         if (i % 2 == 0 && arr[i] > max) {
//             max = arr[i];
//         }
//         else if(i % 2 == 1 && arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min+max;
// }

// console.log(sumMinAndMax([1,3,5,7,-2,4,9,11]));



// function FindPow(num){
//     var newNum = num;
//     var count = 0;

//     while(num % 2 === 0){
//         num = num / 2;
//         count++;
//     }
//     if(num === 1){
//         console.log(newNum + " 2nin " + count + " quvvetidir.");
//     }
//     else{
//         console.log(newNum + " 2nin quvveti deyil.");
//     }
// }

// FindPow(64);

function FindPow(num){

    // var count = 0;
    var check = false;

    for(let i = 1; i <= num; i*=2){
        if(i === num){
            // count++;
            check = true;
        }
    }

    if(check === true){
        console.log("Eded 2nin quvvetidir")
    }
    else{
        console.log("Eded 2nin quvveti deyil")
    }
}

var number = Number(prompt("Eded daxil edin: "));

FindPow(number);