function getList(name, select){
	let json="";
	
	switch (name){
		case "status":
			json=`{
			"dati":[
				{
					"id": "1",
					"name": "Neizpildīts"
				},
				{
					"id": "2",
					"name": "Risinās"
				},
				{
					"id": "3",
					"name": "Izpildīts"
				},
				{
					"id": "4",
					"name": "Noraidīts"
				}
			]
		}`;
		break;
		case "room":
			json=`{
				"dati":[
					{
						"id": "1",
						"name": "12"
					},
					{
						"id": "2",
						"name": "13"
					},
					{
						"id": "3",
						"name": "14"
					},
					{
						"id": "4",
						"name": "15"
					}
				]
			}`;
		break;
		case "unit_type":
			json=`{
				"dati": [
					{
						"id": "1",
						"name": "Dators"
					},
					{
						"id": "2",
						"name": "Skandas"
					},
					{
						"id": "3",
						"name": "Projektors"
					},
					{
						"id": "4",
						"name": "Kopētajs"
					},
					{
						"id": "5",
						"name": "Skeneris"
					},
					{
						"id": "6",
						"name": "Printeris"
					},
					{
						"id": "7",
						"name": "Interaktīvā tāfele"
					}
				]
			}`;
		break;
	}
	let obj = JSON.parse(json);
	let dati=obj.dati;
	let rez="";
	for (let i in dati){
		// alert((dati[i].name===select?" Selected":""));
		rez+=`<option value="${dati[i].name}" ${(dati[i].name==select?" Selected":"")}>${dati[i].name}</option>\n`;
	}
	//alert (rez);
	return rez
}

async function iegutStatusNoServeraV2(a)
{
	fetch('a')
	.then(res=>res.json())
	.then(json=>attelotDatus(json))
}
iegutStatusNoServera('tips');

async function iegutStatusNoServera(a)
{
	fetch('https://armandspucs.github.io/majas-darbs-1/data/status.json')
	.then(res=>res.json())
	.then(json=>attelotDatus(json,a))
}
iegutStatusNoServera('tips');


function attelotDatus(json,a)
{
	console.log(json);
}



