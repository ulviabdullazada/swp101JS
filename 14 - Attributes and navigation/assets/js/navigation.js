const box = document.querySelector(".box");
box.children[0].setAttribute("src","https://www.wwf.org.uk/sites/default/files/styles/social_share_image/public/2016-12/Original_WW22791.jpg?itok=Ouo7tsEJ");


console.log(box.firstElementChild)
box.nextElementSibling.style.backgroundColor = "aqua";
box.nextElementSibling.children[0].style.color = "black";

// box.parentNode.className = "active"
box.parentNode.classList.add("active");
const mainBox = box.parentNode;

console.log(box.nextElementSibling.firstElementChild.innerText)

// console.log(mainBox.firstElementChild)