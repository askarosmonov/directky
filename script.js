let color_box = document.querySelector(".color-box");
let spanTags = document.querySelectorAll("span");
toggleFuntion = (color)=>{
    color_box.style.background=color;
    spanTags.forEach((spantag)=> {
        spantag.classList.remove("active")
    })
    event.target.classList.add("active")
}