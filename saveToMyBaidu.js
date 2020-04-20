const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs-extra");

const BD_ACCOUNT = "";
const BD_PASSWORD = "";

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

async function login() {
  const browser = await puppeteer.launch({
    devtools: true,
    headless: false,
    args: [`--user-data-dir=${path.resolve(__dirname, myDataDir)}`],
  });
  const page = await browser.newPage();
  await page.goto("https://pan.baidu.com/disk/home");
  // await page.goto("https://pan.baidu.com", {
  //   waitUntil: "networkidle2",
  // });
  // await delay(1000);
  // await page.click(".tang-pass-footerBar .tang-pass-footerBarULogin");
  // await page.type(".pass-text-input-userName", BD_ACCOUNT);
  // await page.type(".pass-text-input-password", BD_PASSWORD);
  // await page.click(".pass-button-submit");
  // await delay(1000);
  // return page;
}

async function main() {
  const page = await login();
}

main();
