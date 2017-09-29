$(document).ready(function () {
    $.ajax({
        url: 'wangmeng-info.md',
        type: 'get',
        dataType: 'text',
        success: function (data) {
            var converter = new showdown.Converter();
            html_text = converter.makeHtml(data);
            $('#test').html(html_text);
        }
    });
});