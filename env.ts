import { load } from "https://deno.land/std@0.181.0/dotenv/mod.ts";

await load({ envPath: "./.env", export: true });
