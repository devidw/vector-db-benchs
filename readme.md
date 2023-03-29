# vector database benchmarks

comparing pinecone with supabase (+ pgvector extension) for embeddings records, running queries to find a given embedding

in these benchs operation region of both platforms is us-west and request region is eu-north

the used dataset can be found in `./dataset/embeddings.json` (100 one-words)

## Benchmarks

date: 2023-03-29

| Database   | Hz       | Mean     | Variance | SD       | P99      |
|------------|----------|----------|----------|----------|----------|
| Pinecone   | 3.501599 | 285.5838 | 44023.23 | 209.8171 | 885.0765 |
| Supabase   | 2.185156 | 457.6331 | 50348.20 | 224.3840 | 835.6537 |

full results can be found in `./results.json`

bases on these benchs the average search process using pinecone is roughly 1.6x faster than with supabase postgres + pgvector extension