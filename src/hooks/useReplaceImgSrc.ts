import AppConfig from '../configs/app';

export default function useReplaceImgSrc(content: string) {
  const cheerio = require('cheerio');

  // Change the content img src
  const baseURL = AppConfig.API_BASE_URL;

  // Load the HTML content with cheerio
  const $ = cheerio.load(content);

  // Select all img elements and replace the src attribute
  $('img').each((index: any, item: any) => {
    const src = $(item).attr('src');
    if (src && src.startsWith('../../')) {
      $(item).attr('src', `${baseURL}${src.substring(6)}`);
    }
  });

  // Get the HTML content
  const html = $.html();

  return html;
}
