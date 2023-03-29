import { Bench } from "npm:tinybench";
import { index as pineconeIndex } from "./pinecone/client.ts";
import { supabase } from "./supabase/client.ts";
import records from "./dataset/embeddings.json" assert { type: "json" };

const searchEmbedding = records[42].embedding;

const bench = new Bench();

bench
  .add("pinecone", async () => {
    const response = await pineconeIndex.query({
      queryRequest: {
        topK: 1,
        vector: searchEmbedding,
      },
    });
  })
  .add("supabase", async () => {
    const { error, data } = await supabase.rpc("match_documents", {
      query_embedding: searchEmbedding,
      similarity_threshold: 0.78,
      match_count: 1,
    });
  });

await bench.run();

Deno.writeTextFileSync(
  "results.json",
  JSON.stringify(
    bench.tasks.map(({ name, result }) => {
      delete result["samples"];
      return {
        name,
        result,
      };
    }),
    null,
    2,
  ),
);
