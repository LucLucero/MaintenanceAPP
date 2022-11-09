import Dexie from "https://cdn.jsdelivr.net/npm/dexie@3.0.3/dist/dexie.mjs";

const db = new Dexie('maintenanceDB');

//Criando a tabela
db.version(1).stores({
    maintenanceEvents: "++id,date,local1,local2,tag,equipament,description",
})

db.on('populate', async () => {

    await db.maintenanceEvents.bulkput([

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