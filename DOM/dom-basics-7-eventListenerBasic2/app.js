// Trigger Element
const revealBtn = document.querySelector(".reveal-btn")

// Target Element
const hiddenContent = document.querySelector(".hidden-content");


// Action Function
const revealContent = () => {
    // When clicking, if it has the class Remove it (Toggle Effect)
    if (hiddenContent.classList.contains("show")) {
        hiddenContent.classList.remove("show")
        revealBtn.innerHTML = "Reveal More"
    } else {
        // If it doesn't have the class then add it
        hiddenContent.classList.add("show")
        revealBtn.innerHTML = "Hide Text"
    }
}


revealBtn.addEventListener("click", revealContent)