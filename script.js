// ==============================
// Save and Restore Scroll Position
// ==============================
const STORAGE_KEY = "readingProgress_" + location.pathname; // unique per page

// Restore scroll position
window.addEventListener("load", () => {
    const savedScroll = localStorage.getItem(STORAGE_KEY);
    if (savedScroll) {
        window.scrollTo(0, parseFloat(savedScroll));
    }
});

// Save scroll position while reading
window.addEventListener("scroll", () => {
    localStorage.setItem(STORAGE_KEY, window.scrollY);
    updateProgressBar();
});

// Optional: progress bar
const progressBar = document.getElementById("progressBar");
function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrolled + "%";
}

// Save before leaving the page
window.addEventListener("beforeunload", () => {
    localStorage.setItem(STORAGE_KEY, window.scrollY);
});
