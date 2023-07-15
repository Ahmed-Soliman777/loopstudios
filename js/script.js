var openTab = document.querySelector("#check_btn"),
    nav = document.querySelector(".responsive_list"),
    closeTab = document.querySelector("#closing_btn") 
openTab.onclick = function(){
    nav.classList.add("open")
}
closeTab.onclick = function(){
    nav.classList.remove("open")
}