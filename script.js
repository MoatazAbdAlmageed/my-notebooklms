document.addEventListener("DOMContentLoaded", () => {

    // Decode full path (fixes spaces like %20)
    const decodedPath = decodeURIComponent(window.location.pathname);

    const parts = decodedPath.split('/').filter(Boolean);

    // File name (without extension)
    const fileName = parts.pop().split('.')[0];

    // Folder name
    const folderName = parts.length ? parts[parts.length - 1] : '';

    // Final text
    const titleText = `${fileName} - ${folderName}`;

    // Set page title
    document.title = titleText;

    // Create <h1> and insert it at top of <body>
    const h1 = document.createElement("h1");
    h1.textContent = titleText;

    // Insert as the first element inside <body>
    document.body.insertBefore(h1, document.body.firstChild);
});
