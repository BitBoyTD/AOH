// toggle nav buttons function
function toggleNavButtons() { 
    const navButtonsSection = document.getElementById("navButtonsSection");
    const moreButton = document.getElementById("moreButton");
    const moreButtonBars = document.querySelectorAll("#moreButton img");
    const navBar = document.getElementById("navBar");
    if (navButtonsSection.style.display === "none" ||
    navButtonsSection.style.display === "") {
        navButtonsSection.style.display = "flex";
        moreButton.classList.toggle("filterWhite");
        moreButtonBars[0].classList.toggle('topBarX');
        moreButtonBars[1].classList.toggle('midBarX');
        moreButtonBars[2].classList.toggle('botBarX');
        navButtonsSection.style.boxShadow = "0 0 20px";
        navBar.style.boxShadow = "none";
        setTimeout(() => {
            navButtonsSection.classList.add("navButtons-slide-in");
        }, 0); 
    } else {
        navButtonsSection.classList.remove("navButtons-slide-in");
        moreButton.classList.toggle("filterWhite");
        moreButtonBars[0].classList.toggle('topBarX');
        moreButtonBars[1].classList.toggle('midBarX');
        moreButtonBars[2].classList.toggle('botBarX');
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
