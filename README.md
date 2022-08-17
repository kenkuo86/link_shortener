# 短網址產生器 link_shortener

使用者可以將希望縮短的連結貼入，獲得一組專屬的短連結
當貼入已經縮短過的連結，回傳的短連結會是一樣的

## Prerequisites - 環境建置與需求
這個專案使用 Node.js + express 作為 server 的運作環境、使用 handlebars 作為模板引擎，並透過 mongoose 連接架設在 mongoDB 上的資料庫

- Node.js (v16.16.0）
- express (v4.16.4）
- express-handlebars (v3.0.0）
- mongoose（v5.9.7）
- bootstrap（v5.1.3）

## Installation and execution - 安裝與執行步驟

要在你的本地端運行此專案，請參考以下步驟

1. 下載專案
```
git clone https://github.com/kenkuo86/link_shortener.git
```

2. 打開終端機，移動到專案資料夾後，下載專案所需模組
```
npm install
```

3. 模組安裝完後，輸入：
```
npm run start
```

4. 看到以下訊息代表成功運行
```
server is running on http://localhost:3000  mongodb connected!
```

5. 到 http://localhost:3000 即可開始使用專案功能
