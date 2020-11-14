async function klasesTehnikaf() {
    let kabinetaNr;
    let datoruSkaits;
    let telpa;
    //let datoruDB =fetch('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json')
    let roomDB = await fetch('https://armandspucs.github.io/majas-darbs-1/data/room.json')
    let roomJson = await roomDB.json();
    let datoruDB = await fetch('https://armandspucs.github.io/majas-darbs-1/data/visas_tehnikas_db.json')
    let pcJson = await datoruDB.json();
    
    let kabinetuSkaits=roomJson.dati.length;   
    let garums=pcJson.dati.length;
    for(let j=0;j<kabinetuSkaits;j++){
        kabinetaNr=roomJson.dati[j]['name'];
        datoruSkaits=0;
    for(let i=0;i<garums;i++){
       telpa=pcJson.dati[i]['name'];
       if(telpa==kabinetaNr)
       //if(datoruDB[i]['razotajs']=="HP")
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

    }
    }
   
    