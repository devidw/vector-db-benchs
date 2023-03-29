import "../env.ts";
import { OpenAIEmbeddings } from "npm:langchain/embeddings";
import records from "./data.json" assert { type: "json" };

const embeddings = new OpenAIEmbeddings();

Deno.exit();

// const docsRes = await embeddings.embedDocuments(records.map((r) => r.name));

// const docsRes = [[0, 1]];

const extendedRecords = [...records];

docsRes.forEach((item, index) => {
  extendedRecords[index].embedding = item;
});

Deno.writeTextFileSync(
  "embeddings.json",
  JSON.stringify(extendedRecords, null, 2),
);
