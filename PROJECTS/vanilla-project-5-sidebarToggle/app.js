// Select Elements

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn")
const sideBar = document.querySelector(".sidebar")


// Create Reusable Function
const toggleSidebar = () => {
    sideBar.classList.toggle("show-sidebar")
}

// Apply Event Listeners
toggleBtn.addEventListener("click", toggleSidebar)
closeBtn.addEventListener("click", toggleSidebar)