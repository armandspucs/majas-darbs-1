//head of document
function head(title,page) {
    document.write(`<div class="wrap">
						<div class="header">
							<img src="img/logo.png">
							<h2>Datortehnikas uzskaites sistēma</h2>
							<hr>
				</div>
				<div class="content">`);
    if (title != "") {
        document.write(`<a href="${page}">
							<img class="back_btn" src="img/back.png">
							Atpakaļ
						</a>
						<h2 id="h2b">${title}</h2>`);
    }
}

function foot() {
    document.write(`<div class="footer">
						<hr>
						(c) 2020 Sia "Kafijas automāts"
					</div>
				</div><!--beidzas wrap-->`);
}