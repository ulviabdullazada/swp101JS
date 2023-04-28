// let h1 = document.createElement("h1");
// let h2 = document.createElement("h2");
// h2.innerText = "Aleykum"
// h1.innerText = "Salam SDU";
// let attr = document.createAttribute("style");
// attr.value = "color:red; text-decoration:underline;"

// h1.setAttributeNode(attr);

// document.body.append(h1, h2);
// console.log(h1);



// let h1 = `<h1 style="color:red;text-decoration:underline;">Salam SDU</h1>`
// document.body.innerHTML += h1;

// document.getElementsByTagName("p")[0].innerText = "Anar"

// document.getElementsByClassName("test")[1].innerText = "Ayten"
// let anar = "sdkljfskd";
// anar.innerText = "asdjkfhasjdkfh"

// const anar = document.getElementById("anar123");
// console.log(anar);
// anar.innerText = "ljfdgnjskdfhg";

// console.log(document.querySelectorAll(".test")[1]);


// let sp1 = document.querySelector(".sp1");
// let sp2 = document.querySelector(".sp2");

// sp1.innerHTML = "<b>salam</b>"
// sp2.innerText = "<b>salam</b>"

const inp = document.querySelector("input");
const ls = document.getElementById("list");

let students = [];
function addArr(){
    if(inp.value.trim() != "" )
    {
        if(students.includes(inp.value.trim().toLowerCase()) === false){
            students.push(inp.value.trim().toLowerCase());
            console.log(inp.value);
            inp.value = "";
            fillList();
        }
        else{
            alert("Bu adda istifadeci var")
        }
    }
    else{
        alert("Nese daxil et")
    }
}
function fillList(){
    let res = students.reduce(
        (result, val)=>result += `<li>${val}</li>`,''
    );
    ls.innerHTML = res;
}
