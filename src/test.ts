import { pageTextParser } from "./index";

async function test1() {
  console.log("Test 1: you should see an array of coffee names below:");
  console.log(
    JSON.stringify(
      await pageTextParser(
        "https://tegernseer-kaffeeroesterei.de/produkt-kategorie/kaffee-und-espresso/",
        "h3 > a"
      )
    )
  );
}

test1();

async function test2() {
  console.log("Test 2: you should see an array link text and their href attribute values below:");
  console.log(
    JSON.stringify(
      await pageTextParser(
        "https://tegernseer-kaffeeroesterei.de/produkt-kategorie/kaffee-und-espresso/",
        "a",
        "href"
      )
    )
  );
}

test2();
