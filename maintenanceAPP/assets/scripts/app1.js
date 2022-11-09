import Dexie from "https://cdn.jsdelivr.net/npm/dexie@3.0.3/dist/dexie.mjs";

const db = new Dexie('maintenanceDB');

//Criando a tabela
db.version(1).stores({
    maintenanceEvents: "++id,date,local1,local2,tag,equipament,description",
});


