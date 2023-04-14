// var nums = [1,"Ramin",true,11,9];
// console.log(nums);

// var nums = [1,2,3,4,5,6];
// console.log(nums);
// for(i = 0;i < nums.length;i++)
// {
//     console.log("index " + i,nums[i]);
// }
// console.log(nums[0]);
// console.log(nums[1]);
// console.log(nums[2]);
// console.log(nums[3]);

// var nums = [2,6,9,11,16,20];
// console.log(nums);


// for(var i = 0; i<nums.length; i++){
//     // console.log(i);
//     // console.log(nums[i]);
//     if (nums[i] % 2 == 0) {
//         console.log(nums[i]);
//     }
// }
// console.log(nums[0]);
// console.log(nums[1]);
// console.log(nums[2]);
// console.log(nums[3]);
// console.log(nums[4]);

// var std1 = {
//     name:"Ramin",
//     surname: "Atazade",
//     age : 21
// };

// var konul = {
//     name: "Konul",
//     surname: "Yusifova",
//     age : 22
// }

// console.log(konul.surname);
// var students = [
//     {
//         name:"Ramin",
//         surname: "Atazade",
//         age : 21
//     },
//     {
//         name: "Konul",
//         surname: "Yusifova",
//         age : 22
//     }, 
//     {
//         name: "Nilufer",
//         surname : "Neciyeva",
//         age: 21
//     },
//     {
//         name: "Zehra",
//         surname : "Mehdizade",
//         age: 21
//     }
// ];
// for(var i = 0; i < students.length;i++){
//     // console.log(students[i]);
//     ayten.innerHTML +=`<tr class="table-dark"><td>${i+1}</td><td>${students[i].name}</td><td>${students[i].surname}</td><td>${students[i].age}</td></tr>`;
// }

var pokemons = [
    {
        img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        name: "Pikachu",
        desc: "Sari elektrik tip pokemon"
    },
    {
        img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        name: "Bulbosour",
        desc: "Yashil reng tebiet tip pokemon"
    },
    {
        img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        name: "Charmander",
        desc: "Qirmizi reng alov tip pokemon"
    }
]
for (var i = 0; i < pokemons.length; i++) {
   area.innerHTML += `<div class="col-md-3">
   <div class="card">
       <img src="${pokemons[i].img}" class="card-img-top"
           alt="...">
       <div class="card-body">
           <h5>${pokemons[i].name}</h3>
           <p class="card-text">${pokemons[i].desc}</p>
       </div>
   </div>
</div>` 
}