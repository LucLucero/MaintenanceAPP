import db from './app.js';

async function retrieveData(){

    
    const queryEvent = await db.maintenanceEvents.toArray();
    const eventHTML = queryEvent.map(toHTML).join('');                         
    const newRow = document.getElementById('new_row_table');
    const tbody = document.querySelector('tbody');
    newRow.innerHTML = eventHTML;
     
    
       
           
}

function toHTML(evento){

    return `
       
        <tr>
            <td>${evento.date}</td>
            <td>${evento.local1}</td>
            <td>${evento.local2}</td>
            <td>${evento.tag}</td>
            <td>${evento.equipament}</td>
            <td>${evento.description}</td>                    
        </tr>
    `


}
retrieveData();