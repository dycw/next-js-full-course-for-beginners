export default async function getWikiResults(
  searchTerm: string
): Promise<SearchResult> {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerm,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });
  const resp = await fetch(
    `https://en.wikipedia.org/w/api.php?${searchParams}`
  );
  return resp.json();
}
