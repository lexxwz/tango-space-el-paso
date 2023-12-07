window.onload = function(){
    let general = document.getElementById('general')
    let g_img1 = document.getElementById('g_img1')
    let g_img2 = document.getElementById('g_img2')

    general.style.height = document.documentElement.clientHeight + 40 + "px"
    g_img1.style.height = document.documentElement.clientHeight + 40 + "px"
    g_img2.style.height = document.documentElement.clientHeight + 40 + "px"

    let preloader = document.getElementById('preloader')
    preloader.style.display = "none"
}