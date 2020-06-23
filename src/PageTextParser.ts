import cheerio from "cheerio";
import axios from "axios";

export default class PageTextParser {
  public static async parse(url: string, selector: string): Promise<Array<string>> {
    let results: Array<string> = [];
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      $(selector).each(function (index: number, element: any) {
        results.push($(element).text());
      });
    } catch (e) {
      return results;
    }
    return results;
  }
}
