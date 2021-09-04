import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { join } from 'path';

abstract class DBHelper {
    file = join(__dirname, '../../db.json');
    adapter = new FileSync(this.file);
    db = lowdb(this.adapter);

    constructor() {
        this.db.read();
        this.db.defaults({ "data": { "message": "Hello World" } }).write();
    }
}

export default DBHelper;