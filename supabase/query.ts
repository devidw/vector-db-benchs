import { supabase } from "./client.ts";
import records from "../dataset/embeddings.json" assert { type: "json" };

const searchEmbedding = records[42].embedding;

const { error, data } = await supabase.rpc("match_documents", {
  query_embedding: searchEmbedding,
  similarity_threshold: 0.78,
  match_count: 10,
});

console.log(error, data);
