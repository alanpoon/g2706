import { MongoClient, Db } from "mongodb";

export class DbClient {
    public db: Db;

    public async connect() {
        this.db = (await MongoClient.connect("mongodb://localhost:27017")).db("G27");
        console.log("Connected to db");
        return this.db;
    }
}