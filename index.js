// toggle nav buttons function
function toggleNavButtons() { 
    const navButtonsSection = document.getElementById("navButtonsSection");
    const moreButtonImg = document.getElementById("moreButtonImg");
    if (navButtonsSection.style.display === "none" ||
    navButtonsSection.style.display === "") {
        navButtonsSection.style.display = "flex";
        moreButtonImg.classList.toggle("moreButtonWhite");
        setTimeout(() => {
            navButtonsSection.classList.add("navButtons-slide-in");
        }, 0); // Adding the class immediately after display change
    } else {
        navButtonsSection.classList.remove("navButtons-slide-in");
        moreButtonImg.classList.toggle("moreButtonWhite");
        setTimeout(() => {
            navButtonsSection.style.display = "none";
        }, 500); // Adjust the delay based on your transition duration
    }
}
// moreButton
moreButton = document.getElementById("moreButton");
moreButton.addEventListener("touchstart", toggleNavButtons);