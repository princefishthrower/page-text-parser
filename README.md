# page-text-parser

A function that returns an array of text content for a webpage given a jQuery-like selector and a URL.

## TypeScript Usage:

```typescript
import { pageTextParser } from 'page-text-parser';

async function run() {
    const texts = await pageTextParser('https://google.com','a');

    // prints out text content of all anchor tags on google.com. If nothing was found or there was an error with website retrieval, texts will be an empty array.
    texts.forEach(text => {
        console.log(text);
    })
}

run();
```

Extended usage with optional attribute value to also retrieve with the text

```typescript
import { pageTextParser } from 'page-text-parser';

async function run() {
    const texts = await pageTextParser('https://google.com','a', 'href');

    // prints out an array of objects with text: and attributeValue: keys containing text content of all anchor tags and the href value of on google.com. If nothing was found or there was an error with website retrieval, texts will be an empty array.
    texts.forEach(text => {
        console.log(JSON.stringify(text));
    })
}

run();
```

## Why is the selector only 'jQuery-like'?

I am using [Cheerio](https://cheerio.js.org/) which is a Node implementation of JQuery, and their documentation states:

> Like jQuery, it’s the primary method for selecting elements in the document, but unlike jQuery it’s built on top of the CSSSelect library, which implements most of the Sizzle selectors.

Read the [Cheerio](https://cheerio.js.org/) docs for more detailed information on how the selector syntax differs from actual jQuery.