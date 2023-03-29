import { index } from "./client.ts";
import records from "../dataset/embeddings.json" assert { type: "json" };

const upsertResponse = await index.upsert({
  upsertRequest: {
    vectors: records.map((r) => {
      return {
        id: r.id,
        values: r.embedding,
        metadata: {
          name: r.name,
        },
      };
    }),
  },
});

console.log(upsertResponse);
