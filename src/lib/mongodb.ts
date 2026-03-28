import { MongoClient } from "mongodb";

let client: MongoClient | null = null;

export async function connectToDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  // Reuse connection (important for serverless environments)
  if (client) return client;

  client = new MongoClient(uri);
  await client.connect();

  return client;
}