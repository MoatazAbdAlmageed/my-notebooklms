document.addEventListener("DOMContentLoaded", () => {

    // Decode path (fix %20)
    const decodedPath = decodeURIComponent(window.location.pathname);

    const parts = decodedPath.split('/').filter(Boolean);

    // File info
    const fileFull = parts.pop(); // e.g. "00.index.html", "01.html", "10.html"
    const folderName = parts[parts.length - 1];

    // Remove extension
    const fileBase = fileFull.replace(".html", "");

    let fileNumber = 0;
    let isIndexFile = false;

    // Detect index file: "00.index"
    if (fileBase.includes("index")) {
        fileNumber = 0;
        isIndexFile = true;
    } else {
        fileNumber = parseInt(fileBase, 10); // normal numeric page
    }

    // Zero padding function
    const pad = (n) => String(n).padStart(2, "0");

    // Base folder URL
    const baseFolder = "/" + parts.join("/") + "/";

    // Title text
    const titleText = ` ${isIndexFile ? "00" : pad(fileNumber)} - ${folderName} `;

    // Set page title
    document.title = titleText;

    // Add H1
    const h1 = document.createElement("h1");
    h1.textContent = titleText;
    document.body.insertBefore(h1, document.body.firstChild);

    // Reusable nav builder
    function createNav() {
        const nav = document.createElement("div");
        nav.style.display = "flex";
        nav.style.justifyContent = "space-between";
        nav.style.margin = "20px 0";

        // ---- Previous ----
        if (isIndexFile) {
            // On first page → no previous
            nav.appendChild(document.createElement("span"));
        } else {
            const prev = fileNumber - 1;
            const prevBtn = document.createElement("a");
            prevBtn.textContent = "← Previous";

            if (prev === 0) {
                // Go back to index page
                prevBtn.href = `${baseFolder}00.html`;
            } else {
                prevBtn.href = `${baseFolder}${pad(prev)}.html`;
            }

            prevBtn.style.fontSize = "18px";
            nav.appendChild(prevBtn);
        }

        // ---- Next ----
        const next = fileNumber + 1;

        const nextBtn = document.createElement("a");
        nextBtn.textContent = "Next →";

        if (isIndexFile) {
            // From index go to 01.html
            nextBtn.href = `${baseFolder}01.html`;
        } else {
            nextBtn.href = `${baseFolder}${pad(next)}.html`;
        }

        nextBtn.style.fontSize = "18px";
        nav.appendChild(nextBtn);

        return nav;
    }

    // Add nav under H1
    document.body.insertBefore(createNav(), h1.nextSibling);

    // Add nav to footer
    document.body.appendChild(createNav());
});
