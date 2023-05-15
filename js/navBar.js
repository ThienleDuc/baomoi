const header = document.querySelector("header");
        let navBar = document.querySelector("nav");
        window.addEventListener("scroll", myFunction);
        let temp;
        function myFunction(){
            temp = header.getBoundingClientRect().top + header.getBoundingClientRect().height;
            if(temp<0)
            {
                navBar.style.setProperty("position", "fixed");
                navBar.style.setProperty("top", "0");
                navBar.style.setProperty("width", "100%")
            }
            else{
                navBar.style.removeProperty("position", "fixed");
                navBar.style.removeProperty("top", "0");
            }
        } 
let boxSearch = document .querySelector("header form.box-search")
let toggle = document.querySelector("#toggle");
let container = document.querySelector(".container");
toggle.addEventListener("click",()=>{
    let menuItems = document.querySelectorAll("a[href *='#']");
    navBar.clientWidth = 0;
    navBar.classList.toggle("active");
    header.classList.toggle("active");
    container.classList.toggle("reset");
    for(let i = 0; i < menuItems.length; i++){
        let menuItem = menuItems[i];
        menuItem.addEventListener("click", ()=>{
            navBar.classList.remove("active");
            toggle.classList.remove("active");
            header.classList.remove("active");

        })
    }
})
