async function loadFile(target, file) {
    const el = document.querySelector(target);
    if (!el) return;

    const html = await fetch(file).then(res => res.text());
    el.outerHTML = html;   // replaces itself with the file contents
}

document.addEventListener("DOMContentLoaded", () => {
    loadFile("#header-include", "../header.html");
    loadFile("#footer-include", "../footer.html");
});
