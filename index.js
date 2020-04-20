const cheerio = require("cheerio");
const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");

function getAllBookUrls() {
  let arr = [];
  for (let i = 1; i <= 500; i++) {
    arr.push(`https://www.itpanda.net/book/${i}/download/${i}`);
  }
  return arr;
}

async function fetchOne(url) {
  console.log(`FETCH: ${url}`);
  try {
    const res = await axios.get(url, {
      headers: {
        Host: "www.itpanda.net",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
      },
    });
    const $ = cheerio.load(res.data);
    const bookInfo = {
      name: $(".alert-success h5").text(),
      url,
      downloadUrl: $(".alert-success p").text(),
    };
    console.log(`DONE: ${bookInfo.name}`);
    return bookInfo;
  } catch (e) {
    console.log(`ERROR: ${url}`, e.message, "\n\n\n");
  }
}

async function fetchAll() {
  const bookUrls = getAllBookUrls();
  const bookInfos = [];
  for (let i = 0; i < bookUrls.length; i++) {
    const url = bookUrls[i];
    const res = await fetchOne(url);
    if (res) {
      bookInfos.push(res);
    }
  }
  const outputPath = path.join(__dirname, "output.json");
  await fs.outputJson(outputPath, bookInfos);
}

async function main() {
  const outputPath = path.join(__dirname, "output.json");
  const exist = await fs.pathExists(outputPath);
  if (exist) {
    await fs.remove(outputPath);
  }
  await fetchAll();
}

main();

// fetchOne("https://www.itpanda.net/book/2/download/2");
