import "../env.ts";
import { PineconeClient } from "npm:@pinecone-database/pinecone";

const pinecone = new PineconeClient();

await pinecone.init({
  environment: "us-west4-gcp",
  apiKey: Deno.env.get("PINECONE_API_KEY")!,
});

const index = pinecone.Index("test");

export { index, pinecone };
