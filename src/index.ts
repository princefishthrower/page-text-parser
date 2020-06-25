import cheerio from "cheerio";
import axios from "axios";
import ITextExtended from "./interfaces/ITextExtended";

export async function pageTextParser(
  url: string,
  selector: string,
  attribute?: string
): Promise<Array<string | ITextExtended>> {
  let results: Array<string | ITextExtended> = [];
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    $(selector).each(function (index: number, element: any) {
      if (attribute) {
        results.push({
          text: $(element).text(),
          attributeValue: $(element).attr(attribute) ?? "",
        });
      } else {
        // default behavior - text only
        results.push($(element).text());
      }
    });
    return results;
  } catch (e) {
    return results;
  }
}
