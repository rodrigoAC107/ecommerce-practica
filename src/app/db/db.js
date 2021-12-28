import Dexie from "dexie";

const db = new Dexie("EcommercePractica");

db.version(1).stores({
    cart: '++id, price, title, category'
})

export default db;