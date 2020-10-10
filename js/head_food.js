//head of document
function head(title) {
    document.write("\n\t\t<div class=\"wrap\">\n");
    document.write("\t\t\t<div class=\"header\">\n");
    document.write("\t\t\t\t<img src=\"img/logo.png\" \>\n");
    document.write("\t\t\t\t<h2>Datortehnikas uzskaites sistēma</h2>\n");
    document.write("\t\t\t<hr>\n");
    document.write("\t\t\t</div>\n\n");
    document.write("\t\t\t<div class=\"content\">\n");
    if (title != "") {
        document.write("\t\t\t\t<a href=\"#\" onclick=\"history.go(-1)\">\n");
        document.write("\t\t\t\t\t<img class=\"back_btn\" src=\"img/back.png\">\n");
        document.write("\t\t\t\t\tAtpakaļ\n");
        document.write("\t\t\t\t</a>\n\n");
        document.write("\t\t\t\t<h4 id='h4b'>" + title + "</h4>\n\n");
    }
}

function foot() {
    document.write("\t\t\t\t<div class=\"footer\">\n");
    document.write("\t\t\t\t\t<hr>\n");
    document.write("\t\t\t\t(c) 2020 Sia \"Kafijas automāts\"\n");
    document.write("\t\t\t</div>\n\n");
    document.write("\t\t\t</div><!--beidzas wrap-->\n");
}