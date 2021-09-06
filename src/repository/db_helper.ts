import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

abstract class DBHelper {
    adapter = new FileSync('db.json');
    db = lowdb(this.adapter);

    constructor() {
        this.db.defaults({ "message": "Hello World" }).write();
    }
}

export default DBHelper;