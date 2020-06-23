import { pageTextParser } from "./index";

async function test() {
  console.log("Test: you should see an array of coffee names below:");
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
