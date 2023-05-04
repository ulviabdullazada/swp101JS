// const aEl = document.querySelector("a");
// const pEl =document.querySelector("p");
// const td = document.querySelector(".td-1");
// console.log(td.getAttribute("asd")); attributu secmek ucun
// td.setAttribute("asd",22)
// console.log(td.getAttribute("asd"));

// if (td.hasAttribute("as")) { attributu yoxlamaq ucun
//     console.log("asd atributu var");
// }

// pEl.onclick = ()=>{ onclicki attributdan yazmaq
//     alert();
// }
// console.log(aEl.href);
// pEl.style = "color:blue; background-color:red"; attribut istifade ederek reng deyishmek
// pEl.style.color = "blue"; alternativi
// pEl.style.backgroundColor = "red";

// const arr = [];
// const btn = document.getElementById("create-btn");
// btn.onclick = () =>{
//     const input = document.getElementById("todo");
//     let collection = document.querySelector(".collection");
//     collection.innerHTML += `<li class="collection-item">${input.value} <i class="material-icons" onclick="this.parentElement.remove()">delete</i></li>`
// }
// function removeRow(el) {
//     el.parentElement.remove();
// }
// gonderilen elementi mainImg-e yazir
function changeImg(el){
    const img = el.parentElement.previousElementSibling;
    img.setAttribute('src', el.getAttribute("src"));
}
// novbeti elementi mainImg-e yazir
function nextImg(){
    const row = document.querySelector(".row");
    const mainImg = row.previousElementSibling;
    let activeImg;
    for (const item of row.children) {
        if (item.src == mainImg.src) {
            activeImg = item;
            break;
        }
        // eger mainImg'in src deyeri sonuncu image'in src deyerine beraberdirse,
        // deyish birinci image'in src deyerine beraber et
        if(mainImg.src == row.lastElementChild.src){
            mainImg.src = row.firstElementChild.src;
        }
    }
    changeImg(activeImg.nextElementSibling)
}
// evvelki elementi mainImg-e yazir
function previousImg(){
    const row = document.querySelector(".row");
    const mainImg = row.previousElementSibling;
    let activeImg;
    for (const item of row.children) {
       
        if (item.src == mainImg.src) {
            activeImg = item;
            // eger mainImg'in src deyeri birinci image'in src deyerine beraberdirse,
            // deyish sonuncu image'in src deyerine beraber et
            if(mainImg.src == row.firstElementChild.src){
                mainImg.src = row.lastElementChild.src;
            }
            break;
        }
    
    }
    changeImg(activeImg.previousElementSibling)
}

// function nextImg(){
//     let activeImg = getActiveImg();
//     changeImg(activeImg.nextElementSibling)
// }
// function previousImg(){
//     let activeImg = getActiveImg();
//     changeImg(activeImg.previousElementSibling)
// }
// function getActiveImg(){
//     const row = document.querySelector(".row");
//     const mainImg = row.previousElementSibling;
//     for (const item of row.children) {
//         if (item.src == mainImg.src) {
//             return item;
//         }
//     }
// }