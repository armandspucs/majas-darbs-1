
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
