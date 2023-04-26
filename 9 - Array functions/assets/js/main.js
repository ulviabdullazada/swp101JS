// let myArr = [1,true,3,4,5,0,22,3];

// myArr.slice(0,-1)




// console.log(myArr.sort(()=> 0.5-Math.random()));






// let students = ["Anar","Konul","Ayten"];
// myArr.splice(0,myArr.length > 2 ? myArr.length-2 : 0)
// myArr.splice(0,3,"Nilufer")

// console.log(myArr.concat(students));
// console.log(myArr);

// console.log(myArr.pop());

// console.log(myArr);
// console.log(myArr);
// myArr.push(21);

// myArr.unshift("Salam");

// delete myArr[0]
// console.log(myArr);
// myArr.shift();

// array2String(myArr);

// function array2String(arr) {
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i] + ","
//     }
//     console.log(result);
// }
// customJoin(myArr, "% ")
// function customJoin(arr, symbol) {
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//         result = result + arr[i] + symbol;
//     }
//     console.log(result);   
// }


















// (start, end)
// var a = "Apple, Banana, Kiwi";
// var b = a.slice(-12, -6);
// console.log(b)

// (start, end)
// var a = "Apple, Banana, Kiwi";
// var b = a.substring(-7,13);
// console.log(b)

// (start, length)
// var a = "Apple, Banana, Kiwi";
// var b = a.substr(0,5);
// console.log(b);


// let text = "Please visit Microsoft, Microsoft, Microsoft!";
// let newText = text.replace(/MICROSOFT/ig, "W3Schools");
// console.log(newText)

// let text1 = "Hello World!";
// let text2 = text1.toLowerCase();

// console.log(text2);


// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat("-", text2);

// console.log(text3)

// let text1 = "      Hello        World!      ";
// let text2 = text1.trimEnd();

// console.log(text1);
// console.log(text2);

// let text = "A";
// text = text.padEnd(4,"-");

// console.log(text);

// let text = "HELLO WORLD Salam Yunis, Necesen";
// var t = text.split(" ");

// console.log(t)

// let char = text.charCodeAt(0);

// console.log(char);

// let text = "yusif.osmanov@gmail.com";
// let result = text.includes("@");

// console.log(result);

// var count = 0;
// var check = false;

// for(var i =0; i < text.length; i++){
//     if(text[i] === "l"){
//         check = true;
//         // count++;
//     }
// }

// if(check === true){
//     console.log(true);
// }
// else{
//     console.log(false);
// }


// a. Toplama çıxma, toplama, vurma, bölməyə uyğun funksiya yaradirsiz 2 eded ve 1 operator('+','-','*','/') qebul edir. Qebul etdiyi operatora uygun a və b ədədləri üzərində hesablama aparib alinan deyeri qaytarır.

// function calc(num1,num2,symbol){
//     switch (symbol) {
//         case "+":
//             alert(num1+num2);
//             break;
//         case "-":
//             alert(num1-num2);
//             break;
//         case "/":
//             alert(num1/num2);
//             break;
//         case "*":
//             alert(num1*num2);
//             break;
//         default:
//             alert("Duz emelli operator yaz!")
//             break;
//     }
// }

// var a = Number(prompt("Birinci ededi daxil edin: "));
// var b = Number(prompt("Ikinci ededi daxil edin: "));

// var sym = prompt("Simvol daxil edin: ");

// calc(a,b,sym);


// b. Methoda ad gonderende adi ekrana cixardir(Sabir), ad ve soyad gonderende soyadi adi ekrana cixardir(Guliyev Sabir), ad,soyad ve ata adı göndərildikdə adin baş hərfi nöqtə soyad ata adi ekrana cixardirsiz(S.Guliyev Mehti). 



// function GetFullName(name, surname, fatherName){
//     if(name !== undefined && surname !== undefined && fatherName !== undefined){
//         alert(name[0] + "." + surname + " " + fatherName);
//     }
//     else if(name !== undefined && surname !== undefined && fatherName === undefined){
//         alert(name + " " + surname);
//     }
//     else if(name !== undefined && surname === undefined && fatherName === undefined){
//         alert(name);
//     }

// }

// GetFullName("Filankes","Filankesov","Filankes oglu");


//c. 1 eded daxil edin. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.

function FindDevidedNumbers(num){
    var count = 0;

    if(num < 50){
        for(var i = 1; i < num; i++){
            if(i % 3 === 0){
                count++;
            }
        }
    }
    else if(num > 50 && num < 100){
        for(var i = 1; i < num; i++){
            if(i % 5 === 0){
                count++;
            }
        }
    }
    else if(num > 100){
        for(var i = 1; i < num; i++){
            if(i % 8 === 0){
                count++;
            }
        }
    }

    alert(count);
}

FindDevidedNumbers(160);