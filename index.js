


// toggleNavButtons function
function toggleNavButtons(){
    if (document.getElementById("navButtonsDiv").style.display === "none") {
        document.getElementById("navButtonsDiv").style.display = "flex";
    }
    else {
        document.getElementById("navButtonsDiv").style.display = "none";
    }
}

// moreButton
moreButton = document.getElementById("moreButton");
moreButton.addEventListener("touchstart", toggleNavButtons);