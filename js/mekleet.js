function meklet(lauks,myId) {
  /* informācijas meklēšana tabulā  
  pēc konkrēta lauka, jeb kolonnas 
  skatīt visas_tehnikas_db.html*/
    var input, filter, table, tr, td, i, txtValue;
   // input = document.getElementById("myInput");
   input = document.getElementById(myId);  
    filter = input.value.toUpperCase();
    console.log(filter);
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[lauks]; // noradam pec kura lauka mekleet
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
