function findGetParameter(parameterName) { //nolasa parametrus
    let items = location.search.substr(1).split("&");
	let result ="";
    for (let i = 0; i<items.length; i++){
        let tmp = items[i].split("=");
        if (tmp[0] === parameterName){
			//result = decodeURIComponent(tmp[1]);
			result = tmp[1];
		}
    }
    return result;
} 

async function getList(jsonFile, objectId, selectItem){//parāda datus tabula sarakstā 
	let dati = await fetch(`https://armandspucs.github.io/majas-darbs-1/data/${jsonFile}.json`);
	let json = await dati.json();
	dati = json.dati;
	let rindas = "";
	for (let i in dati) {
		rindas += `<option value="${dati[i].name}" ${(dati[i].name==selectItem?" Selected":"")}>${dati[i].name}</option>\n`;
	}
	document.getElementById(objectId).innerHTML+= rindas;
}



async function getData(jsonFile,objectId,list,next){ //parāda datus tabula failā 
	let dati = await fetch(`https://armandspucs.github.io/majas-darbs-1/data/${jsonFile}.json`);
	let json = await dati.json();
	dati = json.dati;
	let rindas = "";
	for (i = 0; i < dati.length; i++){
		rindas += "<tr>";
		for (j = 0; j < list.length; j++){
			rindas += `<td>${dati[i][list[j]]}</td>`;
		 }
		rindas += "</tr>";
	}
	document.getElementById(objectId).innerHTML=rindas;
	eval(next);
}

function statuss(tableID){
	let table=document.getElementById(tableID);
	for (i = 0; i < table.rows.length;i++){
		switch(table.rows[i].cells[table.rows[i].cells.length-1].innerHTML){
			case "Izpildīts":
				table.rows[i].cells[table.rows[i].cells.length-1].innerHTML=table.rows[i].cells[table.rows[i].cells.length-1].innerHTML+`<br><input type="button" value="Atkārtoti pieteikt" onclick="">`;
			break
			default:
				let txt=table.rows[i].cells[table.rows[i].cells.length-1].innerHTML;
				table.rows[i].cells[table.rows[i].cells.length-1].innerHTML=`<select id="l${i}"></select>`;
				getList("status", `l${i}`, txt);
		}
	}
}

function state(tableID){
	let table=document.getElementById(tableID);
	for (let i=0; i<table.rows.length;i++){
		if(table.rows[i].cells[0].innerHTML.trim().toUpperCase()!="DATORI"){
			table.rows[i].cells[1].innerHTML=(table.rows[i].cells[1].innerHTML=="0"?"&#8855":"&#x2713");

		}
	}
}