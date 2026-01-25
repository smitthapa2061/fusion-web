import clientPromise from "./client";

export async function getDb(dbName?: string) {
  const client = await clientPromise;

  console.log("✅ Database connected");

  return client.db(dbName || "Cluster0");
}


export async function getCollection(collectionName: string, dbName?: string) {
  const db = await getDb(dbName)
  return db.collection(collectionName)
}