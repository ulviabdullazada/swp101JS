// $.ajax({
//     url:'https://jsonplaceholder.typicode.com/users',
//     method:'get',
//     success: function(res){
//         console.log(res);
//         // res.forEach(el => {
//         //     $('ul').append('<li class="list-group-item">'+ el.username + '</li>')
//         // });
//     },
//     error: function(err){
//         console.log(err);
//     }
// });

// let obj = {
//     name:'flan',
//     surname:'flan',
//     universitet : {
//         name : 'Sumqayit Dovlet Universiteti',
//         abr : 'SDU',
//         address : 'Sumqayit'
//     }
// }

// console.log(obj.universitet.abr);


// for (let i = 1; i < 1011; i++) {
//     $.ajax({
//         url:'https://pokeapi.co/api/v2/pokemon/'+i,
//         method:'get',
//         // success: ,
//         error: function(err){
//             console.log(err);
//         }
//     }).done(function(res){
//         $('ol').append(
//         `<li class="list-group-item">${i}<img src="${res.sprites.front_default}">${res.name}</li>`
//         )
//     });
// }


const list = document.querySelector(".list-group");

axios.get('https://pokeapi.co/api/v2/pokemon/').then(resp => {

console.log(resp.data)
    for (let i = 0; i < resp.data.results.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = resp.data.results[i].name;
        list.appendChild(li);
    }
});