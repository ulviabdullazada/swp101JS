// let hazirdir = false;
// let age = 20;

// const yemekSifarisi = new Promise((resolve, reject)=>{
//     if (hazirdir) {
//         resolve('hazirdir')
//     }
//     else{
//         if (age < 15) {
//             reject('balaca, valideynini cagir ...')
//         }
//         else{
//             reject('Bir problem var ...')
//         }
//     }
// })

// yemekSifarisi.then(res=>console.log(res)).catch(err=> {
//     if (err == 'Bir problem var ...') {
//         console.log("Pul geri odenildi");
//     }
//     else{
//         console.log('Valideyn axtarilir');
//     }
// })

// const fetched = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(json => {
//     json.forEach(el=>{
//         list.innerHTML += "<li>" + el.name + "</li>"
//     })
// })
// .catch(err=> console.log("Error var !!!!"))

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => data.filter(f=> f.name.includes('le')))
.then(json => 
       {
        console.log(json)
        json.forEach(el=>{
            list.innerHTML += "<li>" + el.name + "</li>"
        })
    }
    
)
.catch(err=> console.log("Error var !!!!"))
