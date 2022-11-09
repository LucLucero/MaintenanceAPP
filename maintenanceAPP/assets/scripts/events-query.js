import db from './app.js';

async function retrieveData(){

    
    const queryEvent = await db.maintenanceEvents.toArray();
    const eventHTML = queryEvent.map(toHTML).join('');                         
    const newRow = document.getElementById('new_row_table');
    
    newRow.innerHTML = eventHTML;
    
    
       
           
}

function toHTML(evento){

    return `
       
        <tr>
            <td>${evento.id}</td>
            <td>${evento.date}</td>
            <td>${evento.local1}</td>
            <td>${evento.local2}</td>
            <td>${evento.tag}</td>
            <td>${evento.equipament}</td>
            <td>${evento.description}</td>                    
        </tr>
    `


}


async function deleteFromDB(event){

    event.preventDefault();
    const form = event.target;    
    const idDelete = parseInt(form.delID.value);
    console.log(typeof(idDelete));
    const query = await db.maintenanceEvents.where('id').equals(idDelete).delete();
    console.log(query);
   
    
    retrieveData();
    return console.log(`ID ${form.delID.value}, deletado`);


}

const form = document.getElementById('form-1');
form.addEventListener('submit', deleteFromDB);
retrieveData();