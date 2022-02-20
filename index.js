const para = document.getElementById("para");

para.addEventListener("mouseover", abc = () => {
    console.log("mouse inside");
});

para.addEventListener("mouseout", abc = () => {
    console.log("mouse outside");
});

const toggleHide = () => {
    const btn = document.getElementById("btn");
    const para = document.getElementById("para");
    if (para.style.display !== "none") {
        para.style.display = "none";
        console.log("para hide")
    }
    else {
        para.style.display = "block";
        console.log("para display")
    }

}
