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





async function iegutDatusNoApi(url)
{
  let datiNoServera = await fetch(url);
  let datiJson = await datiNoServera.json();
  return datiJson;
}
//funkciju var izsaukt šādi
//let datiJson = await iegutDatusNoApi('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json');


//ar zemāko funkciju var notestēt vai darbojas iepriekšējā funkcija iegutDatusNoApi()
async function testIegutDatusNoApi()
{
  let datiJson = await iegutDatusNoApi('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json');

  console.log(datiJson);
}