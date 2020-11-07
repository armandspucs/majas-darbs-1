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


async function raditDatoruDB() //parāda datus tabula failā fetch_test.html
{
	let datiNoServera = await fetch('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json');
	let datiJson = await datiNoServera.json();

	let ierakstu_skaits = datiJson.dati.length; 
	//ievērojiet ka visa info ir apakšobjektā 'dati' (tāda struktūra no excel nāk)
	
	tabulasRindas = document.querySelector('.tabulasRindas');

	for (i = 0; i < ierakstu_skaits; i++)
	{

		tabulasRindas.innerHTML+=`
		<tr>
		<td> `+datiJson.dati[i]['id']+` </td>
		<td> `+datiJson.dati[i]['razotajs']+` </td>
		<td> `+datiJson.dati[i]['ram']+` </td>
		</tr>`;
		
  
	}//loop beigas

}
