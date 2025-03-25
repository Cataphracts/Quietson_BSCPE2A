let isYellow = false; 

function changeTableColor() {
    const table = document.getElementById("colorTable");
    const rows = table.getElementsByTagName("tr");  
    
    const newColor = isYellow ? '' : 'yellow';   

    for (let i = 0; i < rows.length; i++) {
       
        if (i !== 2) {
            const cells = rows[i].getElementsByTagName("td"); 
            for (let j = 0; j < cells.length; j++) {
                cells[j].style.backgroundColor = newColor;  
            }
        }
    }

    isYellow = !isYellow;  
}
