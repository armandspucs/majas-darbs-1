async function sikaakPeecNumura(a) //parāda datus tabula failā fetch_test.html
{
    let datiNoServera = await fetch('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json');
    let datiJson = await datiNoServera.json();

    let ierakstu_skaits = datiJson.dati.length;
    //ievērojiet ka visa info ir apakšobjektā 'dati' (tāda struktūra no excel nāk)

    tabulasRindas = document.querySelector('.tabulasRindas');
    for (i = 0; i < ierakstu_skaits; i++) {

       
		if (datiJson.dati[i]['inventaraNr']==a){
			
        tabulasRindas.innerHTML += `
		<br>
		<br> ` + datiJson.dati[i]['inventaraNr'] + ` 
		<br> ` + datiJson.dati[i]['iegadesGads'] + ` 
		<br> ` + datiJson.dati[i]['piegadatajs'] + ` 
		<br>`;
		}
    } //loop beigas

}

/*
"id": "2",
            "tips": "dators ",
            "inventaraNr": "1239-541 ",
            "iegadesGads": "2018",
            "piegadatajs": "Sia Dators",
            "razotajs" : "HP",
            "procesors": "i7 ",
            "ram": "8GB",
            "cietaisDisks": "ssd 250GB",
            "os": "win10"
*/

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
		<td> <a class="button" id="`+ datiJson.dati[i]['inventaraNr']+`" href="#">sīkāka informācija</a> </td>
		</tr>`;
    } //loop beigas
}
