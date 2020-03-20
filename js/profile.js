// common js 

let nav_btn = document.getElementById('menu-btn')
let nav_list = document.getElementById('nav-list')
let bar1 = document.getElementsByClassName('bar1')[0]
let bar2 = document.getElementsByClassName('bar2')[0]
let bar3 = document.getElementsByClassName('bar3')[0]




let is_nav_on = false

nav_btn.onclick = () => {
    if (is_nav_on) {
        nav_list.style.left = "100%"
        is_nav_on = false

        bar1.style.transform = "rotateZ(0deg)"
        bar3.style.transform = "rotateZ(0deg)"
        setTimeout(() => { bar2.style.opacity = "1" }, 150)
        nav_list.style.boxShadow = ""




    }
    else {

        nav_list.style.left = "50%"
        bar1.style.transform = "rotateZ(-45deg) scale(0.8)"
        bar3.style.transform = "rotateZ(45deg) scale(0.8)"
        bar2.style.opacity = "0"
        is_nav_on = true

    }

}


//nav links 

function goHome() {
    window.location.href = "index.html"

}
function goEvents() {
    window.location.href = "events.html"

}
function goAbout() {
    window.address.href = "www.github.com/iamtushar324"

}
function goTeam() {
    window.location.href = "index.html"

}


let loadingPage = document.getElementById("loading")

setTimeout(() => {
    loadingPage.style.display = "none";

}, 100)
window.onload = () => {
    // loadingPage.style.display = "none";

}




//************************ */

let topCon = document.getElementsByClassName('top_con')[0];
let isBig = true;
let topBot = document.getElementsByClassName('top_bottom')[0];

$('.more_btn').on('click', () => {

    if (isBig) {
        topCon.style.height = "50vh";
        isBig = false;
        topBot.style.display = 'none'

    }

    else {
        topCon.style.height = "100vh";
        isBig = true;
        topBot.style.display = 'block'


    }
})