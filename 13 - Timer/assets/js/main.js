const sec = document.getElementById("second");
const min = document.getElementById("minute");
const hour = document.getElementById("hour");
let s = 0;
let m = 0;
let h = 0;

function timer() {
    if (s == 59) {
        s = - 1;
        if (m==59) {
            m = -1;
            h = h + 1;
            hour.innerText = h;
        }
        m = m + 1;
        min.innerText = m;
    }
    s = s + 1;
    sec.innerText = s;
}
let x = setInterval(timer, 20);
function stopTimer(){
    clearInterval(x)
}
function continueTimer(){
    stopTimer();
    x = setInterval(timer, 20);
}






// function timer() {
//     if (s == 19) {
//         s = - 1;
//         m = m+1;
//         min.innerText = m;
//     }
//     s = s + 1;
//     sec.innerText = s;
// }