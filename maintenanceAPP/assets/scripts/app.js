import Dexie from "https://cdn.jsdelivr.net/npm/dexie@3.0.3/dist/dexie.mjs";

const db = new Dexie('maintenanceDB');

//Criando a tabela
db.version(1).stores({
    maintenanceEvents: "++id,date,local1,local2,tag,equipament,description",
});

db.on('populate', async () => {

    await db.maintenanceEvents.bulkPut([

        {
            date: "2022/11/09",
            local1: "MP4",
            local2: "Calcoil",
            tag: "",
            equipament: "CW4000",
            description: "Falha Link, realizado troca do módulo de potência",
        },

        {
            date: "2022/11/05",
            local1: "MP5",
            local2: "Calcoil",
            tag: "",
            equipament: "GE FANUC 90-70",
            description: "Falha Link, realizado troca da CPU",
        }
        
    ]);    

})

db.open();

//Pegar os dados no form
async function saveFormData(event){

    event.preventDefault();
    const form = event.target;
    await saveOnDB({

            date: form.date.value,
            local1: form.local1.value,
            local2: form.local2.value,
            tag: form.tag.value,
            equipament: form.equipament.value,
            description: form.description.value,

    })
    form.reset();
    return false;
}

//Salvando no DB

async function saveOnDB({date,local1,local2,tag,equipament,description}){

    try{
        await db.maintenanceEvents.add({

            date,
            local1,
            local2,
            tag,
            equipament,
            description,
    
    
        });
        console.log("Saving data...");
        

    } catch (error) {

        console.log("Was not able to save data");

    }
    retrieveData();
    console.log("Saved");
}

//Criando evento do Botão
const form = document.querySelector('form');
try{
    const form = document.querySelector('form');
    form.addEventListener('submit', saveFormData);
} catch (error) {
    console.log({error});
    console.log("Não foi possivel pegar o form");

}


//Fazendo a query
async function retrieveData(){

    const queryEvent = await db.maintenanceEvents.toArray();
    const eventHTML = queryEvent.map(toHTML).join('');
    try {        
        const newRow = document.getElementById('new_data')
        console.log("Consegui ver onde vou plotar os dados");
        newRow.innerHTML = eventHTML;
        document.body.appendChild(newRow);
    } catch (error) {
        console.log("Impossible, there is no 'div' here...");
    }   
    
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