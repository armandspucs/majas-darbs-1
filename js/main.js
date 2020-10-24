function getList(jsonFile, selectItem, objectId){
	fetch(`https://armandspucs.github.io/majas-darbs-1/data/${jsonFile}.json`)
		.then(res => res.json())
		.then(json => optionList(json, selectItem, objectId))

}

function optionList(json, selectItem, objectId){
	let dati = json.dati;
	let rez = "";
	for (let i in dati) {
		rez += `<option value="${dati[i].name}" ${(dati[i].name==selectItem?" Selected":"")}>${dati[i].name}</option>\n`;
	}
	document.getElementById(objectId).innerHTML+= rez;
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