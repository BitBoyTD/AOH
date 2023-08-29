// toggle nav buttons function
function toggleNavButtons() { 
    const navButtonsSection = document.getElementById("navButtonsSection");
    const moreButtonImg = document.getElementById("moreButtonImg");
    const navBar = document.getElementById("navBar");
    if (navButtonsSection.style.display === "none" ||
    navButtonsSection.style.display === "") {
        navButtonsSection.style.display = "flex";
        moreButtonImg.classList.toggle("filterWhite");
        navButtonsSection.style.boxShadow = "0 0 20px";
        navBar.style.boxShadow = "none";
        setTimeout(() => {
            navButtonsSection.classList.add("navButtons-slide-in");
        }, 0); 
    } else {
        navButtonsSection.classList.remove("navButtons-slide-in");
        moreButtonImg.classList.toggle("filterWhite");
        setTimeout(() => {
            navButtonsSection.style.display = "none";
            navButtonsSection.style.boxShadown = "none";
            navBar.style.boxShadow = "0 0 20px";
        }, 500); 
    }
}
// moreButton
const moreButton = document.getElementById("moreButton");
moreButton.addEventListener("click", toggleNavButtons);
