// var a = 5;
// if(a > 0){
//     alert("Musbetdir");
// }
// if(a < 20){
//     alert("20-den balacadir");
// }
// if (a < 0) {
//     alert("Menfidir");
// }
// var a = 5;
// if(a > 0){
//     alert("Musbetdir");
// }
// else if(a < 20){
//     alert("20-den balacadir");
// }
// else {
//     alert("Menfidir");
// }
// alert("proqram yoxlandi")

// isNaN("1"); //is Not a Number

// console.log();

// console.log(parseInt("123abc123"))

// if(!isNaN("1")){
//     alert("Ededdir");
// }

// var dayOfWeek = 7;


// if (dayOfWeek == 1) {
//     console.log("Monday");
// }
// else if (dayOfWeek == 2){
//     console.log("2");
// }
// else if (dayOfWeek == 3){
//     console.log("3");
// }
// else if (dayOfWeek == 4){
//     console.log("4");
// }
// else if (dayOfWeek == 5){
//     console.log("5");
// }
// else if (dayOfWeek == 6){
//     console.log("6");
// }
// else if (dayOfWeek == 7){
//     console.log("7");
// }
// else{
//     console.log("Wrong input");
// }


// switch (dayOfWeek) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 6:
//     case 7:
//         console.log("Weekend");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     default : 
//         console.log("Wrong input");
//         break;
// }
// alert();
// var month = prompt("Ayi daxil edin");
// switch (month) {
//     case "April":
//         console.log(30);
//         break;
//     case "December":
//         console.log(31);
//         break;
//     case "February":
//         console.log("28 or 29");
//         break;
//     default:
//         console.log("wrong input");
//         break;
// }
// var num = prompt("Ededi daxil edin"); 
// if (!isNaN(num)) {
//     num % 2 == 0 ? console.log("cutdur") : console.log("tekdir")
//     num % 3 == 0 ? console.log("3-e bolunur") : console.log("3-e bolunmur")
// }
// else{
//     console.log("Eded daxil edin");
// }


// 56
// var number = prompt("Eded daxil edin: ");

// if(number > 9 && number < 100){
//     var teklik = number % 10; // 6
//     var onluq = (number - teklik) / 10 // 5

//     if(teklik == onluq)
//     {
//         alert("Beraberdir!")
//     }
//     else{
//         alert("Beraber deyil!")
//     }
// }
// else{
//     alert("2 reqemli eded daxil edin!")
// }

var number = prompt("Eded daxil edin: ")

if(number > 999 && number < 10000){

    var teklik = number % 10;
    var onluq = ((number - teklik) % 100) / 10;
    var a = (onluq * 10) + teklik;
    var yuzluk = ((number - a) % 1000) / 100;
    var b = (yuzluk * 100) + a;
    var minlik = ((number - b) % 10000) / 1000;

    var cem = teklik + onluq + yuzluk + minlik;

    alert(cem)
}
else{
    alert("4 reqemli eded daxil edin!")
}