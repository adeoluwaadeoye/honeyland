// src/lib/mongodb.ts
import { MongoClient, Db } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI must be defined in .env");
}

const uri: string = process.env.MONGODB_URI;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function connectToDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db("honeyland");
}

export default clientPromise;