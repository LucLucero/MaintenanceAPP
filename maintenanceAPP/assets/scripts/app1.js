import db from './app.js'

async function retrieveData(){

    const queryEvent = await db.maintenanceEvents.toArray();
    const eventHTML = queryEvent.map(toHTML).join('');            
    const newRow = document.getElementById('new_data')
    console.log("Consegui ver onde vou plotar os dados");
    newRow.innerHTML = eventHTML;
    document.body.appendChild(newRow); 
           
}

function toHTML(evento){

    return `
                      
        <td>${evento.date}</td>
        <td>${evento.local1}</td>
        <td>${evento.local2}</td>
        <td>${evento.tag}</td>
        <td>${evento.equipament}</td>
        <td>${evento.description}</td>                    
        
    `


}

retrieveData();