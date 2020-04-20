一个[IT类电子书网站](https://www.itpanda.net)的爬虫程序, 此网站大约有400多本高清的电子书, 包括 PDF、epub、mobi、azw3等格式.

抓取后的结果参见: [output.json](./output.json)

## 如何使用
```shell script
# 下载代码
git clone git@github.com:rmlzy/itpanda_spider.git
cd itpanda_spider

# 安装依赖
npm install

# 开始抓取程序, 会在 itpanda_spider 目录下生成 output.json 文件
npm run start
```

TODO: 
1. 自动保存到百度网盘中