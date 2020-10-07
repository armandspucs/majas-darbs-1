//head of document
function head(title) {
    document.write("\t<div class=\"wrap\">\n");
    document.write("\t\t<div class=\"header\">\n");
    document.write("\t\t\t<img src=\"img/logo.png\" \>\n");
    document.write("\t\t\t<h2>Datortehnikas uzskaites sistēma</h2>\n");
    document.write("\t\t\t<hr>\n");
    document.write("\t</div>\n\n");
    document.write("\t<div class=\"content\">\n");
    if (title != "") {
        document.write("\t\t<a href=\"#\" onclick=\"history.go(-1)\">\n");
        document.write("\t\t<img class=\"back_btn\" src=\"img/back.png\">\n");
        document.write("\t\tAtpakaļ\n");
        document.write("\t\t</a>\n\n");
        document.write("\t\t<h4>" + title + "</h4>\n\n");

    }
}

function foot() {
    document.write("\t\t<div class=\"footer\">\n");
    document.write("\t\t\t<hr>\n");
    document.write("\t\t\t(c) 2020 Sia \"Kafijas automāts\"\n");
    document.write("\t\t</div>\n\n");
    document.write("\t</div><!--beidzas wrap-->\n");
}