# X-Mirai 未來島

為壯世代打造的慢活旅讀新體驗

## 專案簡介

X-Mirai 未來島是一個專為壯世代設計的網站，融合東方六藝文化與西方慢活精神，在島嶼間重新發現生活熱情與節奏。

## 功能特色

- 🎬 **動態背景影片** - 沉浸式視覺體驗
- 📱 **響應式設計** - 完美適配各種裝置
- 🎨 **現代化 UI** - 簡潔優雅的使用者介面
- 🔍 **SEO 優化** - 完整的搜尋引擎優化
- ⚡ **高效能** - 快速載入與流暢體驗

## 技術架構

- **前端**: HTML5, CSS3, JavaScript
- **設計**: 響應式網頁設計 (RWD)
- **部署**: GitHub Pages
- **SEO**: Meta 標籤、Open Graph、結構化資料

## 檔案結構

```
Test_Site/
├── index.html          # 主頁面
├── style.css           # 樣式表
├── script.js           # JavaScript 功能
├── sitemap.xml         # 網站地圖
├── robots.txt          # 搜尋引擎指引
├── README.md           # 專案說明
├── .gitignore          # Git 忽略檔案
└── assets/             # 媒體資源
    ├── *.jpg           # 圖片檔案
    └── *.mp4           # 影片檔案
```

## 部署到 GitHub Pages

### 1. 建立 GitHub Repository

1. 登入 GitHub
2. 點擊 "New repository"
3. 輸入 repository 名稱 (例如: `Test_Site`)
4. 設定為 Public
5. 點擊 "Create repository"

### 2. 上傳檔案

```bash
# 初始化 Git repository
git init

# 添加所有檔案
git add .

# 提交變更
git commit -m "Initial commit: X-Mirai 未來島網站"

# 添加遠端 repository
git remote add origin https://github.com/yourusername/Test_Site.git

# 推送到 GitHub
git push -u origin main
```

### 3. 啟用 GitHub Pages

1. 進入 GitHub repository
2. 點擊 "Settings" 標籤
3. 滾動到 "Pages" 部分
4. 在 "Source" 下選擇 "Deploy from a branch"
5. 選擇 "main" branch
6. 點擊 "Save"

### 4. 更新網址

部署完成後，請更新以下檔案中的網址：

- `index.html` 中的 Open Graph 和 Twitter 標籤
- `sitemap.xml` 中的所有 URL
- `robots.txt` 中的 Sitemap URL

將 `yourusername` 替換為您的 GitHub 用戶名。

## 效能優化建議

### 圖片優化
- 使用 WebP 格式以減少檔案大小
- 實施圖片懶載入 (Lazy Loading)
- 提供不同解析度的圖片

### 影片優化
- 壓縮影片檔案以減少載入時間
- 提供多種格式 (MP4, WebM)
- 考慮使用 CDN 服務

### 程式碼優化
- 壓縮 CSS 和 JavaScript
- 使用 Gzip 壓縮
- 實施快取策略

## 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 授權

本專案採用 MIT 授權條款。

## 聯絡資訊

如有任何問題或建議，歡迎聯絡：
- Email: contact@xmirai.com
- Website: https://yourusername.github.io/Test_Site/

---

© 2024 X-Mirai 未來島. All rights reserved.