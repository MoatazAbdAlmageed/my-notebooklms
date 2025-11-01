$(function () {
    // Initialize Showdown converter with useful options
    const converter = new showdown.Converter({
        tables: true,
        strikethrough: true,
        tasklists: true,
        emoji: true,
        simpleLineBreaks: true,
        ghCompatibleHeaderId: true
    });

    // Get Markdown text from div#md-source
    const markdown = $('#md-source').text().trim();

    // Convert Markdown to HTML
    const html = converter.makeHtml(markdown);

    // Inject HTML into target div and apply RTL direction + Arabic styling
    $('#md-render')
        .html(html);



});
