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


function countOfNumbers(num) {              
    if (num >= 0) {
        say = 1;
        while(num > 9){
            var teklik = num % 10;
            num = (num-teklik) / 10;
            say++;
        }
        console.log(say);
    }
    else{
        console.log("Wrong input");
    }
}

countOfNumbers(24);

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