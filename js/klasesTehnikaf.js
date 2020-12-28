async function klasesTehnikaf() {
    
    let kabinetaNr;
    let datoruSkaits, projektoruSkaits, skanduSkaits; 
    let telpa, tips;
    let irProjektors, irSkandas,vajagSkandas, vajagDatoru,vajagProjektoru;
    //let datoruDB =fetch('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json')
    let roomDB = await fetch('https://armandspucs.github.io/majas-darbs-1/data/room.json')
    let roomJson = await roomDB.json();
    let datoruDB = await fetch('https://armandspucs.github.io/majas-darbs-1/data/visas_tehnikas_db.json')
    let pcJson = await datoruDB.json();
    let kabinetuSkaits=roomJson.dati.length;   
    let garums=pcJson.dati.length;
    vajagSkandas=document.getElementById("skandas").checked;
    vajagDatoru=document.getElementById("datori").checked;
    vajagProjektoru=document.getElementById("projektors").checked;
    //nodzēst tabulas rindas
    let tabRindas=document.getElementById('trindas');
    let rskaits = document.getElementById('trindas').rows.length;
    let tr = tabRindas.getElementsByTagName("tr");
    for (let r = 0; r < rskaits; r++) {
        tr[r].style.display = "none";
    }
    //aizpildīt tabulas rindas
    let atlasesNr=document.getElementById('mekletKlasi').value;
    //console.log(atlasesNr);
    for(let j=0;j<kabinetuSkaits;j++){
        irProjektors='-';
        irSkandas='-';
        kabinetaNr=roomJson.dati[j]['name'];
        datoruSkaits=0;
        projektoruSkaits=0;
        skanduSkaits=0;
        
    for(let i=0;i<garums;i++){
       telpa=pcJson.dati[i]['name'];
        tips=pcJson.dati[i]['tips'];
       if(telpa==kabinetaNr && tips=="dators ")
               {
            datoruSkaits++;
        }
        if(telpa==kabinetaNr && tips=="projektors ")
            {
            projektoruSkaits++;
        }
        if(telpa==kabinetaNr && tips=="skandas ")
            {
        skanduSkaits++;
        }  

    }
    if (projektoruSkaits>0)
        {
        irProjektors='&#x2713';
    }
    if (skanduSkaits>0)
        {
        irSkandas='&#x2713';
    }
    let rinda = document.querySelector('.rinda');
    switch (true){
        case atlasesNr == kabinetaNr  :
            
            rinda.innerHTML += `
            <tr>
            <td>${kabinetaNr}</td>
            <td>${irProjektors}</td>
            <td>${datoruSkaits}</td>
            <td>${irSkandas}</td>
            <td><a href="klases_tehnikas_db.html?k=${kabinetaNr}">sīkāka informācija</a> </td>
            </tr>`;
        break;
        case vajagSkandas && skanduSkaits>0  :
            
            rinda.innerHTML += `
            <tr>
            <td>${kabinetaNr}</td>
            <td>${irProjektors}</td>
            <td>${datoruSkaits}</td>
            <td>${irSkandas}</td>
            <td><a href="klases_tehnikas_db.html?k=${kabinetaNr}">sīkāka informācija</a> </td>
            </tr>`;
        break;
    
        case vajagDatoru && datoruSkaits>0  :
            
            rinda.innerHTML += `
            <tr>
            <td>${kabinetaNr}</td>
            <td>${irProjektors}</td>
            <td>${datoruSkaits}</td>
            <td>${irSkandas}</td>
            <td><a href="klases_tehnikas_db.html?k=${kabinetaNr}">sīkāka informācija</a> </td>
            </tr>`;
        break;
        case vajagProjektoru && projektoruSkaits>0  :
            
            rinda.innerHTML += `
            <tr>
            <td>${kabinetaNr}</td>
            <td>${irProjektors}</td>
            <td>${datoruSkaits}</td>
            <td>${irSkandas}</td>
            <td><a href="klases_tehnikas_db.html?k=${kabinetaNr}">sīkāka informācija</a> </td>
            </tr>`;
        break;
        
    }
    }

    }
   
    