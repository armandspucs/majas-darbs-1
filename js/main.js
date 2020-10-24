function getList(name, select) {
	fetch(`https://armandspucs.github.io/majas-darbs-1/data/${name}.json`)
		.then(res => res.json())
		.then(
			let dati = json.dati;
			let rez = "";
			for (let i in dati) {
				// alert((dati[i].name===select?" Selected":""));
				rez += `<option value="${dati[i].name}" ${(dati[i].name==select?" Selected":"")}>${dati[i].name}</option>\n`;
			}
			//alert (rez);
			return rez
		)
}


async function iegutStatusNoServeraV2(a) {
    fetch(a)
        .then(res => res.json())
        .then(json => attelotDatus(json))
}
iegutStatusNoServera('tips');

async function iegutStatusNoServera(a) {
    fetch('https://armandspucs.github.io/majas-darbs-1/data/status.json')
        .then(res => res.json())
        .then(json => attelotDatus(json, a))
}
iegutStatusNoServera('tips');


function attelotDatus(json, a) {
    console.log(json);
}