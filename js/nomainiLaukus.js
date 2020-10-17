function nomainiLaukus() {
    var x = document.getElementById("tehnika").value;  
    document.getElementById("datortehnika").innerHTML = x;
    switch  (x){
        case 'dators':
        document.getElementById("nos1").textContent = "Procesors";
        document.getElementById("nos2").textContent = "RAM";
        document.getElementById("nos3").textContent = "Cietais disks";
        document.getElementById("nos4").textContent = "OS";
        break;
        case 'monitors':
        document.getElementById("nos1").textContent = "Ražotājs";
        document.getElementById("nos2").textContent = "Izmērs";
        document.getElementById("nos3").textContent = "Video ieejas";
        document.getElementById("nos4").textContent = "Skaņa";
        break;
        case 'printeris':
        document.getElementById("nos1").textContent = "Ražotājs";
        document.getElementById("nos2").textContent = "tips";
        document.getElementById("nos3").textContent = "Papīra izmērs";
        document.getElementById("nos4").textContent = "toneris";
        break;
    }
    }

