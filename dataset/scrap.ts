const response = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0",
);

const { results } = await response.json();

const objects = results.map((result) => {
  return {
    name: result.name,
  };
});

Deno.writeTextFileSync(
  "data.json",
  JSON.stringify(
    objects,
    null,
    2,
  ),
);
