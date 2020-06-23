import { pageTextParser } from "./index";

async function test() {
  console.log(
    JSON.stringify(
      await pageTextParser(
        "https://tegernseer-kaffeeroesterei.de/produkt-kategorie/kaffee-und-espresso/",
        "h3 > a"
      )
    )
  );
}

test();
