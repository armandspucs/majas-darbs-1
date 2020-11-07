async function klasesTehnika1() {
async function klasesTehnikaf() {
    let kabinetaNr=14;
    let datoruSkaits=0;
    let datoruDB;

    fetch('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json')
    .then(res => res.json())
    .then(json => { 
        
    datoruDB = json;

    for(i=0;i<datoruDB.length;i++){
        razotajs=datoruDB[i]['razotajs'];
        if(razotajs=="HP")
       // razotajs=datoruDB[i]['razotajs'];
       // if(razotajs=="HP")
       if(datoruDB[i]['razotajs']=="HP")
        {
            datoruSkaits++;
        }
    }

    let rinda = document.querySelector('.rinda');
    rinda.innerHTML += `
    <tr>
    <td>${kabinetaNr}</td>
    <td>${' - '}</td>
    <td>${datoruSkaits}</td>
    <td>${' - '}</td>
    <td>${' - '}</td>
    </tr>`;

    
    })
    
    //console.log(datoruDB);

    /*
    let datoruDB=[
        
                {
                    "id": "1",
                    "tips": "dators ",
                    "inventaraNr": "1239-540 ",
                    "iegadesGads": "2018",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "HP",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
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
                },
                {
                    "id": "3",
                    "tips": "dators ",
                    "inventaraNr": "1239-542 ",
                    "iegadesGads": "2019",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "Lenovo",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
                    "id": "4",
                    "tips": "dators ",
                    "inventaraNr": "1239-543 ",
                    "iegadesGads": "2019",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "Lenovo",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
                    "id": "5",
                    "tips": "dators ",
                    "inventaraNr": "1239-544 ",
                    "iegadesGads": "2017",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "HP",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
                    "id": "6",
                    "tips": "dators ",
                    "inventaraNr": "1239-545 ",
                    "iegadesGads": "2017",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "HP",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
                    "id": "7",
                    "tips": "dators ",
                    "inventaraNr": "1239-546 ",
                    "iegadesGads": "2020",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "Dell",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
                    "id": "6",
                    "tips": "dators ",
                    "inventaraNr": "1239-547 ",
                    "iegadesGads": "2017",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "HP",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
                    "id": "6",
                    "tips": "dators ",
                    "inventaraNr": "1239-548 ",
                    "iegadesGads": "2017",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "HP",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
                    "id": "6",
                    "tips": "dators ",
                    "inventaraNr": "1239-549 ",
                    "iegadesGads": "2017",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "HP",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
                    "id": "6",
                    "tips": "dators ",
                    "inventaraNr": "1239-550 ",
                    "iegadesGads": "2017",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "HP",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
                    "id": "6",
                    "tips": "dators ",
                    "inventaraNr": "1239-551 ",
                    "iegadesGads": "2017",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "HP",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
                    "id": "6",
                    "tips": "dators ",
                    "inventaraNr": "1239-552 ",
                    "iegadesGads": "2017",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "HP",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
                    "id": "6",
                    "tips": "dators ",
                    "inventaraNr": "1239-553 ",
                    "iegadesGads": "2017",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "HP",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                },
                {
                    "id": "6",
                    "tips": "dators ",
                    "inventaraNr": "1239-554 ",
                    "iegadesGads": "2017",
                    "piegadatajs": "Sia Dators",
                    "razotajs" : "HP",
                    "procesors": "i7 ",
                    "ram": "8GB",
                    "cietaisDisks": "ssd 250GB",
                    "os": "win10"
                }           
            ];

*/
   
    }
    