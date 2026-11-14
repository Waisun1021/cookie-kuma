# Cookie くま 手作基地

使用純 HTML、CSS、JavaScript 的輕量網站。品牌介紹、商品分類、照片相簿與 Instagram 私訊購買，不需要資料庫、購物車或付費服務。

## 網站內容

- Cookie 狗狗 Logo 與網站 icon
- 飲料提袋：咖啡色、黑色
- 手作錢包：暖黃大花、復古小花、黑白大花（展示名稱可修改）
- 手作化妝包：奶油白咖啡點點，附五張商品照片
- 商品分類、細節視窗與多張照片
- IG 連結與提供的 QR Code
- 手機與電腦版面
- 未設定價格或庫存，一律透過 IG 確認

## 目前網站

- 正式網站：https://waisun1021.github.io/cookie-kuma/
- 商品編輯器：https://waisun1021.github.io/cookie-kuma/admin.html
- 原始碼：https://github.com/Waisun1021/cookie-kuma
- 已啟用 main 分支根目錄的 GitHub Pages 自動部署與 HTTPS。

## GitHub Pages 重建步驟（免費）

1. 登入 `Waisun1021`，建立公開的 `cookie-kuma` repository。
2. 上傳此資料夾**內的所有檔案與 assets 資料夾**，確保 index.html 位於 repository 根目錄。
3. 開啟 Settings → Pages → Build and deployment。
4. Source 選 Deploy from a branch，Branch 選 main，Folder 選 / (root)，按 Save。
5. 部署完成後，網站網址為 https://waisun1021.github.io/cookie-kuma/ 。目前已啟用。

`Cookie` 會出現在網址路徑 `cookie-kuma`，不需要購買獨立網域。如果希望使用 cookie-kuma.com 之類的專屬網域，則需要另外持有該網域。

## 簡易上架：不用寫程式

1. 開啟網站的 `/admin.html` 頁面，或本機雙擊 admin.html。
2. 選擇商品，修改名稱、分類、花色、說明及照片；也能新增商品與下架。
3. 照片會自動縮小並包含在商品資料中，不用另外上傳圖片。
4. 按「下載商品資料」，取得 products.js。
5. 回到 GitHub repository → Add file → Upload files，上傳新的 products.js，確認 Commit changes。
6. 等待 GitHub Pages 自動更新即可。

編輯器只在自己的瀏覽器中運作，不會直接修改網站。任何人都可以開啟編輯器，但只有擁有 GitHub 寫入權限的人能發布更新。沒有登入系統，也不要在商品資料填寫密碼、顧客資料或其他私人內容。未下載前的修改不會自動保存。

## 手動修改

商品資料集中在 `products.js`，`visible: false` 代表下架。image 是封面，images 是細節照片陣列；相對圖片路徑請使用 assets/檔名。新增商品請使用不重複 id。

## 本機預覽

在本資料夾執行 `python3 -m http.server 8000`，瀏覽 http://localhost:8000 。直接打開 index.html 也能瀏覽基本內容；複製文字功能建議使用 localhost 或 HTTPS。

## 使用者隱私

網站未加入廣告、追蹤器或分析 Cookie。「Cookie」是品牌名稱，沒有另外加入無用途的 Cookie 同意視窗。Google Fonts 會載入字型，點擊 IG 連結後將前往 Instagram，並適用其隱私政策。

商品與品牌圖片由店主提供。網站沒有宣稱第三方化妝品為販售商品；內部收納照片僅作容量展示。實際尺寸、可裝杯型、材質、售價、付款與運送方式請由店主在 IG 確認。
