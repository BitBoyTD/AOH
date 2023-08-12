// toggle nav buttons function
function toggleNavButtons() {
    navButtonsSection = document.getElementById("navButtonsSection");
    if (navButtonsSection.style.display === "none") {
        navButtonsSection.style.display = "flex";
        setTimeout(() => {
            navButtonsSection.classList.add("navButtons-slide-in");
        }, 0); // Adding the class immediately after display change
    } else {
        navButtonsSection.classList.remove("navButtons-slide-in");
        setTimeout(() => {
            navButtonsSection.style.display = "none";
        }, 500); // Adjust the delay based on your transition duration
    }
}




// moreButton
moreButton = document.getElementById("moreButton");
moreButton.addEventListener("touchstart", toggleNavButtons);