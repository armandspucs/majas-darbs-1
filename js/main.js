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



///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// / _|   | |     | |      / _|           | |      (_|_)      
//| |_ ___| |_ ___| |__   | |_ _   _ _ __ | | _____ _ _  __ _ 
//|  _/ _ \ __/ __| '_ \  |  _| | | | '_ \| |/ / __| | |/ _` |
//| ||  __/ || (__| | | | | | | |_| | | | |   < (__| | | (_| |
//|_| \___|\__\___|_| |_| |_|  \__,_|_| |_|_|\_\___|_| |\__,_|
//                                                  _/ |
async function iegutDatusNoApi(url)
{
  let datiNoServera = await fetch(url);
  let datiJson = await datiNoServera.json();
  return datiJson;
}
//funkciju var izsaukt šādi
//let datiJson = await iegutDatusNoApi('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json');


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// / _|   | |     | |                                       (_)
//| |_ ___| |_ ___| |__    _ __   __ _ _ __ __ _ _   _  __ _ _ 
//|  _/ _ \ __/ __| '_ \  | '_ \ / _` | '__/ _` | | | |/ _` | |
//| ||  __/ || (__| | | | | |_) | (_| | | | (_| | |_| | (_| | |
//|_| \___|\__\___|_| |_| | .__/ \__,_|_|  \__,_|\__,_|\__, |_|
//                        | |                           __/ |  
//                        |_|                          |___/
//paraugi tiek testēti failā fetch_test.html

//ar zemāko funkciju var notestēt vai darbojas iepriekšējā funkcija iegutDatusNoApi()
async function testIegutDatusNoApi()
{
  let datiJson = await iegutDatusNoApi('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json');

  console.log(datiJson);
}


async function raditDatoruDB() //parāda datus tabula failā fetch_test.html
{
}
