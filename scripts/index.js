// toggle nav buttons function
function toggleNavButtons() { 
    const navButtonsSection = document.getElementById("navButtonsSection");
    const moreButton = document.getElementById("moreButton");
    const moreButtonBars = document.querySelectorAll("#moreButton img");
    if (navButtonsSection.classList[1] !== "navButtons-slide-in") {
        moreButton.classList.toggle("filterWhite");
        moreButtonBars[0].classList.toggle('topBarX');
        moreButtonBars[1].classList.toggle('midBarX');
        moreButtonBars[2].classList.toggle('botBarX');
        navButtonsSection.classList.add("navButtons-slide-in");
    } else {
        navButtonsSection.classList.remove("navButtons-slide-in");
        moreButton.classList.toggle("filterWhite");
        moreButtonBars[0].classList.toggle('topBarX');
        moreButtonBars[1].classList.toggle('midBarX');
        moreButtonBars[2].classList.toggle('botBarX');
    }
}
// moreButton
const moreButton = document.getElementById("moreButton");
moreButton.addEventListener("click", toggleNavButtons);
