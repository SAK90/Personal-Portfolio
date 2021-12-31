const openList = document.querySelector(".list");
openList.addEventListener("click", ()=>{
    document.querySelector(".list").style.display = "none";
    document.querySelector(".cross").style.display = "inline";
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
});
const closeList = document.querySelector(".cross");
closeList.addEventListener("click", ()=>{
    document.querySelector(".list").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
});
