// for(var i = 0; i < 9; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// i = 1;
// i++ ~ i = 2;
// i++ ~ i = 3;
// if(true)
// {

// }


// // 1* 10 = 10
// // 10 + 7 = 17
// // 17 * 10 = 170
// // 170 + 2 = 172

// var teklik = num%10;
// var eks =  teklik;// 1

// while(num > 9)
// {
//     num = (num - teklik) / 10;
//     eks = eks*10;
//     teklik = num % 10;
//     eks = eks + teklik;
// }
// console.log(eks);


//2 // 2*10 + 6 = 26 // 

// var num = 562;
// eks = 0; num = 562; 26*10 + 5 = 265
// eks = num % 10 = 2; teklik = num % 10; num = (num-teklik)/10 = 56;
// teklik = num % 10; eks = eks * 10 + teklik; num = (num - teklik) / 10 = 5
// teklik = num % 10; eks = eks * 10 + teklik; num = (num - teklik) / 10 = 0


// var num = prompt(); // 562 //56 // 5
// var teklik = num % 10; // 2 //6 //5 // 0
// var eks = teklik; // 2 //26 //265 // 265*10 +0 
// while(num > 9)
// {
//     num = (num - teklik) / 10;
//     teklik = num % 10;
//     eks = eks * 10 + teklik;
// }
// console.log(eks);
// var a = 12;
// do{
//     a++;
//     console.log(a);
// }while(a < 10);

// while(a < 10){
//     a++;
//     console.log(a);
// }
// var eded;

// do{
//     var eded = prompt("Ededi daxil edin");
// }while(isNaN(eded));

// console.log(eded % 2 ==0 ? "Cutdur" : "Tekdir");

// console.log(eded * 77);
// var eded = prompt("Ededi daxil edin");
// while(isNaN(eded)){
//     eded = prompt("Ededi daxil edin");
// }

// for(var i = 0; i < 10; i++){
//     alert(i);
// }

for (var i = 1; i < 90; i++) {
    // console.log(i);
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}