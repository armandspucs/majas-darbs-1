function getList(jsonFile, objectId, selectItem){//parāda datus tabula sarakstā 
	let dati = await fetch(`https://armandspucs.github.io/majas-darbs-1/data/${jsonFile}.json`);
	let json = await dati.json();
	let dati = json.dati;
	let rindas = "";
	for (let i in dati) {
		rindas += `<option value="${dati[i].name}" ${(dati[i].name==selectItem?" Selected":"")}>${dati[i].name}</option>\n`;
	}
	document.getElementById(objectId).innerHTML+= rindas;
}

async function getData(jsonFile,objectId,list[]){ //parāda datus tabula failā 
	let dati = await fetch(`https://armandspucs.github.io/majas-darbs-1/data/${jsonFile}.json`);
	let json = await dati.json();
	let rindas = "";
	for (i = 0; i < json.dati.length; i++){
		rindas += "<tr>";
		for (j = 0; j < list.length; j++){
			rindas += `<td> {json.dati[j]['id']}</td>`;
		}
		rindas += "</tr>";
	}
	document.getElementById(objectId).innerHTML=rindas;
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
//---------------------------------------------------------------------
async function raditVisasTehnikasDB() //parāda datus tabula failā fetch_test.html
{
    let datiNoServera = await fetch('https://armandspucs.github.io/majas-darbs-1/data/visas_tehnikas_db.json');
    let datiJson = await datiNoServera.json();

    let ierakstu_skaits = datiJson.dati.length;
    //ievērojiet ka visa info ir apakšobjektā 'dati' (tāda struktūra no excel nāk)

    tabulasRindas = document.querySelector('.tabulasRindas');

    for (i = 0; i < ierakstu_skaits; i++) {

        tabulasRindas.innerHTML += `
		<tr>
		<td> ` + datiJson.dati[i]['tips'] + ` </td>
		<td> ` + datiJson.dati[i]['inventaraNr'] + ` </td>
		<td> ` + datiJson.dati[i]['name'] + ` </td>
		<th>-</th>
		<td> sīkāka informācija </td>
		</tr>`;
    } //loop beigas

}
