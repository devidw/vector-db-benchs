import { supabase } from "./client.ts";
import records from "../dataset/embeddings.json" assert { type: "json" };

const { data, error } = await supabase.from("documents").insert(
  records.map((r) => {
    return {
      content: r.name,
      embedding: r.embedding,
    };
  }),
);

console.log({
  data,
  error,
});
