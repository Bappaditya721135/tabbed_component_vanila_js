// selet the parent to use event deligation 
const parent = document.querySelector(".main-container")
parent.addEventListener("click", (e) => {
    // selecting the btn 
    const clickedElement = e.target.closest(".btn")
    if (!clickedElement) return;

    // remove active-content class from all element 
    [...document.querySelectorAll(".content")].forEach(el => el.classList.remove("active-content"))

    // active content 
    const activeContent = document.querySelector(`.btn-${clickedElement.dataset.tab}-content`)
    // adding active class 
    activeContent.classList.add("active-content")

})


// change color on btn click 
const colorBtn = document.querySelector(".color")
colorBtn.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("black-bg-color")
    colorBtn.style.border = "2px solid white"
})